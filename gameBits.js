//TEAR THIS WHOLE THING APART AGAIN AGAIN AGAIN

//THE BITS ARE ALL HERE, JUST IN THE WRONG ORDER!!!!!!!!!!!!!!

//START MEDIA QUERIES!!!

//REMOVE CLICK EVENT LISTENERS WHILE BUBBLE TING HAPPNIN 



 class GameBits{
    constructor(randomNote, fretcounter, rightWrong, scoreCounter, messageBubble, notes, totalScore, bubbleMsg){
        this.question;
        this.fretcounter = fretcounter;
        this.notes = notes;
        this.rightWrong = rightWrong;
        this.scoreCounter = scoreCounter;
        this.messageBubble = bubbleMsg;
        this.totalScore = totalScore;
        this.messages;
        this.scoreArray;
        this.notesFinished = Array();
        this.fretsForRndm = Array.from(notes);
        this.bubbleMsg = document.querySelector('.message');
        this.correctOneS;

    }
    //CREATE ORDER AMOGST THE GAME METHODS (THEN TIDY THEM UP AS MUCH AS POSSIBLE)
    //SORT ANIMATIONS FOR RIGHT/ WRONG
    //SCORE COUNTER SCORE COUNTER SCORE COUNTER
    //SORT ANIMATIONS ETC FOR END/ COMPLETION
    //SORT BUTTONS FOR TURNING CORRECT ANSW ON AND OFF

    //TRY AND BUILD SOME TEXT INTO BOLD!

    //refreshes the array of notes to be guessed correctly
    buildArray(a){
        
        this.scoreArray = notes('Sharp').splice(12, 12);
        //takes the previous note and removes it from those still to be found
        if(a){
                this.notesFinished.push(notes('Sharp').indexOf(a));
                this.notesFinished.forEach((e, index)=>{
                let fretNo = e;
                this.scoreArray.splice((fretNo), 1, 0);
            });
        }
        let notesUnfinished = this.scoreArray.filter((letters)=>letters !== 0);
        console.log(notesUnfinished);
        return(notesUnfinished);
    }
    //searches for and removes all of the 0's--- which replaced the letters we removed
    filterThis(letters){
        return  letters !== 0;
    }
    initBubbleMessage(){
        this.question = this.randomGen();
        ukulele.bubbleMessageBuilder().bubbleInit()
        ukulele.bubbleMessageBuilder().bubbleNewQuest();
    }

    randomGen(a){
        let noteArray = this.buildArray(a);
        let rndmNoteNumber = Math.floor(Math.random() * (noteArray.length));
        let question = this.buildArray(a)[rndmNoteNumber];
        return(question);
    }
    //FINDING OUT HOW TO TARGET INDIVIDUAL TEXT LETTERS
   bubbleAnimation(a){
    let root = document.documentElement;
        let babble={
//REMOVE ANIMATION AFTERAFTERAFTER EACH TIME!?            
            bubbleON:()=>{
                a.style.setProperty('--animateBubble', 'randomBubbleON')
            },
            bubbleOFF:()=>{
                a.style.setProperty('--animateBubble', 'randomBubbleOFF')
            },
        }
        return babble;
    }

    //this helps us target individual svg letters!
    splitMessage(){
        //hide element with style
        //takes the text inserted into the message and seperates it into letters
        let root = document.documentElement;
        let bubble = document.querySelector(".message");
        let bubbleUp = bubble.innerHTML;
        let bubbleSplit = bubbleUp.split("")
        let bassage = []
        //take each letter and 'thurns it into' a tspan object---targetable with css
        bubbleSplit.forEach((letter)=>{bassage.push(`<tspan class='bubbleLetter'>${letter}</tspan>`)})
        //this dictates the spaces between off and on letters          
        setTimeout(()=>{
            //inserts our new tspaned letters
            // this.bubbleMsg.
            this.bubbleMsg.innerHTML= bassage.join("");
        }, 200)
    }

    bubbleOnOff(a){
        //take the letters and create a shuffled array with them
        let way = a;
        let letters = document.querySelectorAll('.bubbleLetter');
        let randomLetters = Array.from(letters);
        ukuleleBoard.shuffle(randomLetters);
        let timeoutTime = (randomLetters.length * 20) + 300;
        let bubbleIT = {
            bubbleON:()=>{
               randomLetters.forEach((letter, index)=>{
                    setTimeout(()=>{
                        this.bubbleAnimation(letter).bubbleON();
                    }, 20 * index)
                })
            },
            bubbleOFF:()=>{
              randomLetters.forEach((letter, index)=>{
                    setTimeout(()=>{
                        this.bubbleAnimation(letter).bubbleOFF();
                    }, 20 * index)
                })
            }
        }
            return bubbleIT
    }
    
    bubble(a, b){
       let messages={
            welcome: `welcome to fret off ukulele'r`,
            question: `can I get ${b} ${a}'s please`,
            congratsFret: `nice one! ${b} more ${a}'s please`,
            copyFret: `HEARD IT!`,
            wrongFret: `nice try but NOPE not quite!`,
            congratsNote: `yaas! you got all the ${a}'s`,
            heardIt: `nice try but NOPE! Heard it!`,
            completed: 'you have mastered the fretboard!'
        };
        return messages;
    }

    bubbleMessageBuilder(a){
        
        let bubbleTrans={
                bubbleInit(){
                    ukulele.bubbleMsg.innerHTML=ukulele.bubble(this.question, this.fretcounterr).welcome;
                    ukulele.splitMessage()
                    setTimeout(() => {
                        ukulele.bubbleMsg.style.opacity='1';
                        ukulele.bubbleOnOff().bubbleON();
                    }, 250);
                },


                bubbleMsg(a){
                    setTimeout(() => {
                        ukulele.bubbleOnOff().bubbleOFF();
                    }, 50);
                    setTimeout(() => {
                        setTimeout(() => {
                            ukulele.bubbleMsg.style.opacity=0;
                        }, 250);
                    }, 500);
                    setTimeout(()=>{
                        ukulele.bubbleMsg.innerHTML=a;
                        ukulele.splitMessage();
                        setTimeout(() => {
                            ukulele.bubbleMsg.style.opacity='1';
                        }, 250);
                    }, 775);
                    setTimeout(() => {
                        ukulele.bubbleOnOff().bubbleON();
                    }, 1000);
                },
                    //find new question and ask
                bubbleQuest:(a)=>{
                    setTimeout(() => {
                        this.bubbleOnOff().bubbleOFF();
                    }, 4000);
                    setTimeout(() => {
                        
                        setTimeout(() => {
                            this.bubbleMsg.style.opacity=0;
                        }, 50);
                    }, 4500);
                    
                    setTimeout(() => {
                        this.bubbleMsg.innerHTML=this.bubble(this.question, this.fretcounter).question; 
                        // this.bubbleMsg.innerHTML=a; 
                        this.splitMessage();
                        setTimeout(() => {
                            this.bubbleMsg.style.opacity='1';
                            this.bubbleOnOff().bubbleON();
                        }, 250);
                    }, 4550);
                },
                    //asks question with remaining note/ question
               
                bubbleNewQuest:(a)=>{
                   
                    setTimeout(() =>{
                        this.bubbleOnOff().bubbleOFF();
                    }, 4000);
                    setTimeout(() => {

                        setTimeout(() => {
                            this.bubbleMsg.style.opacity=0;
                        }, 50);
                    }, 4500);
                    
                    setTimeout(() => {
                        this.bubbleMsg.innerHTML=this.bubble(this.question, '4').question; 
                        // this.bubbleMsg.innerHTML=a; 
                        this.splitMessage();
                        setTimeout(() => {
                            this.bubbleMsg.style.opacity='1';
                            this.bubbleOnOff().bubbleON();
                        }, 250);
                    }, 4550);
            }
        }
        return bubbleTrans
    }
   

    score(a){
        //if total < 12 else randomCelebration!-- tray random apear and disapearing letters too!
      if(this.totalScore < 12){
        this.noteCompare(a);
        console.log('compare')

        if(this.fretcounter === 0 && a.parentElement.classList.contains('correct')){
                this.totalScore++;
                this.noteComplete(a);
            }else{

            }
      }  
    }
//ADD 'FRET' CLASS TO THE CONDITIONS!!!

onOrOff(){

    let oNoFFoNoFF = {
        OFF: (onOffFreT, index)=>{
            
                setTimeout(()=>{
                    ukuleleBoard.buttonBehaviour(onOffFreT.firstElementChild).getOff();
                    console.log(onOffFreT.classList)
                    console.log(index);
                }, index * 250); 
                setTimeout(() => {
                    onOffFreT.classList.remove('buttonOn')
                    console.log(onOffFreT.classList)
                }, index * 500);
        },
        ON: (onOffFreT, index)=>{
            
                setTimeout(()=>{
                    ukuleleBoard.buttonBehaviour(onOffFreT.firstElementChild).getOn();
                    console.log(onOffFreT.classList)
                    console.log(index);
                }, index * 250); 
                setTimeout(() => {
                    onOffFreT.classList.add('buttonOn')
                    console.log(onOffFreT.classList)
                }, index * 500);
            }
    }
    return oNoFFoNoFF

}
    //TRY SWITCHING THE NOTES OFF/ GETTING THEM READY FOR RIGHTWRONG AFTER THE BUBBLE!?
    noteCompare(a){
        if(ukulele.totalScore < 12){
            let currentClass = event.target.parentElement.classList[1];
            console.log(currentClass);
            console.log(document.querySelector('.' + currentClass))
            let chosenFret = event.target.parentElement;
            
            let answer = chosenFret.getAttribute('id');
    
            if(answer === this.question){
                if(chosenFret.classList.contains('correct')){
                    ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.fretcounter).heardIt);
                    ukulele.bubbleMessageBuilder().bubbleQuest();
                }
                else{

                    this.fretcounter --;
                    // this.scoreCounter --;
                    chosenFret.classList.add('correct');
                    chosenFret.classList.add('buttonOn');
                    setTimeout(() => {
                        ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.fretcounter).congratsFret);

                        if(this.fretcounter < 1){
                            ukulele.correctOneS = document.querySelectorAll(`.${currentClass}`)
                            ukulele.noteComplete();
                            ukulele.correctOneS.forEach((correctOne, index)=>{

                                setTimeout(() => {

                                    if(correctOne.classList.contains('correct')){
                                        ukulele.onOrOff().OFF(correctOne, (index));  
                                    }
                                }, 500);
                            })
                        }
                    }, 500);
                }
            }else{
                //use a loop for this and try and do the index - 1 thing!!!
                    ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.fretcounter).wrongFret);
                    ukulele.bubbleMessageBuilder().bubbleQuest();
                }
        }
        else{
            console.log('done');
        }
    }
    noteComplete(a){
        setTimeout(()=>{
                let quest = this.question;
                    setTimeout(() => {
                        this.fretcounter = 4;
                        UkeGameBits.completed(this.question);
                        ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.fretcounter).congratsNote);  
                    setTimeout(() => {
                            this.question = this.randomGen(quest);
                            ukulele.bubbleMessageBuilder().bubbleNewQuest(this.question, '4');
                            this.totalScore ++;
                            console.log(this.totalScore);
                    }, 200);
                }, 500);
        }, 250) 
    }
    gameComplete(){
        
    }
    

