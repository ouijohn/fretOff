const messageBubble = document.querySelector(".message");
const strings = document.querySelectorAll(".string");
const frets = document.querySelectorAll('.fret');
const fretNotes = document.querySelectorAll('.fretNoteLetter')
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const onOffButtonGroup = document.querySelectorAll(".onOffBtns");
const onOffButtons = onOffButtonGroup[0].children[0].children;
const onOffBtns = Array.prototype.slice.call( onOffButtons );

const ukuleleStrings = ['g', 'c', 'e', 'a'];



//double up notes for looping!
// const notes = ["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "a", "aSharp", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
// const frets = function(fret){
//     document.querySelectorAll('.frets')[fret].firstElementChild;
// }

//turning the notes into an expression allows us to change the suffix on the sharp notes
const notes = function(shrp){
    return [`a`, `a${shrp}`, `b`, `c`, `c${shrp}`, `d`, `d${shrp}`, `e`, `f`, `f${shrp}`, `g`, `g${shrp}`, `a`, `a${shrp}`, `b`, `c`, `c${shrp}`, `d`, `d${shrp}`, `e`, `f`, `f${shrp}`, `g`, `g${shrp}`];
}
let noteColors =["ffff99", "FFCC33","FF9933", "cc3300", "333399", "666699", "336666", "66CC33", "99CC33", "CCCC33", "99CC33", "ffff66", "ffff99", "FFCC33","FF9933", "cc3300", "333399", "666699", "336666", "66CC33", "99CC33", "CCCC33", "99CC33", "ffff66"];

//SELECTOR FOR BACKGROUND---- FIRST FRET
//document.querySelectorAll('.fret')[1].firstElementChild.style.fill='blue'
//SELECTOR FOR TEXT --- FIRST FRET
//document.querySelectorAll('.fret')[1].style.fill='WHITE'
//SELECTOR FOR THE FRET TEXT---FIRST, HOWEVER ONE BACK AND WE CAN DO A FOR EACH

class FretBoard{
    constructor(notes, colors, frets, fretNotes, sounds, ukuleleStrings, ntNmb, strtFrt){
        this.notes = notes;
        this.colors = colors;
        this.frets = frets;
        this.fretNotes = fretNotes;
        this.sounds = sounds;
        this.ukuleleStrings = ukuleleStrings;
        this.ntNmb;
        this.strtFrt;

    }
    notify(startFret, startNote, i){
        //sets the letter inside the fret (this.fretNotes) to this.note, using the # symbol for the sharps
        
        this.startFret=startFret;
        this.startNote=startNote;

        //HIDES THE LETTERS!!!

        document.querySelectorAll('.fretNote').forEach((element)=>{element.style.display='none'})
            
        for(i = 0; i < 12; i++){
            startFret++;
            // console.log(this.fretNotes[startFret].firstElementChild.innerHTML);
            // console.log(startFret)
            startNote++;
            // console.log(this.notes('#')[startNote])
            this.fretNotes[startFret].innerHTML=this.notes('#')[startNote];

            this.frets[startFret].firstElementChild.style.fill=this.colors[startNote];
            this.frets[startFret].style.fillOpacity='0';
            // this.frets[startFret].firstElementChild.style.fill='white';


            this.frets[startFret].classList.add(this.notes('#')[startNote]);
            // this.frets[startFret].firstElementChild.style.fill='white';

            this.frets[startFret].addEventListener('click', ()=>{
//EVENT BUBBLING? EVENT BUBBLING?  EVENT BUBBLING?  EVENT BUBBLING?     
                // event.target.style.fillOpacity='0.5';
                // event.target.style.animation='clicked 0.5s forwards'
                // event.target.classList.add('clickedIt');
            });

            this.frets[startFret].firstElementChild.addEventListener('mouseover', ()=>{
                // console.log(event.target);
                // event.target.style.fillOpacity='0.5';
                
                // event.target.style.animation='hoverOn 0.5s forwards'


            });
            this.frets[startFret].firstElementChild.addEventListener('mouseleave', ()=>{
                // console.log(event.target);
                // event.target.style.animation='hoverOff 0.5s forwards'
            });
            this.frets[startFret].firstElementChild.addEventListener('touchmove', ()=>{
                // console.log(event.target);
                // touches.style.animation='hoverOn 0.5s forwards';
                // this.frets[startFret].firstElementChild.style.animation='hoverOn 0.5s forwards';
             
                
            });



        }
    }
    fretify(stringNote, startFret, startNote){
        startFret = -12;
        document.querySelector('.drawing').addEventListener('touchstart', (ev)=>{
            // console.log(ev);
            if(event.target.tagName==='path'){
                // console.log(event.touches);
                // event.target.style.animation='hoverOn 1s'
            }
        });
        document.querySelector('.drawing').addEventListener('touchend', (ev)=>{
            // console.log(ev.touches);
            // console.log(ev.type);
            if(event.target.tagName==='path'){
                // console.log(event.touches);
                // event.target.style.animation='hoverOff 1s'
            }
        });
        //CREATE AND DISPATCH CUSTOM EVENTS!
        document.querySelector('.drawing').addEventListener('touchmove', (ev)=>{
            console.log('x =' + event.touches[0].clientX + ' y =' + event.touches[0].clientY);
            // console.log(event.touches[0].clientY);

            if(event.target.tagName==='path'){
                // console.log(event.touches); 
                event.target.style.animation='hoverOff 1s'
            }
        });
        // document.querySelector('.drawing').addEventListener('touchmove', f)
        //     // console.log(event.target.parentElement);
        //     function f(ev){
        //         console.log(ev)
        //         if(event.target.tagName==='path'){
        //             console.log(event.touches);
        //             event.target.style.animation='hoverOn 1s'
        //         }
        //     }
            

        

        stringNote.forEach((element, index)=>{
            startFret = 12 * index;
            startNote = notes('#').indexOf(element);
            // console.log(element, startFret, stringNote);
            // console.log(startFret);
            // console.log(startNote);
            // this.notify(startNote, startFret);
           this.notify(startFret, startNote);
        })
    }
}


const ukuleleBoard = new FretBoard(notes, noteColors, frets, fretNotes, 'sound');

ukuleleBoard.fretify(ukuleleStrings);


        //CREATE AND DISPATCH CUSTOM EVENTS!
        //(https://www.youtube.com/watch?v=k5TSidZEH5s&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=44)