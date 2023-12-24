let boxes = document.querySelectorAll(".box");

const ResetBtn = document.querySelector("#reset-button");
const newGame = document.querySelector(".new-button");
const msg = document.querySelector("#msg")
const ContainerGame = document.querySelector(".msg-container");


let turn0 = true;

let winPattens = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [0, 4, 8],
];


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{

        if(turn0){
            box.innerHTML  = "O";
            turn0 = false;
        }
        else{
            box.innerHTML = "X";
            turn0 = true;
        }

        box.disabled = true;

        checkWinner();
    })
})


const disabledBoxes = () =>{

    for (box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{

    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () =>{
    for(let patten of winPattens){
       
        let pos1Val = boxes[patten[0]].innerText;
        let pos2Val = boxes[patten[1]].innerText;
        let pos3val = boxes[patten[2]].innerText;
    

const showWinner = (Winner) => {
msg.innerText = `Congratulations, Winner is ${Winner}`;
ContainerGame.classList.remove("hide")
}

    if(pos1Val != "" && pos2Val !="" && pos3val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3val){


            showWinner(pos1Val)
            disabledBoxes( )
        }
    }
}
}



const resetGame =()=> {

turn0 = true
    enableBoxes()
    ContainerGame.classList.add("hide");
}


newGame.addEventListener("click", resetGame);
ResetBtn.addEventListener("click", resetGame);
