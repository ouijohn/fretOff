// onOffBtns.forEach((element, index, arr)=> {
//     element.addEventListener('click', ()=>
//     // {console.log(arr[index]);
//     })
// })

close.addEventListener('click', ()=>{
    // console.log('modal closed');
})





//part of a method
// let correctFretsHide = document.querySelectorAll(a);
// let correctFretsShow = document.querySelectorAll(a);
// let celebration = document.querySelectorAll(a)


//SELECTORS, EVENTS LISTENERS, STYLING AND ADDING ATTRIBUTES (SOUNDS/ COLORS) ALL DONE INSIDE THE CLASS
//SO IS ATTACHING EACH NEW CLASS WITH ITS BITS TO EACH RELEVANT FRET!!!




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
        this.frets=frets;

        this.noteNames = ["a", "aSharp", "b", "c", "cSharp", "d", "dSharp", "e", "f", "fSharp", "g", "gsharp", "a", "aSharp", "b", "c", "cSharp", "d", "dSharp", "e", "f", "fSharp", "g", "gsharp"];
    //variables i and len MIGHT need to be this'd or maybe just be paramatered in the method!?
        

    //onOffButtons.forEach((element)=>{element.addEventListener('click', ()=>{console.log(element)})})
    
      
        // console.log(this.fretArray);
        
        // this.fretArray.forEach(element => {console.log(element)});

    }
    // newString(a, b){
    //     let a = new Array;
    //     for(this.I = a; this.I < 12 + a; this.I++){

    //     }
    // }
}
//selectt frot by class
//document.querySelectorAll('.fretNoteLetter')[1].setAttribute('font-size', '1em')

//number of frets, start note and number of notes! 
const fretUI = new Fret(strings, frets);

//THIS!!!! WILL MAKE THE FRET TARGETING MUCH EASIER
//FOREACH OR FOR COMBINED WITH THE NOTE FOR LOOP---
//WILL ALLOW US TO CREATE A NICE METHOD FOR EACH FRET
//MAYBE DUE TO THE SOUNDS, FUNCTIONS ETC WE HAVE AN ACTUAL FRET CLASS?



//fretboard leftovers

// const cunt = document.querySelectorAll('.fretNote')[1].firstElementChild.innerHTML='F#';

// const cuntoo = document.querySelectorAll('.fretNote')[1].innerHTML='5';

// const cuntThree = document.querySelectorAll('.fret')[1].firstElementChild.style.fill='blue';


// c#
// d
// d#