//timeOut for off might be a wee bit too short!!!!
//but well fucking done!!!!!!!!!!!!!!!!!!!!
//just one day till the actual game is complete (I fucking hope!!!)

rightOrWrong(a){

 //correct checks whether the user has aleady used this fret as an answer
 //loop ensures the on off buttons don't end up in the 'answer' array
        // let active = [];
        let i;
        // for(i = 0; i < 4; i++){
        //     active.push(document.querySelectorAll(`#${a}`)[i]);
        // }
        if(active[0].classList.contains('correct')){
            active.forEach((element, i)=>{
                
                setTimeout(()=>{
                        let corrects = document.querySelectorAll('.correct')
                        console.log(corrects)
                        ukuleleBoard.buttonBehaviour(element.firstElementChild).getOff();
                    setTimeout(()=>{
                        active = [];
                        element.classList.remove('correct');
                        element.classList.remove('buttonOn');
                    }, 2001);
                }, i * 250); 
            //(use the i * 500 to stagger)  
        });
        }else{
            active.forEach((element, i)=>{
                setTimeout(()=>{
                    ukuleleBoard.buttonBehaviour(element.firstElementChild).getOn();

                    setTimeout(()=>{
                        //correct checks whether the user has aleady used this fret as an answer
                        element.classList.add('correct');
                        element.classList.add('buttonOn');
                        active = '';
                    }, 250)
                }, i * 250)
            })
         }
    }


    

}
const ukulele = new GameBits('uke' , 4 ,'uke','4', 'messageBubble','uke', 0);
ukulele.buildArray();










    // onOrOff(onOffFretSS){
    //     onOffFretSS.forEach((onOffFret, index)=>{
    //         if(onOffFret.classList.contains('correct')){
    //             if(onOffFret.classList.contains('buttonOn')){
    //                 onOffFretSS.forEach((onOffFreT, index)=>{
    //                     setTimeout(()=>{
    //                         ukuleleBoard.buttonBehaviour(onOffFreT.firstElementChild).getOff();
    //                         setTimeout(() => {
    //                             onOffFret.classList.remove('buttonOn')
    //                         }, 250);
    //                     }, index * 75); 
    //                 })
                   
    //             }else{
    //                 onOffFretSS.forEach((onOffFreT, index)=>{
    //                     setTimeout(()=>{
    //                         ukuleleBoard.buttonBehaviour(onOffFreT.firstElementChild).getOn();
    //                     }, index * 250); 
    //                     setTimeout(() => {
    //                         onOffFreT.classList.add('buttonOn')
    //                     }, 250);
                        
    //                 })
    //             }
    //         }
    //     })
    // }