
let monday = document.querySelector(".monday");
let tuesday = document.querySelector(".tuesday");
let wednesday = document.querySelector(".wednesday");
let thursday = document.querySelector(".thursday");
let friday = document.querySelector(".firday");
let saturday = document.querySelector(".saturday");
let sunday = document.querySelector(".sunday");
let extraNotes = document.querySelector(".extra-notes");
const weekInput = document.querySelector(".week-input").textContent;
const savedNotes = document.querySelector(".notes-container");
let submitBtn1 = document.querySelector(".submit-btn1");

const daysTask = [];

function clickMe(){
  let count;
  let input = document.querySelector(".text-input-monday").value;
  if(input.length === 0){
      alert("Please add your task");
  }else{
      count++;
      daysTask.push(input);
      let li = document.createElement("li");
      li.classList.add("monday-input");
      let text = document.createTextNode(input);
      li.appendChild(text);
      monday.appendChild(li);
      console.log(daysTask);
  }
}
if(daysTask.includes(5)){
    alert("It works");
}


// function Monday(){
//     let input = document.querySelector(".text-input-monday").value;
//     if(input.length === 0){
//         alert("Please add your task");
//     }else{
//         daysTask.push(input);
//         let li = document.createElement("li");
//         li.classList.add("monday-input");
//         let text = document.createTextNode(input);
//         li.appendChild(text);
//         monday.appendChild(li);
//         console.log(daysTask);
      
//     }
// }



// function add(){
//     daysTask.push(input);
//     let li = document.createElement("li");
//     let text = document.createTextNode(input);
//     li.appendChild(text);
//     monday.appendChild(li);
//     console.log(daysTask);
//     count++;
//     if(count === 5){
//       monday.removeChild(li);
//  }
// } 
// add();
// // Add input field 
// newInput.addEventListener("click", function addField(){
//     let input = document.createElement("input");
//     input.type="text/number";
//     input.classList="saved-info";
//     monday.appendChild(input);
//     console.log(monday);
//     count++;
//     if(count === 5){
//        newInput.disabled=true;

//     }
// })
// Submit button 


// var saves = document.getElementsByClassName("monday").getElementsByClassName("saved-info");
// console.log(saves);