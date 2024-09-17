let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#pick");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const compchoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const rindex  =  Math.floor(Math.random() * 3);
    return options[rindex];
};

const draw = () => {
    msg.innerText = "Game Draw";
}

const showwinner = (userwin) =>{
    if(userwin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = "You win";
    }
    else{
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = "You lose";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const computerchoice = compchoice();
    console.log("comp choice = ",computerchoice);

    if(userchoice === computerchoice){
        draw();
    }else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = computerchoice === "scissors" ? false : true;
        }
        else{
            userwin = computerchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

