const messageBubble = document.querySelector(".message");
const strings = document.querySelectorAll(".string");
const frets = document.querySelectorAll('.fret');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const onOffButtonGroup = document.querySelectorAll(".onOffBtns");
const onOffButtons = onOffButtonGroup[0].children[0].children;
const onOffBtns = Array.prototype.slice.call( onOffButtons );



onOffBtns.forEach((element, index, arr)=> {
    element.addEventListener('click', ()=>
    {console.log(arr[index]);
    })
})

close.addEventListener('click', ()=>{
    console.log('modal closed');
})






//part of a method
// let correctFretsHide = document.querySelectorAll(a);
// let correctFretsShow = document.querySelectorAll(a);
// let celebration = document.querySelectorAll(a)



class Fret{
    constructor(strings, frets, noteNames, speechBubble, scoreCard, startButtons, modal){
        strings = this.strings;
        frets = this.frets;
        noteNames = this.noteNames;
        speechBubble = this.speechBubble;
        scoreCard = this.scoreCard;
        startButtons = this.startButtons;
        modal = this.modal;
    }
    notify(noteLabels, noteNames, noteColors, noteLetters){
        

    //THESE WILL BE ADDED WHEN WE CREATE A 'NEW' OBJECT
        const GStringStart = 0;
        const CStringStart = 12;
        const EStringsStart = 25;
        const AStringStart = 36;

        // const newString = lastString + 12

    //METHOD SUSSES O--- added in the 'new' object--- as will string number!
        const G = ukulele.noteNames.indexOf('g');;
        const C = ukulele.noteNames.indexOf('c');
        const E = ukulele.noteNames.indexOf('e');
        const A = ukulele.noteNames.indexOf('a');


        this.noteNames = ["a", "aSharp", "b", "c", "cSharp", "d", "dSharp", "e", "f", "fSharp", "g", "gsharp", "a", "aSharp", "b", "c", "cSharp", "d", "dSharp", "e", "f", "fSharp", "g", "gsharp"];
    //variables i and len MIGHT need to be this'd or maybe just be paramatered in the method!?
        
    //SET I SET I SET I SET I 
        for (i = 4; i < 16; i++) {
            console.log(ukulele.noteNames[i]);
          }
    }
}

//number of frets, start note and number of notes! 
const fretUI = new Fret();
