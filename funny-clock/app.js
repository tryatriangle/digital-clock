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

    var jokes = ["Your mother is so thick she failed a blood test.","Your mother is so ugly when she tried to join an ugly contest, they said \"sorry, no professionals\".","Your mother so brainless that if she spoke her mind she would be speechless.","Your mother is so stupid she sits on the TV and watches the sofa","Did you hear the one about the child with AIDS? It never gets old.", "What do Princess Dianna and Pink Floyd have in common? Their last big hit was the wall.", "How do you get a nun pregnant? Dress her up like an altar boy.", "How many potatoes does it take to kill an Irishman? None.", "EASILY identify who\'s constantly stinking out the office toilets by swapping the air-freshener for an air-horn.", "GREGGS STAFF. Shouting \"Yes, Chef!\" while sliding the steak bakes in the oven will give the shop a professional kitchen feel."];

    var randomJoke = "\"" + jokes[Math.floor(Math.random()*jokes.length)] + "\"";

    if(seconds % 10 ==0) {
        document.getElementById("joke").innerText = randomJoke;
        document.getElementById("joke").textContent = randomJoke;
    }
}

    setInterval(jokeSelector,1000);
