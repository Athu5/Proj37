class Quiz{

    constructor(){}

getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
}

update(state){
    database.ref('/').update({
        gameState: state
      })
}

async start(){
if(gameState === 0 ){
    contestant = new Contestant();
    var contestantCountRef = await database.ref('contestantCount').once("value");
if(contestantCountRef.exists()){
    contestantCount = contestantCountRef.val();
    contestant.getCount();
}
}
question = new Question();
question.display();
}
play(){
background("yellow");

    this.title.hide();
    this.input1.hide();
    this.button.hide();
    var index = 0;
    
    for(var plr in allContestant){
        var correctAns = "2";
        if(correctAns === allContestant[plr].answer)
        fill("Green");
        else
            fill("red");
        }
    }
}
