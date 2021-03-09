//Boiler plate
var noteTitle = document.getElementById("noteTitle").value;
var notes = document.getElementById("notes").value;
var clear = document.getElementById("clearButton");

//On input, the Title and Notes are saved seperately into localstorage
notes.oninput = function(){
  localStorage.setItem("title",noteTitle);
  localStorage.setItem("notes",notes);
}

//When user comes back, onload it will check if there is anything in localstorage, if not then it will just be black
notes.onload = function(){
  document.getElementById("noteTitle").value = localStorage.getItem("title");
  document.getElementById("notes").value = localStorage.getItem("notes");
}

//Whether or not it has text, button will clear the text in the boxes and since it counts as input it will be saved.
clear.onclick = function(){
  document.getElementById("noteTitle").value = "";
  document.getElementById("notes").value = "";
}
