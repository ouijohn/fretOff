const theWholeThing = document.querySelector('main');
const messageBubble = document.querySelector(".message");
const strings = document.querySelectorAll(".string");
const frets = document.querySelectorAll('.fret');
const fretNotes = document.querySelectorAll('.fretNoteLetter')
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const onOff = document.querySelector('footer');
const onOffButtonGroup = document.querySelectorAll(".onOffBtns");
const onOffButtons = onOffButtonGroup[0].children[0].children;
const onOffBtns = Array.prototype.slice.call( onOffButtons );
//ukulelestrings var could be changed into strings for a guitar, aharp or any other stringed instrument and fed into the 
const ukuleleStrings = ['g', 'c', 'e', 'a'];


// turning the notes into an expression allows us to change the suffix on the sharp notes
const notes = function(shrp){
    return [`a`, `a${shrp}`, `b`, `c`, `c${shrp}`, `d`, `d${shrp}`, `e`, `f`, `f${shrp}`, `g`, `g${shrp}`, `a`, `a${shrp}`, `b`, `c`, `c${shrp}`, `d`, `d${shrp}`, `e`, `f`, `f${shrp}`, `g`, `g${shrp}`];
}
//the same note colors could be used for multiple instruments
let noteColors =["ffff99", "FFCC33","FF9933", "cc3300", "333399", "666699", "336666", "66CC33", "99CC33", "CCCC33", "99CC33", "ffff66", "ffff99", "FFCC33","FF9933", "cc3300", "333399", "666699", "336666", "66CC33", "99CC33", "CCCC33", "99CC33", "ffff66"];
//class collects and holds the text content, color and sound information for each fret and attaches the methods and events to them
class FretBoard{
    constructor(notes, colors, frets, fretNotes, sounds, ukuleleStrings, ukeNoteKey, ntNmb, strtFrt, touchtivity){
        this.notes = notes;
        this.colors = colors;
        this.frets = frets;
        this.fretNotes = fretNotes;
        this.sounds = sounds;
        this.ukuleleStrings = ukuleleStrings;
        this.ukeNoteKey = ukeNoteKey;
        this.strtFrt;
        this.touchtivity = touchtivity;
    }
    //here is where we react to the events relating to the frets color (and trigger the sounds)
    fretColor(element){
        event.stopPropagation();
        let chosenFret = event.target.parentElement;
        let fretFill = event.target;
        let chosenFretNote = event.target.parentElement.children[1].firstElementChild;

   
    //these react to events set in the notify loop with an event listener atached to each fret
        if(event.type === 'mouseover'){
            event.stopPropagation();

            if(chosenFret.classList.contains('correct')){
                fretFill.style.animation='activeHoverOn 1s forwards'
                chosenFretNote.style.animation='activeLetterHoverOn 1s forwards';
                setTimeout(()=>{
                    chosenFretNote.style.animation='';
                }, 500)
            } 
            if(chosenFret.classList.contains('onOn')){
                fretFill.style.animation='activeHoverOn 1s forwards'
            }
            else{
                fretFill.style.animation='hoverOn 1s forwards';
            }
            let activeNote = chosenFret.getAttribute('data-fret-sound');
            this.soundOn(activeNote);
        }

        if(event.type === 'mouseleave'){
            if(chosenFret.classList.contains('correct') || chosenFret.classList.contains('onOn')){
                fretFill.style.animation='activeHoverOff 1s forwards'
                chosenFretNote.style.animation='activeLetterHoverOn 1s forwards';
                setTimeout(()=>{
                    chosenFretNote.style.animation='';
                }, 500)

            }
            // if(chosenFret.classList.contains('onOn')){
            //     fretFill.style.animation='activeHoverOff 1s forwards'
            // }
            
            else{
                fretFill.style.animation='hoverOff 1s forwards';
            }
        }

        if(event.type === 'click'){
            if(chosenFret.classList.contains('correct')){
                fretFill.style.animation='activeNoteDown 1s alternate';
                chosenFretNote.style.animation='activeLetterClickOn 1s forwards';
                setTimeout(()=>{
                    chosenFretNote.style.animation='';
                }, 1000)
            }
            else{
                fretFill.style.animation='noteDown 1s forwards';
            }
            let activeNote = chosenFret.getAttribute('data-fret-sound');
            this.soundOn(activeNote);
            // ukulele.takeSelected(event.target.parentElement);
            // ukulele.compare(element);
            ukulele.score(element);
        }
    //the touch event is set just bellow the notify loop
        if(event.type === 'touchmove'){
    //takes the coords of every fret touched and animates it
            this.touchcolor(event.touches[0].clientX, event.touches[0].clientY);
            this.touchSoundOn(event.touches[0].clientX, event.touches[0].clientY);
        }
    }
    //maybe build a touch event to ensure the initial touch is sounded

