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
            element.addEventListener('mouseover', ()=>{
                this.buttonBehaviour(event.target.parentElement).hoverOn()
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
        let root = document.documentElement;
        this.behave={
            push: ()=>{
                //backGround.classList.add('getOff'); (can still go back to add remove class!)
                if(button.classList.contains('onButtonOn')){
                    backGround.style.setProperty('--animate', 'getOn');
                }else{
                    backGround.style.setProperty('--animate', 'getOff');
                }
            },
            hoverOn: ()=>{
                // backGround.classList.add('mouseOVERinActive')
                // backGround.classList.remove('mouseOFFinActive')
                // backGround.classList.remove('onOffButtons');
                // backGround.style.setProperty('--animate', 'overInActive');
                if(button.classList.contains('onButtonOn')){
                    backGround.style.setProperty('--animate', 'overActive');
                }else{
                    backGround.style.setProperty('--animate', 'overInActive');
                }

            },
            hoverOff: ()=>{
                // let backGround = a.firstElementChild;
                // backGround.classList.remove('mouseOVERinActive')
                // backGround.classList.add('mouseOFFinActive')
                // backGround.style.setProperty('--animate', 'offInActive');
                
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
