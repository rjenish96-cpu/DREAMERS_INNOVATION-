function showTime() {
	document.getElementById('currentTime').innerHTML = function showTime() {
    const nepalTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kathmandu"
    });

    document.getElementById("currentTime").innerHTML = nepalTime;
}

showTime();

setInterval(showTime, 1000);
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
