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
        initQuestionMessage(){
            let quest = this.randomGen();
            this.question = quest;
            this.bubbleMsg.innerHTML=this.bubble().welcome;
            this.bubbleMessageBuilder();
            //-------------//
            setTimeout(()=>{
                this.bubbleMessageBuilder();
                setTimeout(()=>{
                    this.bubbleMsg.innerHTML=this.bubble(this.question, this.scoreCounter).question;
                }, 2000)
                setTimeout(()=>{
                    this.bubbleMessageBuilder();
                }, 2000)
            }, 2200)
            
        }
        //
        bubbleThingy(question, score, message){
            setTimeout(()=>{
                this.bubbleMessageBuilder();
                setTimeout(()=>{
                    this.bubbleMsg.innerHTML=this.bubble(this.question, this.scoreCounter).question;
                    this.bubbleMsg.innerHTML=this.bubble(this.question, this.scoreCounter).question;
                }, 2000)
                setTimeout(()=>{
                    this.bubbleMessageBuilder();
                }, 2000)
            }, 2200)
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
                
                bubbleON:()=>{
                    a.style.setProperty('--animateBubble', 'randomBubbleON')
                    
                },
                bubbleOFF:()=>{
                    a.style.setProperty('--animateBubble', '')

                    setTimeout(()=>{
                        a.style.setProperty('--animateBubble', 'randomBubbleOFF')

                    }, 500)

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
            // bubble.getElementsByClassName.display='none';
            let bubbleSplit = bubbleUp.split("")
            let bassage = []
            //take each letter and 'thurns it into' a tspan object---targetable with css
            bubbleSplit.forEach((letter)=>{bassage.push(`<tspan class='bubbleLetter'>${letter}</tspan>`)})
            
            setTimeout(()=>{
                //inserts our new tspaned letters
                this.bubbleMsg.innerHTML= bassage.join("");
                this.bubbleMsg.style.opacity='1';
                this.bubbleOnOff();
            }, 250)
        }
        bubbleOnOff(a){
            //take the letters and create a shuffled array with them
            let way = a;
            let letters = document.querySelectorAll('.bubbleLetter');
            let randomLetters = Array.from(letters);
            ukuleleBoard.shuffle(randomLetters);
            randomLetters.forEach((letter, index)=>{
                setTimeout(()=>{
                    if(this.bubbleMsg.classList.contains('ON')){

                        this.bubbleAnimation(letter).bubbleOFF();
                    }
                    else{
                        this.bubbleAnimation(letter).bubbleON();
                    }
                }, 12.5 * index)
            })
        }
        
        bubble(a, b){
            
            this.messages={
                welcome: `welcome to fret off ukulele'r`,
                question: `can I get ${b} ${a}'s please`,
                congratsFret: `nice one! ${b} more ${a}'s please`,
                copyFret: `HEARD IT!`,
                wrongFret: `nice try but NOPE not quite!`,
                congratsNote: `congrats! you got all the ${a}'s`,
                heardIt: `nice try but NOPE! Heard it!`,
                completed: 'you have mastered the fretboard!'
            };
            return this.messages;
        }
        bubbleMessageBuilder(){
            if(this.bubbleMsg.classList.contains('ON')){
                this.bubbleOnOff();
                setTimeout(()=>{
                    this.bubbleMsg.classList.remove('ON')
                    setTimeout(()=>{
                        this.bubbleMsg.style.opacity='0';
                        this.bubbleMsg.innerHTML='';
                    }, 100)
                }, 500)
            }else{
                console.log('why')
                this.splitMessage();
                setTimeout(()=>{
                    this.bubbleMsg.classList.add('ON');
                }, 1000)
            }
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
                            element.classList.remove('correct');
                            active = [];
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
                            active = '';
                            element.classList.add('buttonOn');
                        }, 2001)
                    }, i * 250)
                })
             }
        }
    
        
        score(a){
            //if total < 12 else randomCelebration!-- tray random apear and disapearing letters too!
          if(this.totalScore < 12){
            this.noteCompare(a);

            if(this.fretcounter === 0 && a.parentElement.classList.contains('correct')){
                this.noteComplete(a);
                this.totalScore++;
            }
          }  

            if(this.totalScore === 12){

                ukuleleBoard.randomate().frets()
                setTimeout(()=>{
                    ukuleleBoard.randomate().buttons()
                }, 1250);
                this.bubbleMsg.innerHTML=this.bubble().completed;
            }
        }
        noteCompare(a){
                
            let chosenFret = event.target.parentElement;
            let answer = chosenFret.getAttribute('id');

            if(answer === this.question){
                if(chosenFret.classList.contains('correct')){
                    this.bubbleMsg.innerHTML=this.bubble().heardIt;
                    setTimeout(()=>{
                        this.bubbleMsg.innerHTML=this.bubble(this.question, this.fretcounter).question;
                    },2500)
                }
                else{
                    chosenFret.classList.add('correct');
                    chosenFret.classList.add('buttonOn');
                    this.bubbleMsg.innerHTML=this.bubble(this.question, this.fretcounter).congratsFret;
                    this.fretcounter --;
                }
            }else{
                this.bubbleMsg.innerHTML=this.bubble().wrongFret; 
                setTimeout(()=>{
                    this.bubbleMsg.innerHTML=this.bubble(this.question, this.fretcounter).question;
                }, 2000)      
            }
        }
    
        noteComplete(){
            this.bubbleMsg.innerHTML=this.bubble(this.question, this.fretcounter).congratsNote;
            this.fretcounter = 4;
            this.rightOrWrong(this.question);
            UkeGameBits.completed(this.question);
            setTimeout(()=>{
                let quest = this.randomGen(this.question);
                this.question = quest;
                this.bubbleMsg.innerHTML=this.bubble(this.question, this.scoreCounter).question;
            }, 250)
        }
        
    
    }
    const ukulele = new GameBits('uke' , 4 ,'uke','4', 'messageBubble','uke', 0);
    ukulele.buildArray();
    ukulele.initQuestionMessage();
