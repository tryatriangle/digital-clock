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

//! FUNNY CLOCK SCRIPT BELOW THIS LINE !//

var hours;
var minutes;
var seconds;

var wang;

function updateClock(){
    let date=new Date();

    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
}

setInterval(updateClock,1000);

updateClock();

function tester() { 
  
    if(seconds % 10 == 0){
    wang = "fanny"; 
}
    else {
    wang = "cock";
    }
    console.log(wang)
}

    setInterval(tester,1000);