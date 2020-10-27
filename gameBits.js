    //CREATE GAME, START TRAVERSY, READ ECONOMICS CHAPTER * 3

    class GameBits{
        constructor(randomNote, fretcounter, rightWrong, scoreCounter, messageBubble, notes, totalScore, bubbleMsg){
            this.question = this.randomGen();
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
            
            return(notesUnfinished);
        }
        //searches for and removes all of the 0's--- which replaced the letters we removed
        filterThis(letters){
            return  letters !== 0;
        }
        initBubbleMessage(){
            ukulele.bubbleMessageBuilder().bubbleInit()
            ukulele.bubbleMessageBuilder().bubbleNewQuest();
        }

        randomGen(a){
            let noteArray = this.buildArray(a);
            console.log(noteArray.length);
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
                        console.log(ukulele.bubble().a)
                        ukulele.bubbleMsg.innerHTML=ukulele.bubble(this.question, this.scoreCounter).welcome;
                        
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
                            this.bubbleMsg.innerHTML=this.bubble(this.question, this.scoreCounter).question; 
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
                            let quest = this.randomGen();
                            this.question = quest;
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
       

    //this is to be turned into a function that turns the frets on and off--- depending on wether it contains the crrect class or not!    
    //not sure why the previous fret lights up?
    //swap buttons for frets? do we use remp lits? do we add completed ones to an array/ object?
       
    rightOrWrong(a){
     //correct checks whether the user has aleady used this fret as an answer
     //loop ensures the on off buttons don't end up in the 'answer' array
            let active = [];
            let i;
            for(i = 0; i < 4; i++){
                active.push(document.querySelectorAll(`#${a}`)[i]);
            }
            if(active[0].classList.contains('correct')){
                active.forEach((element, i)=>{
                    
                    setTimeout(()=>{
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
    
        
        score(a){
            //if total < 12 else randomCelebration!-- tray random apear and disapearing letters too!
          if(this.totalScore < 12){
            this.noteCompare(a);
            console.log('compare')

            if(this.fretcounter === 0 && a.parentElement.classList.contains('correct')){
                
                    this.totalScore++;
                    this.noteComplete(a);
                    console.log('comeplete')
            }else{

            }
          }  
        }
        noteCompare(a){
        
            let chosenFret = event.target.parentElement;
            let answer = chosenFret.getAttribute('id');

            if(answer === this.question){
                if(chosenFret.classList.contains('correct')){
                    ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.scoreCounter).heardIt);
                    ukulele.bubbleMessageBuilder().bubbleQuest();
                }
                if(chosenFret.classList.contains('correct')){
                    ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.scoreCounter).heardIt);
                    ukulele.bubbleMessageBuilder().bubbleQuest();
                }
                else{
                    this.fretcounter --;
                    this.scoreCounter --;
                    chosenFret.classList.add('correct');
                    chosenFret.classList.add('buttonOn');
                    setTimeout(() => {
                        ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.scoreCounter).congratsFret);
                    }, 100);
                }
            }else{
                    ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.scoreCounter).wrongFret);
                    ukulele.bubbleMessageBuilder().bubbleQuest();
                    console.log('wrong')
                }
        }
    
        noteComplete(){
            setTimeout(()=>{
                if(this.totalScore === 12){
                    this.bubbleMsg.classList.add('complete');
                    ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble().completed);
                    UkeGameBits.completeIt();
                }else{
                    this.rightOrWrong(this.question);
                    console.log(this);
                    setTimeout(() => {
                        this.fretcounter = 4;
                        this.scorecounter = 4;
                        UkeGameBits.completed(this.question);
                        ukulele.bubbleMessageBuilder().bubbleMsg(this.bubble(this.question, this.scoreCounter).congratsNote);  
                       setTimeout(() => {
                        ukulele.bubbleMessageBuilder().bubbleNewQuest(this.question, '4');
                        console.log(this.question);
                       }, 200);

                        
                    }, 500);
                }
            }, 250) 
        }
    }
    const ukulele = new GameBits('uke' , 4 ,'uke','4', 'messageBubble','uke', 0);
    ukulele.buildArray();


