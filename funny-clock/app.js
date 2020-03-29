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

// grab the hour, minute and second

var date = new Date();

var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var wang;

// if no remainder of 10, then console.log fanny, else console.log cock

setInterval(seconds,500); //trying to get the value of "seconds" var to update every .5 seconds

function tester() { 
    if(seconds % 10 == 0){
    wang = "fanny"; 
}
    else {
    wang = "cock";
    }
    console.log(wang)
}

    setInterval(tester,1000); //run the function every second to console.log the new result.

    //at the moment this function will console.log fanny or cock every second, but only based on the very first time it's run (I think), so it keeps running every second but always only with the initial result, it doesn't change between cock or fanny depending on the value of the "seconds" var.
