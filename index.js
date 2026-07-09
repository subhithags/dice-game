document.getElementById("rollBtn").addEventListener("click", rollDice);

function rollDice() {

    var randomnum1 = Math.floor(Math.random() * 6) + 1;
    var randomdiceimage1 = "dice" + randomnum1 + ".png";
    var randomsourceimage1 =  randomdiceimage1;

    document.querySelectorAll("img")[0].setAttribute("src", randomsourceimage1);

    var randomnum2 = Math.floor(Math.random() * 6) + 1;
    var randomdiceimage2 = "dice" + randomnum2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage2);

    if (randomnum1 > randomnum2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if (randomnum2 > randomnum1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
