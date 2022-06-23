// If user add a note

let addBtn = document.querySelector("#addbtn");

addBtn.addEventListener("click", function () {
  let addTxt = document.querySelector("#addtxt");
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTxt.value = "";

  showNotes();
});

// function to show notes from local stroage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class="noteCard card mx-2 my-2" style="width: 18rem">
          <div class="card-body">
            
            <p class="card-text"> ${element}</p>
            <button id="${index}" onclick = "delteNotes(this.id)" class="btn btn-primary">Delete</button>
             <button id="${index}" onclick = "editNotes(this.id)" class="btn btn-primary my-2">Edit Button</button>
             
          </div>
        </div>`;
  });
  let notesElm = document.querySelector("#notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML =
      "Nothing to show here please Add something from the addnote section";
  }
}
// function to delete a note
function delteNotes(index) {
  // console.log(index);
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
// Search filter
let search = document.getElementById("search");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    console.log(cardTxt);
    console.log(element);

    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
// edit button functionality
function editNotes(index) {
  console.log(index);
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let value = JSON.parse(localStorage.getItem("notes", notesObj));
  console.log(value[index]);
  let addTxt = document.querySelector("#addtxt");
  //   let text = document.querySelector(".card-text").innerText;
  //   console.log(text);

  addTxt.value = value[index];
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

showNotes();
