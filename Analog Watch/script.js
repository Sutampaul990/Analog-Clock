setInterval( () => {
    let hh = document.getElementById('hh');
    let ss = document.getElementById('ss');
    let mm = document.getElementById('mm');

    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let hr = document.getElementById('hr');
    let mn = document.getElementById('mn');
    let sc = document.getElementById('sc');

    //12 Hours Clock
    hh.style.strokeDashoffset = 510 -(510*h)/12;

    //60 Minutes 
    mm.style.strokeDashoffset = 630 - (630 * m) / 60;

    //60 Seconds 
    ss.style.strokeDashoffset = 760 - (750 * s) / 60;

    //360 / 60 seconds = 6
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    //360 / 60 minutes = 6
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    //360 / 12 hours = 30
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`;

    hr.style.transform = `rotateZ(${h * 30}deg)`;
    mn.style.transform = `rotateZ(${m * 6}deg)`;
    sc.style.transform = `rotateZ(${s * 6}deg)`;
})