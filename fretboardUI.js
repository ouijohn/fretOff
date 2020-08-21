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


//TRYTRYTRY TO BUILD SOMETHING THAT CAN BUILD UNLIMITED STRINGS/KEYS ETC
//the string setter is all the user can change (there would have to be an svg changery thing as well)


//part of a method
// let correctFretsHide = document.querySelectorAll(a);
// let correctFretsShow = document.querySelectorAll(a);
// let celebration = document.querySelectorAll(a)



class Fret{
    constructor(strings, frets, noteNames, speechBubble, scoreCard, startButtons, modal, I, fretArray){
        strings = this.strings;
        frets = this.frets;
        noteNames = this.noteNames;
        speechBubble = this.speechBubble;
        scoreCard = this.scoreCard;
        startButtons = this.startButtons;
        modal = this.modal;
        I = this.I;
        this.fretArray = [];
    }
    notify(noteLabels, noteNames, noteColors, noteLetters){
        

    //THESE WILL BE ADDED WHEN WE CREATE A 'NEW' OBJECT
        let GStringStart = 0;
        let CStringStart = 12;
        let EStringsStart = 25;
        let AStringStart = 36;

        // const newString = lastString + 12
    //still vvv importand---the foreach supplies the index number!!!!!
    //METHOD SUSSES O--- added in the 'new' object--- as will string number!
        const G = ukulele.noteNames.indexOf('g');
        const C = ukulele.noteNames.indexOf('c');
        const E = ukulele.noteNames.indexOf('e');
        const A = ukulele.noteNames.indexOf('a');
        console.log(C);
        this.frets=frets;

        this.noteNames = ["a", "aSharp", "b", "c", "cSharp", "d", "dSharp", "e", "f", "fSharp", "g", "gsharp", "a", "aSharp", "b", "c", "cSharp", "d", "dSharp", "e", "f", "fSharp", "g", "gsharp"];
    //variables i and len MIGHT need to be this'd or maybe just be paramatered in the method!?
        

        for (this.I = C; this.I < 12 + C; this.I++) {
            this.fretArray.push(this.frets[CStringStart ++]);
        }
        // console.log(this.fretArray);
        
        this.fretArray.forEach(element => {console.log(element)});

    }
    // newString(a, b){
    //     let a = new Array;
    //     for(this.I = a; this.I < 12 + a; this.I++){

    //     }
    // }
}

//number of frets, start note and number of notes! 
const fretUI = new Fret(strings, frets);

//THIS!!!! WILL MAKE THE FRET TARGETING MUCH EASIER
//FOREACH OR FOR COMBINED WITH THE NOTE FOR LOOP---
//WILL ALLOW US TO CREATE A NICE METHOD FOR EACH FRET
//MAYBE DUE TO THE SOUNDS, FUNCTIONS ETC WE HAVE AN ACTUAL FRET CLASS?

//SELECTOR FOR BACKGROUND---- FIRST FRET
//document.querySelectorAll('.fret')[1].firstElementChild.style.fill='blue'
//SELECTOR FOR TEXT --- FIRST FRET
//document.querySelectorAll('.fret')[1].style.fill='WHITE'
//SELECTOR FOR THE FRET TEXT---FIRST, HOWEVER ONE BACK AND WE CAN DO A FOR EACH

//text styles will still need to be supplied now because innertext html class has been deleted!