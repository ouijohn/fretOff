//CREATE GAME, START TRAVERSY, READ ECONOMICS CHAPTER * 3

class GameBits{
    constructor(randomNote, fretcounter, rightWrong, scoreCounter, bubbleMsg, notes, totalScore){
        this.question = this.randomGen();
        this.fretcounter = fretcounter;
        this.notes = notes;
        this.rightWrong = rightWrong;
        this.scoreCounter = scoreCounter;
        this.bubbleMsg = bubbleMsg;
        this.totalScore = totalScore;
        this.messages;
        this.outCome;
    }
    //CREATE ORDER AMOGST THE GAME METHODS (THEN TIDY THEM UP AS MUCH AS POSSIBLE)
    //SORT ANIMATIONS FOR RIGHT/ WRONG
    //SCORE COUNTER SCORE COUNTER SCORE COUNTER
    //SORT ANIMATIONS ETC FOR END/ COMPLETION
    //SORT BUTTONS FOR TURNING CORRECT ANSW ON AND OFF

    //TRY AND BUILD SOME TEXT INTO BOLD!
    randomGen(){
        let rndmNoteNumber = Math.floor(Math.random() * (notes('Sharp').length));
        let scoreArray = notes('Sharp');
        // console.log(scoreArray[rndmNoteNumber]);
        return(scoreArray[rndmNoteNumber]);
    }
    // takeSelected(a){
    //     let guess = this.compare(a.getAttribute('id'));
    //     return(guess);
    // }
    bubble(a, b){
        this.messages={
            welcome: `welcome to fret off ukulele'r`,
            question: `can I get ${b} ${a}'s please`,
            congratsFret: `nice one! ${b} more ${a}'s please`,
            copyFret: `HEARD IT!`,
            wrongFret: `nice try but NOPE not quite!`,
            congratsNote: `congrats! you got all the ${this.question, this.scoreCounter}'s`,
            heardIt: `nice try but NOPE! Heard it!`
        };
        return this.messages;
    }
    initQuestionMessage(){
        let quest = this.randomGen();
        this.question = quest;
        this.bubbleMsg.innerHTML=this.bubble().welcome;
        setTimeout(()=>{
            this.bubbleMsg.innerHTML=this.bubble(this.question, this.scoreCounter).question;
        }, 2000);
    }
    score(a){

        this.noteCompare(a);

        if(this.fretcounter === 0){
            this.noteComplete(a);

        }
    }
    noteCompare(){
            
       
            let chosenFret = event.target.parentElement;
            let answer = chosenFret.getAttribute('id');
        
            if(answer === this.question){
                if(chosenFret.classList.contains('correct')){
                    this.bubbleMsg.innerHTML=this.bubble().heardIt;
                    setTimeout(()=>{
                        this.bubbleMsg.innerHTML=this.bubble(this.fretcounter, this.question).question;
                    },2500)
                }

                else{
                    chosenFret.style.setProperty('--fretOpacity', '0.85');
                    chosenFret.style.animation='';
                    this.fretcounter --;
                    this.bubbleMsg.innerHTML=this.bubble(this.fretcounter, this.question).congratsFret;
                    chosenFret.classList.add('correct');
                }
            }else{
                this.bubbleMsg.innerHTML=this.bubble().wrongFret; 
                setTimeout(()=>{
                    this.bubbleMsg.innerHTML=this.bubble(this.fretcounter, this.question).question;
                }, 2000)      
            }
        
    }
    noteComplete(){
        this.bubbleMsg.innerHTML=this.bubble(this.fretcounter, this.question).congratsNote;
        chosenFret.classList.add('correct');
    }
    // result(){

    // }
    // onOffButton(){

    // }
    // randomFrets(){

    // }

}
const ukulele = new GameBits('uke' , 4 ,'uke','4', messageBubble,'uke', 0);
ukulele.initQuestionMessage();
