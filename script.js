let targetNum = Math.floor(Math.random() * 10) + 1;
let life = 3;


function login() {
    
    let userN ="user1";
    let passW ="123";

    let Username=  document.getElementById("username").value;
    let Password=  document.getElementById("password").value;

    if(Username !== userN){
        alert("Invalid username");
        return;
    }else if(Password !== passW){
        alert("Invalid password");
    }else{
        window.close("index.html");
        window.open("game.html");
    }
}

function game(){
    let answer = document.getElementById("inputGnumber").value;

    if(answer < targetNum){
        
        life--;
        let text = document.getElementById("Life");
        text.innerHTML = '';
        text.innerHTML = `Chances: ${life}`;
        alert("Wrong! Go higher!");

    }else if(answer > targetNum){
        
        life--;
        let text = document.getElementById("Life");
        text.innerHTML = '';
        text.innerHTML = `Chances: ${life}`;
        alert("Wrong! Go lower!");
    }else{
        alert("Congrats, You won the game!");
        window.close("game.html");
        window.open('game.html');
    }

    if(life === 0){
        alert("You run out of chances");
        retry = document.getElementById("Retry");
        retry.disabled = false;
        retry = document.getElementById("Submit");
        retry.disabled = true;

        
        
        
    }

}

function reset(){
   
    window.close("game.html");
    window.open('game.html');
   

}

function logout(){
    window.close("game.html");
    window.open("index.html");
}








