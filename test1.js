function move_paragraph() {
    next = current + "px";
    current += 1;
    if (current > 3000) {
        current = 0;
    }
    paragraph.style.left = next;
    var rate = document.getElementById("rate").value; //milliseconds
    setTimeout(move_paragraph, rate);
}
function init() {
    paragraph = document.getElementById("original");
    paragraph.style.position = "absolute";
    current = 0;
    move_paragraph();
}    