    //takes the coords, builds a var out of each touched and animates it
    touchcolor(x, y){
        //stops the fu**ing bubbling!
        
        event.stopPropagation();
        let elem = document.elementFromPoint(x, y);
        if(elem.parentElement.classList.contains('fret')){

            if(elem.classList.contains('correct')){
                elem.style.animation='activeTouchOver 1s forwards';
                setTimeout(()=>{
                    elem.style.animation='';
                }, 600)
            }else{
                elem.style.animation='touchOver 1s forwards';
                setTimeout(()=>{
                    elem.style.animation='';
                }, 600)
            }
            
            let activeNote = elem.parentElement.getAttribute('data-fret-sound');
            this.touchtivity.push(activeNote);

        }
    }

//START USING SWITCH STATEMENTS!


//THIS WILL REPEAT EVERY TIME YOUR FINGER MOVES!

///there an object/ instantiation/ array for each letter? if so just use number one/0! Then delete the thing!!!

//add each instanation of the object into one, use the first one, then delete

//maybe we have a container for each note that we clear after use?

//or maybe a modular one that is made, used (via the first/ 0) to sound the note then cleared
       soundOn(note){
            const fretSounds = document.querySelector('#fretSounds')
            var x = document.createElement("AUDIO");
            x.setAttribute("src","sounds/" + note + ".wav");
            fretSounds.appendChild(x).play();
            x.volume=0.1;
            setTimeout(()=>{
                x.remove()
            }, 750)
        }
       touchSoundOn(x, y){
        //we feed the coords of the element targeted by the touchmove
        let elem = document.elementFromPoint(x, y);
        //data-fret-sound has the title of the relevant sounds inside - aSharp, etc
        let touchNote = elem.parentElement.getAttribute('data-fret-sound');
        //if the playing element contains the class all we do is remove it (after it has a chance to play)
        //this ensures we don't try to play the same note multiple times
        if(elem.parentElement.classList.contains('playing')){
            setTimeout(()=>{
            elem.parentElement.classList.remove('playing')
        }, 5000)
        //play the note once/ trigger soundOn(coords, coords) then add the class to 
        }else{
            this.soundOn(touchNote);
            elem.parentElement.classList.add('playing')
        }
        //an initial attempt to do the above- adding played note to array once (might be worth keeping)
            // this.touchtivity.push('hello');
            // console.log(this.touchtivity);
            // this.touchtivity.push(event.target.getAttribute('id'));
            // console.log(this.touchtivity);
        }

//builds notes and note events then adds them to the frets!
    notify(startFret, startNote, i){
    //HIDES THE LETTERS in each fret *for development purposes!!!
        // document.querySelectorAll('.fretNote').forEach((element)=>{element.style.display='none'})
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
    //these variables change with every instanation making the code simpler and easier to read
            let targetFret = this.frets[startFret];
            let fretBackGround = this.frets[startFret].firstElementChild;
            let fretNoteText = this.fretNotes[startFret];

            
    //targets the text path inside each fret and adds relevant note by calling the notes expression and adding the # symbol
            fretNoteText.innerHTML=this.notes('#')[startNote];
    //targets the shape/path inside the fret and adds the color/ shade using the relevant note letter/ number
            fretBackGround.style.fill=this.colors[startNote];
    //turns the shape/path's opacity down to 0 so that they can appear/ disapear on touch, hover, etc
            //  targetFret.style.fillOpacity='0';
            document.documentElement.style.setProperty('--fretOpacity', '0');
    //adds the relevant note number into the classlist (we could set the note colors in the css using this)
            targetFret.classList.add(this.notes('#')[startNote]);
    //setting frets id with the relevant note gives us access to it's title quickly and easilly       
            targetFret.id=(this.notes('Sharp')[startNote]);
    //takes the relevant note and it's key and sets the sound
            targetFret.dataset.fretSound=this.notes('Sharp')[startNote];

            targetFret.addEventListener('click', ()=>{
                this.fretColor(event.target);
            });
            fretBackGround.addEventListener('mouseover', ()=>{
                this.fretColor(event.target);
            });
            fretBackGround.addEventListener('mouseleave', ()=>{
                this.fretColor(event.target);
            });
        }
    //attach a listener to the whole page then trigger an event to each finger drag
        theWholeThing.addEventListener('touchmove', (ev)=>{
            this.fretColor(event.target);
        });
    } 
 //this will make the animation begaviour much simpler!   
    fretBehaviour(a){
        this.behave={

        }
    }
//triggers all the building etc
    fretify(stringNote, startFret, startNote){
    //CREATE AND DISPATCH CUSTOM EVENTS- both the values have to be reduced by 1 to take the index to 0!
        stringNote.forEach((element, index)=>{
            startFret = 12 * index - 1;
            startNote = notes('#').indexOf(element);
            this.notify(startFret, startNote - 1);
        })
    }
}

const ukuleleBoard = new FretBoard(notes, noteColors, frets, fretNotes, 'sound', 'uke', 'uke', 'uke','uke', []);

ukuleleBoard.fretify(ukuleleStrings);



//if(letter/ key hass class added sound it, then move to next letter?!)


//CREATE AND DISPATCH CUSTOM EVENTS!
//(https://www.youtube.com/watch?v=k5TSidZEH5s&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=44)