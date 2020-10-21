class GameUI{
    
    constructor(colors){
        this.colors = colors;
        this.onOffBtns = onOffBtns;
        this.modal = modal;
        this.infoButton;
        this.closeButton;
        this.restartButton;
        this.startButton;
        this.init;
        this.menuButtons;
        
    }
    completed(a){
        // let butt = `#${a}`
        // let completeButton = document.querySelectorAll(`#${a}`)[4].firstElementChild;
        let completeButton = document.querySelectorAll(`#${a}`)[4];
        completeButton.classList.add('complete');
        completeButton.classList.add('buttonOn');
        ukuleleBoard.buttonBehaviour(completeButton).getOn(a);
    }

    buttonify(){
        this.restartButton = document.querySelector('.restartButton');
        this.infoButton = document.querySelector('.infoButton');
        this.startButton = document.querySelector('.startButton')
        this.closeButton = document.querySelector('.close')
        this.infoButton.addEventListener('click', ()=>{
            this.menuButtons().modalOn(this.modal);
        });
        this.restartButton.addEventListener('click', ()=>{
            this.menuButtons().restart();

        });
        this.startButton.addEventListener('click', ()=>{
            this.menuButtons().restart();

        });
        this.closeButton.addEventListener('click', ()=>{
            this.menuButtons().modalOff(this.modal);
        });

        onOffBtns.forEach((element, index)=> {
            // element.classList.remove
            element.classList.add('pushIt')
            element.setAttribute('id', notes('Sharp')[index - 1]);
            element.children[0].style.fill=this.colors[index - 1];
            element.children[0].classList.add('onOffButtons');
            element.children[0].classList.add('buttonBehaviour');
            element.children[1].classList.add('letterBehaviour');
            element.children[1].classList.add('letterStart');

        //ANIMATE THE LETTERS THEN APPLY THE SYSTEM TO THE FRETS!!!
        //(maybe remove the listener onclick then add it again after animations finished)
            element.addEventListener('click', ()=>{
                //this takes the button/ target and dictates how it behaves
                ukuleleBoard.buttonBehaviour(element).push();
                //this dictates what it does- ie on/ off
                this.onOffButtons(element);
            });
            //I am not sure why but we have to target the parent element to get the element???
            element.addEventListener('mouseenter', ()=>{
                ukuleleBoard.buttonBehaviour(element).hoverOn()
                ukuleleBoard.buttonBehaviour(element).btnHvrON()
            });
            element.addEventListener('mouseleave', ()=>{
                ukuleleBoard.buttonBehaviour(element).hoverOff()
                ukuleleBoard.buttonBehaviour(element).btnHvrOFF()
            });
        });
    }
        
    getFretID(a){
        let fretID = a.getAttribute('id');
        return fretID;
    }
    onOffButtons(a){
        let targetFret = a;
        let pushedBGround = event.target;
        let pushedLetter = a.children[1];
        // if(pushed.parentElement.classList.contains('pushIt') && pushed.parentElement.classList.contains('complete')){
        //     return event.target.parentElement.getAttribute('id');
        // }
        if(targetFret.classList.contains('complete')){
            let targetNote = this.getFretID(targetFret);
            if(event.target.parentElement.classList.contains('buttonOn')){
                event.target.parentElement.classList.remove('buttonOn');
                ukulele.rightOrWrong(targetNote);
                // ukuleleBoard.buttonBehaviour(a).clickOn();
            }else{
                console.log('off');
                event.target.parentElement.classList.add('buttonOn');
                ukulele.rightOrWrong(targetNote);
                // ukuleleBoard.buttonBehaviour(a).clickOff();
            }
        }

    }
    menuButtons(a){
        let infoButton={
            modalOn:(a)=>{
                let root = document.documentElement;
                a.style.display='block';
                a.style.setProperty('--animateModal', 'modalOn');
            },
            modalOff:(a)=>{
                a.style.setProperty('--animateModal', 'modalOff')
                setTimeout(()=>{
                    a.style.display='none';
                }, 2000)
            },
            restart:()=>{
                ukuleleBoard.randomate().buttons();
                ukuleleBoard.randomate().frets()

                console.log('cunto');
            }
        }
        return infoButton;
    }

    init(){
        setTimeout(()=>{
            ukuleleBoard.randomate().buttons();
        }, 1250)
    }

}


const UkeGameBits = new GameUI(noteColors, document.querySelector('.module'));
UkeGameBits.buttonify();
UkeGameBits.init();
