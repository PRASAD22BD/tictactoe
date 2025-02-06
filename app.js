let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGame=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked!");
        if(turnO){
            box.innerText="O";
            turnO=false;
        
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkwinner();
        if(count===9&& !isWinner){
            gameDraw();
        }
        
    });

});
const gameDraw=()=>{
    msg.innerText=`Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congrats, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    };

const checkwinner=()=>{
    for(let patterns of winPatterns){

            let posval1=boxes[patterns[0]].innerText;
            let posval2=boxes[patterns[1]].innerText;
            let posval3=boxes[patterns[2]].innerText;

            if(posval1!="" && posval2!="" && posval3!=""){
                if(posval1===posval2 && posval2===posval3){
                    console.log("WINER", posval1);

                    showWinner(posval1);
                    return true;
                }
            }
       
        
        
    }
};
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
