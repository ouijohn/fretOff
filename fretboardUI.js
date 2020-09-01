const messageBubble = document.querySelector(".message");
const strings = document.querySelectorAll(".string");
const frets = document.querySelectorAll('.fret');
const fretNotes = document.querySelectorAll('.fretNoteLetter')
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const onOffButtonGroup = document.querySelectorAll(".onOffBtns");
const onOffButtons = onOffButtonGroup[0].children[0].children;
const onOffBtns = Array.prototype.slice.call( onOffButtons );
//ukulelestrings var could be changed into strings for a guitar, aharp or any other stringed instrument and fed into the 
const ukuleleStrings = ['g', 'c', 'e', 'a'];


//turning the notes into an expression allows us to change the suffix on the sharp notes
const notes = function(shrp){
    return [`a`, `a${shrp}`, `b`, `c`, `c${shrp}`, `d`, `d${shrp}`, `e`, `f`, `f${shrp}`, `g`, `g${shrp}`, `a`, `a${shrp}`, `b`, `c`, `c${shrp}`, `d`, `d${shrp}`, `e`, `f`, `f${shrp}`, `g`, `g${shrp}`];
}
//the same note colors could be used for multiple instruments
let noteColors =["ffff99", "FFCC33","FF9933", "cc3300", "333399", "666699", "336666", "66CC33", "99CC33", "CCCC33", "99CC33", "ffff66", "ffff99", "FFCC33","FF9933", "cc3300", "333399", "666699", "336666", "66CC33", "99CC33", "CCCC33", "99CC33", "ffff66"];

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
    //change method to fretSound!
    fretColor(){
        if(event === ''){

        }
        if(event === ''){

        }
        if(event === ''){

        }
        if(event === ''){

        }
    }

    touchcolor(x, y){
        event.stopPropagation();
        let elem = document.elementFromPoint(x, y);
        if(elem.parentElement.classList.contains('fret')){
            elem.style.animation='touchOver 0.5s';
            setTimeout(()=>{
                // elem.style.animation='hoverOff 0.5s';
                elem.style.animation='';

            }, 600)

            // setTimeout(()=>{
            //     elem.parentElement.style.animation='';
            //     elem.parentElement.style.fillOpacity='0';
            //     console.log('cunt');
            // }, 600)
        }
    }
    // mouseColor(action, element){
    //     if(action === 'mouseover'){
    //         element.style.animation='hoverOn 0.75s forwards';
    //         setTimeout(()=>{
    //             elem.parentElement.style.animation='';
    //         }, 600);
    //     }
    //     if(action === 'mouseleave'){
    //         element.style.animation='hoverOff 0.75s forwards';
    //         setTimeout(()=>{
    //             elem.parentElement.style.animation='';
    //         }, 600);
    //     }
    //     if(action === 'click'){
    //         element.style.animation='noteDown 0.75s forwards';
    //         setTimeout(()=>{
    //             elem.parentElement.style.animation='';
    //         }, 600);
    //     }
    // }
    // fretSound(ooo){
    //     switch(ooo){
    //         case 'coo':
    //             alert('coo');
    //         break;
    //         case 'oo':
    //             alert('oo');
    //         break;
    //         case 'o':
    //             alert('o');
    //         break;
    //     }
    // }
    notify(startFret, startNote, i){
    //HIDES THE LETTERS in each fret!!!
        document.querySelectorAll('.fretNote').forEach((element)=>{element.style.display='none'})
    //sets the note letter (this.startNotes) to this.note, using the # symbol for the sharps
    //This ensures that we start at the fret relevant to each string 
        this.startNote=startNote;
    //This does the same fot the first fret on each string 
        this.startFret=startFret;
    //loop targets each fret and adds the corosponding notes, colors and events
            for(i = 0; i < 12; i++){
    //incriments the note and fret numbers in oder for us to target each fret on the string
            startFret++;
            startNote++;

    //should we make variables for the target elements?
        
    //targets the text path inside each fret and adds relevant note by calling the notes expression and adding the # symbol
            this.fretNotes[startFret].innerHTML=this.notes('#')[startNote];
    //targets the shape/path inside the fret and adds the color/ shade using the relevant note letter/ number
            this.frets[startFret].firstElementChild.style.fill=this.colors[startNote];
    //turns the shape/path's opacity down to 0 so that they can appear/ disapear on touch, hover, etc
            this.frets[startFret].style.fillOpacity='0';
    //adds the relevant note number into the classlist (we could set the note colors in the css using this)
            this.frets[startFret].classList.add(this.notes('#')[startNote]);
    //       
            this.frets[startFret].id=(this.notes('#')[startNote]);


            this.frets[startFret].addEventListener('click', ()=>{
                event.target.style.animation='noteDown 0.5s forwards'

                // this.mouseColor(event.target, 'noteDown')
                //add check method---which triggers right or wrong/  colored/ not
            });
            this.frets[startFret].firstElementChild.addEventListener('mouseover', ()=>{
                event.target.style.animation='hoverOn 0.75s forwards'
            });
            this.frets[startFret].firstElementChild.addEventListener('mouseleave', ()=>{
                setTimeout(()=>{

                }, 800)
                event.target.style.animation='hoverOff 1s forwards'
            });
        }
    } 
    


    fretify(stringNote, startFret, startNote){
        startFret = -12;
        

        //CREATE AND DISPATCH CUSTOM EVENTS!
        document.querySelector('main').addEventListener('touchmove', (ev)=>{
            this.touchcolor(event.touches[0].clientX, event.touches[0].clientY)
        });
        stringNote.forEach((element, index)=>{
            startFret = 12 * index;
            startNote = notes('#').indexOf(element);
            this.notify(startFret, startNote);
        })
    }
}


const ukuleleBoard = new FretBoard(notes, noteColors, frets, fretNotes, 'sound');

ukuleleBoard.fretify(ukuleleStrings);


        //CREATE AND DISPATCH CUSTOM EVENTS!
        //(https://www.youtube.com/watch?v=k5TSidZEH5s&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=44)