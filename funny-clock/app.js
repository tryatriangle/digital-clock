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

const date = new Date()

const hours = date.getHours();

const minutes = date.getMinutes();

const seconds = date.getSeconds();

// if seconds divide by 10

function tester() { 
    if(seconds % 10 == 0)
    console.log("funny fanny");
    else
    console.log("whacky willy");

}

tester()