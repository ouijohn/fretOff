class GameUI{
    
    constructor(colors){
        this.colors = colors;
        this.onOffBtns = onOffBtns;
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

        onOffBtns.forEach((element, index)=> {
            element.classList.remove
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
        // console.log(targetFret);
        // console.log(pushedBGround);
        // console.log(pushedLetter);
        if(targetFret.classList.contains('complete')){
            let targetNote = this.getFretID(targetFret);
            if(event.target.parentElement.classList.contains('buttonOn')){
                console.log(a)
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


}


const UkeGameBits = new GameUI(noteColors);
UkeGameBits.buttonify();
