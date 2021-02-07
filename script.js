function time() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    
    if ( hours < 10) {
    hours = "0" + hours ;
    }
    if ( minutes < 10) {
        minutes = "0" + minutes;
    }
    if ( seconds < 10) {
        seconds = "0" + seconds;
    }
    
    var digit = document.getElementById("digit");
    digit.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(time,1000);

/* Changing colors */
function changeColorRed() {
    var c = document.getElementById("digit");
    c.style.color = "#f00";
}
function changeColorGreen() {
    var c = document.getElementById("digit");
    c.style.color = "#008000";
}