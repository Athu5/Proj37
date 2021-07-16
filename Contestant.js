class Contestant{

    constructor(){
        this.index = null;
        this.input1 = null;
    }

   getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value", (data)=>{
    contestantCount = data.val();   
    })
   }
        
   updateCount(count){
    database.ref('/').update({
    contestantCount: count
    })
   }

   update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
    input1:this.input1,
    })
   } 

   getContestantInfo(){
    var contestantInfoRef = database.ref('contestant');
    contestantInfoRef.on("value",(data)=>{
      allContestant = data.val();
        })
    }
}
