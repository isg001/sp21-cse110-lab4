function runTimer() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(runTimer, 1000);
