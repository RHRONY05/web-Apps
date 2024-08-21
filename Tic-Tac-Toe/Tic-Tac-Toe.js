let boxes = document.querySelectorAll(".box");
console.log(boxes);
let resetBtn = document.querySelector(".reset");
console.log(resetBtn);
let msgContainer = document.querySelector(".msg-cont");
let winLine = document.querySelector("#msg");
let newGameBtn = document.querySelector(".New");

let turnO = true;//playerO , PlayerX

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
console.log(winPattern);


//boxes is an array, so to access individualindex we need to use loop
/*for(let i = 0;i<boxes.length;i++){
    boxes[i].addEventListener("click",()=>{
        console.log("The box was clicked");
        if(turnO){
            //player O
            boxes[i].innerText = "O";
            turnO = false;
            boxes[i].disabled = true;
        }
        else{
            //player X
            boxes[i].innerText = "X";
            turnO = true;
            boxes[i].disabled = true;
        } 
    });    
}
    */

//process of making winner step-1
/*let checkWinner = () =>{
    for(pattern of winPattern){
        console.log(pattern[0].pattern[1],pattern[2]);
    }
};*/
//step-2
/*let checkWinner = () =>{
    for(pattern of winPattern){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    }
};*/

//step-6--> reset games and new Games
let enableBoxes = () =>{
    for(let box of boxes){
        box.innerText =""
        box.disabled = false;
    }
}

let resetGame = () =>{
    turnO = true;// Game was start with turn) = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//step-5
let disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

//step-4(function call)
let NewGame= (winner) =>{
    winLine.innerText = `Congratualations, Winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();//we need to diable the boxes if we get an winner
};

//step-3
let checkWinner = () =>{
    for(pattern of winPattern){
        let box1val = boxes[pattern[0]].innerText; 
        let box2val = boxes[pattern[1]].innerText; 
        let box3val = boxes[pattern[2]].innerText; 

        if(box1val!="" && box2val!="" && box3val!=""){
            if(box1val == box2val && box2val == box3val){
                console.log("Winner! "+box1val);
                NewGame(box1val);
            }
        }
    }
};
//forEach loop is better
boxes.forEach((box)=>{
    box.addEventListener(("click"), ()=>{
        if(turnO){
            //player O
            box.innerText = "O";
            turnO = false;
        }
        else{
            //player X
            box.innerText = "X";
            turnO = true;
        } 
        box.disabled = true;    
        checkWinner();
    });
});

//restart or new game

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

