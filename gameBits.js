//CREATE GAME, START TRAVERSY, READ ECONOMICS CHAPTER * 3

class GameBits{
    constructor(randomNote, fretcounter, rightWrong, scoreCounter, bubbleMsg, notes){
        this.question = this.randomGen();
        this.fretcounter = fretcounter;
        this.notes = notes;
        this.rightWrong = rightWrong;
        this.scoreCounter = scoreCounter;
        this.bubbleMsg = bubbleMsg;
        
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
    initQuestionMessage(){
        let quest = this.randomGen();
        this.bubbleMsg.innerHTML=`gz all the ${this.question}'s please`
        this.question = quest;
    }
    compare(){
        // console.log(this.takeSelected.guess) 
        let chosenFret = event.target.parentElement;
        let answer = chosenFret.getAttribute('id');
        console.log(this.question);
       
        if(answer === this.question && ! chosenFret.classList.contains('correct')){
            chosenFret.classList.add('correct');
            chosenFret.style.setProperty('--fretOpacity', '0.85');
            // chosenFret.style.fillOpacity='1';
            

            this.scoreCounter --;
            chosenFret.style.animation='';
            this.bubbleMsg.innerHTML=`nice one! ${this.scoreCounter} more ${this.question}'s please`

            setTimeout(()=>{

            }, 1000)

        }else{
            console.log(this.bubbleMsg.innerHTML);   
            this.bubbleMsg.innerHTML= `nope! I'm looking for ${this.question}' s`; 
            setTimeout(()=>{
                this.bubbleMsg.innerHTML=`gz all the ${this.question}'s please`
            }, 2000)      
           
        }
        
    }
    // result(){

    // }
    // onOffButton(){

    // }
    // randomFrets(){

    // }

}
const ukulele = new GameBits('uke' ,'uke','uke','4', messageBubble,'uke');
// ukulele.questionMessage();
