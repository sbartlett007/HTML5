function draw_leg(fraction) {
    dctx.lineTo(center_x + length * Math.sin (2 * Math.PI * fraction),
        center_y - length * Math.cos(2 * Math.PI * fraction));
}

function init() {
    var canvas = document.getElementById("clockface");
    dctx = canvas.getContext('2d');
    dctx.fillStyle = "black";
    center_x = 100;
    center_y = 100;
    length = 100;
    show_hands();
}

function show_hands(){
    dctx.clearRect(0, 0, 200, 200);
    var now = new Date();
    seconds = now.getSeconds();
    minutes = now.getMinutes() + seconds/60;
    hours = now.getHours() + minutes/60;
    show_hand(seconds/60, 0.002);
    show_hand(minutes/60, 0.005);
    show_hand(hours/60, 0.01);
    var rate = 1000;
    setTimeout(show_hands, 1000);
}

function show_hand(fraction, width){
    dctx.beginPath();
    dctx.moveTo(center_x, center_y);
    draw_leg(fraction - width);
    draw_leg(fraction + width);
    dctx.fill();
}
