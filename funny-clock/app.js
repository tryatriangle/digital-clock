function showtime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    if(h < 10) {
        h = "0" + h;
    }

    if(m < 10) {
        m = "0" + m;
    }

    if(s < 10) {
        s = "0" + s;
    }

    var time = h + ":" + m + ":" + s;
    document.getElementById("clock-face").innerText = time;
    document.getElementById("clock-face").textContent = time;

    setTimeout(showtime, 1000);
}

showtime(); 

// FUNNY CLOCK SCRIPT BELOW THIS LINE 

var hours;
var minutes;
var seconds;

var wang;

function updateClock(){
    var date=new Date();

    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
}

setInterval(updateClock,1000);

updateClock();

//separation of functions

// randomJoke chooses a random joke from the joke array and checks whether it should every second.

function jokeSelector(){

    var jokes = ["Yo momma so fat","Yo momma so ugly","Yo momma so stupid"];

    var randomJoke = jokes[Math.floor(Math.random()*jokes.length)];

    if(seconds % 10 ==0) {
        console.log(randomJoke);
    }
}

    setInterval(jokeSelector,1000);

// now I want to pass the value of jokeSelector into the var oneLiner and send that to a div element.

    var oneLiner = jokeSelector;

/*

Yo momma so fat, I took a picture of her last Christmas and it's still printing.
Yo momma so ugly when she tried to join an ugly contest they said sorry, no professionals.
Yo momma so stupid, she put two quarters in her ears and thought she was listening to 50 Cent.


*/