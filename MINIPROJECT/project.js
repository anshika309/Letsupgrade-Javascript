var Timer = document.getElementById("time");
let start = document.getElementById('sBtn'),
    stop = document.getElementById('stBtn'),
    clear = document.getElementById('clrBtn');

let seconds = 0, minutes = 0, hours = 0,t;


function add()
 {
    seconds++;
    if (seconds >= 60)
     {
        seconds = 0;
        minutes++;
        if (minutes >= 60)
         {
            minutes = 0;
            hours++;
        }
    }
    
    Timer.innerText = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    startStopwatch();
}
function startStopwatch()
 {
    t = setTimeout(add, 1000);
}
function stopStopwatch()
{
    clearTimeout(t);
}
function clearStopwatch() 
{
    Timer.innerText = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}