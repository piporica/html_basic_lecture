

let timestring;
let isStart = false
let timerId;
let i = 0;

function start_clock() {

    if(!isStart){
        timerId = setInterval(()=>{
            document.getElementById("clockButton").value = "시계멈춤"
            let nowTime = new Date();
            timestring = nowTime.toLocaleString();
            let milsec = nowTime.getMilliseconds();
            timestring += milsec;
            document.getElementById("clock").innerHTML = timestring

        }, 1)

        isStart = true
    }

    else{
        document.getElementById("clockButton").value = "시계시작"
        clearInterval(timerId);
        isStart = false
    }

}