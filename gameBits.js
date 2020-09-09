class GameBits{
    constructor(randomNote, fretcounter, rightWrong, scoreCounter, bubbleMsg, notes){
        this.question =this.randomGen();
        this.fretcounter = fretcounter;
        this.notes = notes;
        this.rightWrong = rightWrong;
        this.scoreCounter = scoreCounter;
        this.bubbleMsg = bubbleMsg;
        
    }
    
    randomGen(){
        let rndmNoteNumber = Math.floor(Math.random() * (notes('#').length));
        let scoreArray = notes('#');
        // console.log(scoreArray[rndmNoteNumber]);
        return(scoreArray[rndmNoteNumber]);
    }
    takeSelected(a){
        this.compare(a.getAttribute('id'));
    }
    compare(answer){
        console.log(this.question);
        console.log(answer);
        if(answer === this.question){
            // alert('hurray')
        }else{
            // alert('boooo');
        }
        
    }
    // result(){

    // }
    // onOffButton(){

    // }
    // randomFrets(){

    // }

}
const ukulele = new GameBits('uke' ,'uke','uke','uke','uke','uke');
ukulele.randomGen();
