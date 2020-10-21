const theWholeThing = document.querySelector('main');
const 

Bubble = document.querySelector(".message");
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
        this.fretsForRndm = Array.from(frets);
        this.randoms;
        this.animators;
    }
    //here is where we react to the events relating to the frets color (and trigger the sounds)


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

    }

//builds notes and note events then adds them to the frets!
    notify(startFret, startNote, i){
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
            document.documentElement.style.setProperty('--fretOpacity', '0');
    //adds the relevant note number into the classlist (we could set the note colors in the css using this)
            targetFret.classList.add(this.notes('#')[startNote]);
    //setting frets id with the relevant note gives us access to it's title quickly and easilly  
            fretBackGround.classList.add('buttonBehaviour');
            fretNoteText.classList.add('letterBehaviour');
            // fretNoteText.style.setProperty('--animateLetter', 'letterStart');

            targetFret.id=(this.notes('Sharp')[startNote]);
    //takes the relevant note and it's key and sets the sound
            targetFret.dataset.fretSound=this.notes('Sharp')[startNote];
    //attaches the class which allows us to change the way the button acts        
            
            targetFret.addEventListener('click', (event)=>{
                ukulele.score(event.target);
                this.buttonBehaviour(event.target).push();
                let activeNote = targetFret.getAttribute('data-fret-sound');
                this.soundOn(activeNote);
            });
            targetFret.addEventListener('mouseenter', (event)=>{
                this.buttonBehaviour(targetFret.firstElementChild).hoverOn();
                let activeNote = targetFret.getAttribute('data-fret-sound');
                this.soundOn(activeNote);
            });
            targetFret.addEventListener('mouseleave', (event)=>{
                this.buttonBehaviour(targetFret.firstElementChild).hoverOff();
            });
            targetFret.addEventListener('mouseup', (event)=>{
                this.buttonBehaviour(event.target).push();
            })

        }
    //attach a listener to the whole page then trigger an event to each finger drag
        theWholeThing.addEventListener('touchmove', (event)=>{

            if(event.target.parentElement.classList.contains('fret')){
                let touchX = event.touches[0].clientX;
                let touchY = event.touches[0].clientY;
                let targetFret = document.elementFromPoint(touchX, touchY);
                //this targets the fret container
                this.touchSoundOn(touchX, touchY);
                this.buttonBehaviour(targetFret).touchOver();
            }
        });

        theWholeThing.addEventListener('touchend', (event)=>{
            if(event.target.parentElement.classList.contains('fret')){
               this.buttonBehaviour(event.target).push();
            }
        })
    }; 
    animators(){
        this.animators={
            animateFrets:()=>{
            
            },
            animateButtone:()=>{

            },
            animateLetters:()=>{

            }, 
            animationRemoved:()=>{

            }
        }
    };
    buttonBehaviour(a){
        //button and onOff button both target the outer buttons. 
        //not sure why but the onOff buttons feed a different 
        let onOffBtn = a;
        let button = a.parentElement;
        let backGround = a;
        let buttonBack = a.children[0];
        // let backGround = a.children[0];
        let letters = button.children[1].firstElementChild;
        let btnLetters = onOffBtn.children[1];
        let touchFret = a.parentElement;
        let touchBack = a;
        let touchLetter = touchFret.children[1];
        let root = document.documentElement;
        //methods asign animations to targeted css variables
        this.behave={
            //MAKE MOUSE DOWN THE EVENT TYPE!!!!!
            push:()=>{

                let eventType = event.type;
                if(button.classList.contains('buttonOn') || onOffBtn.classList.contains('buttonOn')){
                    letters.style.setProperty('--animateLetter', 'getOn')

                    if(eventType==='touchstart'){
                        backGround.style.setProperty('--animate', 'touchDownActive');
                    }
                    if(eventType === 'mouseup'){
                        backGround.style.setProperty('--animate', 'clickActive');
                    }
                    else{
                    }
                }else{
                   if(eventType==='mouseup'){
                    backGround.style.setProperty('--animate', 'clickInactive');
                    }
                    if(eventType === 'touchend'){
                        backGround.style.setProperty('--animate', 'touchDownINActive');
                    }
                }
            },
            hoverOn:()=>{

                if(button.classList.contains('buttonOn') || onOffBtn.classList.contains('buttonOn')){
                    letters.style.setProperty('--animateLetter', 'letterOver')
                    backGround.style.setProperty('--animate', 'overActive');
                }else{
                    backGround.style.setProperty('--animate', 'overInActive');
                }
            },
            //the on off buttons MIGHT need their own methods--- instead of using the frets ones!
            btnHvrON:()=>{
                btnLetters.style.setProperty('--animateLetter', 'letterOn')

            },
            btnHvrOFF:()=>{
                btnLetters.style.setProperty('--animateLetter', 'letterOff')

            },
            hoverOff:()=>{

            //if either the onOff btn or fret container is 'on'
                if(button.classList.contains('buttonOn') || onOffBtn.classList.contains('buttonOn')){
                    letters.style.setProperty('--animateLetter', 'letterOff')
                    backGround.style.setProperty('--animate', 'offActive');

            //if the containers are 'off'
                }else{
                //this looks at the buttons---when they are 'on'
                    if(onOffBtn.classList.contains('pushIt') && onOffBtn.classList.contains('complete')){
                        if((onOffBtn).classList.contains('buttonOn')){
                            backGround.style.setProperty('--animate', 'offActive');
                        }else{
                            backGround.style.setProperty('--animate', 'onoffBtnOFFInactive');
                        }
                    }else{
                        backGround.style.setProperty('--animate', 'offInActive');
                        setTimeout(()=>{
                            backGround.style.setProperty('--animate', '');
                        }, 750)
                    }
                }
            },
            //fills in the frets/ on off buttons of targeted note
            getOn: ()=>{
               backGround.style.setProperty('--animate', 'getOn');
            },
            //clears out the background of targeted note
            getOff: ()=>{
                backGround.style.setProperty('--animate', 'getOff');
            },
            //re-organises the fret array randomly and fills them in in that order
            randimation: ()=>{
                backGround.style.setProperty('--animate', 'randimation');
                setTimeout(()=>{
                    backGround.style.setProperty('--animate', '');
                }, 2550)
            },
            afterRandimation: ()=>{
                backGround.style.setProperty('--animate', 'afterRandimation');
            },
            letterRandimation: ()=>{
                     onOffBtn.children[1].style.setProperty('--animateLetter', 'letterRandimation')
                setTimeout(()=>{
                    onOffBtn.children[1].style.setProperty('--animateLetter', '')
                }, 2500)
            },

            
            touchOver: ()=>{
                if(! touchFret.classList.contains('buttonOn')){
                    touchBack.style.setProperty('--animate', 'touchOver');
                }else{
                    touchBack.style.setProperty('--animate', 'activeTouchOver');
                }
                setTimeout(()=>{
                    touchBack.style.setProperty('--animate', '');
                }, 250)
            },
            touchDown: ()=>{
                let eventType = event.type;
                if(button.classList.contains('buttonOn') || onOffBtn.classList.contains('buttonOn')){
                    backGround.style.setProperty('--animate', 'touchDownActive');
                    setTimeout(()=>{
                        backGround.style.setProperty('--animate', '');

                    }, 250)
                }
            }
        }
        return this.behave;
    }

    shuffle(button){
        button.sort(() => Math.random() - 0.5);
      }
    //turn this into an object with two methods--> frets and onoff buttons

        //turning this into an object means we can use it for  start, completed and reset
        //we will set the animation as a variable so it can start at different opacities
        randomate(a){
            this.randoms ={
                shuffle:(a)=>{
                    a.sort(() => Math.random() - 0.5);
                },
                //shuffles an array built from the frets and animates them one after another--- via timeout
                frets:()=>{
                    this.shuffle(this.fretsForRndm);

                    this.fretsForRndm.forEach((fret, index, arr)=>{
                        setTimeout(()=>{
                            this.buttonBehaviour(fret).randimation();
                            // this.buttonBehaviour().letterRandimation();
                        }, 12.5 * index)
                    })

                },
                buttons:(a)=>{
                    onOffBtns.forEach((button, index, arr)=>{
                        setTimeout(()=>{
                            this.buttonBehaviour(button).randimation();
                            this.buttonBehaviour(button).letterRandimation();                           
                        }, 12.5 * index)
                    })

                },
                letters:(letter)=>{
                    

                },
                fretOff:(a)=>{
                    this.buttonBehaviour(button).letterRandimation(a);
                }
            }
            return this.randoms;
            
        }
    //DISPLAY CSS STYLE--- BLOCK ETC CANNOT BE ANIMATED
        fretInit(){
            ukuleleBoard.randomate().frets()
        }
        fretRenit(){

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
ukuleleBoard.fretInit();



//if(letter/ key hass class added sound it, then move to next letter?!)


//CREATE AND DISPATCH CUSTOM EVENTS!
//(https://www.youtube.com/watch?v=k5TSidZEH5s&list=PLyuRouwmQCjmQTKvgqIgah03HF1wrYkA9&index=44)

//MY ATTEMPT AT RANSOmising


//INITIAL ATTEMPT/S AT RANDOMATION, MIGHT BE REUSABLE




// randomNote=(a)=>{
//     let empty = [];
//     this.fretsForRndm.forEach((element, index, array) => {
//         setTimeout(()=>{
//             let ranNote = Math.floor(Math.random() * frets.length);
//             let ranFret = this.fretsForRndm[ranNote].firstElementChild;
//             ranFret.style.setProperty('--animate', 'randimation');
//             ranFret.classList.add('okokok');

//             empty.push(ranFret);

//             setTimeout(()=>{
//                 array.splice(ranFret, 0);
//                  ranFret.style.setProperty('--animate', '');
//             }, 300);
//         }, 50 * index)
        
//     });

//     setTimeout(()=>{

//     }, timeOut);
// }

// randimateukule=(a)=>{
        
//     this.shuffle(this.fretsForRndm);
//     this.fretsForRndm.forEach((element, index, arr) => {
//          setTimeout(()=>{
//              this.buttonBehaviour(element).randimation();
             
//          }, 12.5 * index)
//      });
//      setTimeout(()=>{
//          this.fretsForRndm.forEach((element, index)=>{
//              this.buttonBehaviour(element).letterRandimation();
//          })
//          let i = 1;
//          onOffBtns.forEach((element, index)=>{
//              setTimeout(()=>{
//                  // this.buttonBehaviour(element).randimation();
//                  i++; 
//                  this.buttonBehaviour(element).letterRandimation();
//              }, 22.5 * index)
//          })
//      }, 20 * this.fretsForRndm.length)  
 
//  }