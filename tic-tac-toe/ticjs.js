let boxes = document.querySelectorAll(".row");
let reset = document.querySelector("#reset");

  let turno = true ;
  let count = 0;
  
  const winpattern = [
  [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
  ];

  boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turno){
            box.innerText = "O";
            turno=false;
        }else{
            box.innerText = "X";
            turno=true;
        }
        count++;
        checkwinner();
        let iswin = checkwinner();
       box.disabled = true;
       if(count===9 && !iswin){ 
        draw();
       }
    });
  });
 
  const draw = () => {
    document.querySelector("#msg").innerText = `Game draw reset game to play again`;
    document.querySelector(".content").classList.remove("hide");
    
  }

  const resetgame = () =>{
    turnO = true;
    count = 0;
    enablebox();
    document.querySelector(".content").classList.add("hide");
    
};



const winnercontent = (player) => {
    document.querySelector("#msg").innerText = `Congrats , winner is player ${player}`;
    document.querySelector(".content").classList.remove("hide");
      disablebox();
};


 const disablebox = () => {
    for( box of boxes){
        box.disabled = true;
     }
 };


 const  enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
 };


  const checkwinner = () => {
    for(pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 == pos3){
                // alert("winner");
                winnercontent(pos1);
                return true;
            }
        }
    }
  };

  reset.addEventListener("click",resetgame);
 document.querySelector("#new").addEventListener("click",resetgame);
