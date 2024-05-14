const button =  document.querySelector(".buttonArea");
const noteArea = document.querySelector(".noteArea");

button.addEventListener("click",(e)=>{
    addText();
    saveData();
});

addText = ()=>{
    let div = document.createElement("div");
    div.classList.add("note");
    div.innerHTML = `<div contenteditable="true" class="content"></div><i class="fa-solid fa-trash-can"></i>`;
    noteArea.appendChild(div);
    saveData(); 
}

noteArea.addEventListener("click",(e)=>{
     if(e.target.tagName === 'I'){
        e.target.parentElement.remove();
        saveData();
     }

     if(e.target.classList.value === 'content'){
        notess = e.target;
        console.log(e.target);
        notess.onkeyup = function (){
            saveData();
        }
     }
     
})

let content = document.querySelector(".content");




function saveData(){
    localStorage.setItem("data",noteArea.innerHTML);
}

function showData(){
    noteArea.innerHTML = localStorage.getItem("data");
}

showData();

// console.log(data);

