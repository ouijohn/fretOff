let createFrets =  function(){
  var frets =  document.querySelectorAll("frets");


}();

let reset(){

};

let ranomNote = function(){
  return "a";
}();

class fret{
  constructor(note, color, sound);

  function hoverOn(a){
      a.classList.remove("noteHoverOff");
      a.classList.add("noteHover");
  }
  function hoverOff(a){
      a.classList.remove("noteHover");
      a.classList.remove("noteKeyDown");
      a.classList.add("noteHoverOff");
  }
  function clickOn(a){
     a.classList.add("noteKeyDown");
  }
}();


let creatEvents = function(){

    noteButton1.onmouseover=function(){
      aNote.hoverOn(this);
    }
    noteButton1.onmouseleave=function(){
          aNote.hoverOff(this);
    }
    noteButton1.onclick=function(){
        aNote.clickOn(this);
        aNote.compare();
    }
}();

let notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f'];

//maybe json?

let noteLetterProperties = {


};

let noteNumberProperties = {

};
