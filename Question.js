class Question{

    constructor(){
        this.input1 = createInput("Enter your name ");
        this.button=createButton("Submit");
        this.title = createElement("mqg");
        this.question = createElement("question1");
        this.option1 = createElement("options1");
        this.option2 = createElement("options2");
    }

    hide(){
        this.title.hide();
        this.input1.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350, 50);

        this.question.html("Question:- What starts and ends with the letter E , but has only one letter? ");
        this.question.position(150, 80);

        this.option1.html("1: Everyone ");
        this.option1.position(150, 100);

        this.option2.html("2: Envelope ");
        this.option2.position(150, 120);

        this.input1.position(50, 200);
        this.button.position(230, 200);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });


    }
}
