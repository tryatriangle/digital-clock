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

function updateClock(){
    var date=new Date();

    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
}

setInterval(updateClock,1000);

updateClock();

// function jokeSelector chooses a joke from the joke array (chosen randomly from the number of jokes in the array) and checks whether it should send anything to the div .

function jokeSelector(){

    var jokes = ["Yo mamma so dumb she failed a blood test.","Yo mamma so ugly when she tried to join an ugly contest they said sorry, no professionals.","Yo mamma so dumb that if she spoke her mind she would be speechless.","Yo mamma is so stupid she sits on the TV and watches the couch"];

    var randomJoke = "\"" + jokes[Math.floor(Math.random()*jokes.length)] + "\"";

    if(seconds % 10 ==0) {
        document.getElementById("joke").innerText = randomJoke;
        document.getElementById("joke").textContent = randomJoke;
    }
}

    setInterval(jokeSelector,1000);

