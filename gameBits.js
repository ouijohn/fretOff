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
        //BUILD A SMALL/ HALF OVERALL ARRAY---? THEN REMOVE THE RELEVANT NOTE EACH TURN! 
        randomGen(){
            let rndmNoteNumber = Math.floor(Math.random() * (notes('Sharp').length));
            let scoreArray = notes('Sharp');
            console.log(scoreArray);
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
                congratsNote: `congrats! you got all the ${a}'s`,
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
                    }, i * 25); 
                //(use the i * 500 to stagger the)  
            });
            }else{
                active.forEach((element, index)=>{
                    setTimeout(()=>{
                            ukuleleBoard.buttonBehaviour(element.children[0]).getOn();
                            // console.log(element.children[0]);
    
                        setTimeout(()=>{
                            //correct checks whether the user has aleady used this fret as an answer
                            element.classList.add('correct');
                            active = '';
                            element.classList.add('buttonOn');
                        }, 2001)
                    }, 0)
                })
            }
        }
    
        
        score(a){
            //if total < 12 else randomCelebration!-- tray random apear and disapearing letters too!
            this.noteCompare(a);

            if(this.fretcounter === 0 && a.parentElement.classList.contains('correct')){
                this.noteComplete(a);
                this.totalScore++;
                alert(this.totalScore);
            }
            if(this.totalScore === 12){
                alert('hooray!');
            }
        }
        noteCompare(a){
                
                let chosenFret = event.target.parentElement;
                let answer = chosenFret.getAttribute('id');
                console.log(chosenFret);

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
                        
                        // console.log(chosenFret.firstElementChild);
                        // ukuleleBoard.buttonBehaviour(chosenFret).getOn();
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
                let quest = this.randomGen();
                this.question = quest;
                this.bubbleMsg.innerHTML=this.bubble(this.question, this.scoreCounter).question;
            })
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