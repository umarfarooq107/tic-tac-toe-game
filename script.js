let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame=()=>{
  turnO=true;
  enableboxex();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O"
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableboxex =()=>{
for (let box of boxes){
  box.disabled=true;
}
}
const enableboxex =()=>{
for (let box of boxes){
  box.disabled=false;
  box.innerText="";
}
}

const showWinner=(winner)=>{
  msg.innerText=`congratulations, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxex();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  };
};
 newgamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);