class GameUI{
    
    constructor(colors){
        this.colors = colors;
        this.onOffBtns = onOffBtns;
    }
    completed(a){
        // let butt = `#${a}`
        let completeButton = document.querySelectorAll(`#${a}`)[4];
        completeButton.classList.add('complete');
        this.buttonBehaviour(completeButton).getOn(a);
    }
    buttonify(){

        console.log(onOffBtns);
        
        onOffBtns.forEach((element, index)=> {
            element.classList.remove
            element.classList.add('pushIt')
            element.setAttribute('id', notes('Sharp')[index - 1]);
            element.children[0].style.fill=this.colors[index - 1];
            element.children[0].classList.add('onOffButtons');
            element.children[0].classList.add('buttonBehaviour');
            element.children[1].classList.add('letterBehaviour');

        //ANIMATE THE LETTERS THEN APPLY THE SYSTEM TO THE FRETS!!!
            element.addEventListener('click', ()=>{
                ukulele.rightOrWrong(this.onOffButtons());
                //this takes the button/ target and dictates how it behaves
                this.buttonBehaviour(event.target.parentElement).push();
                
                if(event.target.parentElement.classList.contains('onButtonOn')){
                    event.target.parentElement.classList.remove('onButtonOn');
                }else{
                    event.target.parentElement.classList.add('onButtonOn')
                }
            });
            //I am not sure why but we have to target the parent element to get the element???
            element.addEventListener('mouseenter', ()=>{
                this.buttonBehaviour(event.target).hoverOn()
            });
            element.addEventListener('mouseleave', ()=>{
                this.buttonBehaviour(event.target).hoverOff()
            });
        });
    }
        

    onOffButtons(){
        let pushed = event.target;
        if(pushed.parentElement.classList.contains('pushIt') && pushed.parentElement.classList.contains('complete')){
            return event.target.parentElement.getAttribute('id');
        }
    }
    //a seperate method for the behaviour of the buttons helps seperate things and make it more controlable
    //(do this for the fretboard too!)
    buttonBehaviour(a){
        event.stopPropagation();
        let button = a;
        let backGround = a.firstElementChild;
        // let backGround = a.children[0];
        let letters = a.children[1];
        console.log(letters);

        let root = document.documentElement;
        this.behave={
            push: ()=>{
                letters.style.setProperty('--animateLetter', 'letterClick')

                if(button.classList.contains('onButtonOn')){
                    backGround.style.setProperty('--animate', 'clickActive');
                }else{
                    backGround.style.setProperty('--animate', 'clickInactive');
                }
            },
            hoverOn: ()=>{
                letters.style.setProperty('--animateLetter', 'letterOver')

                if(button.classList.contains('onButtonOn')){
                    backGround.style.setProperty('--animate', 'overActive');
                }else{
                    backGround.style.setProperty('--animate', 'overInActive');
                }
                console.log(letters);
            },
            hoverOff: ()=>{
                letters.style.setProperty('--animateLetter', 'letterOff')

               if(button.classList.contains('onButtonOn')){
                    backGround.style.setProperty('--animate', 'offActive');
                }else{
                    backGround.style.setProperty('--animate', 'offInActive');
                }

                
            },
            getOn: ()=>{
                // let backGround = a.firstElementChild;
                // event.stopPropagation();
                // backGround.classList.remove('onOffButtons');
                // backGround.classList.add('getOn');
                backGround.style.setProperty('--animate', 'getOn');

            },
            getOff: ()=>{
                // let backGround = a.firstElementChild;
                // event.stopPropagation();
                // backGround.classList.remove('onOffButtons');
                // backGround.classList.add('getOn');
                backGround.style.setProperty('--animate', 'getOff');

            }
            
        }
        return this.behave;
    }

}


const UkeGameBits = new GameUI(noteColors);
UkeGameBits.buttonify();
