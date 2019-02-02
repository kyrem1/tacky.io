//Implementation of rainbow text using jQuery library

let hue = 80;
let k = document.querySelector('.middleTitle');
function loop() {
        hue += 1;
        hue = hue % 360;
        let color = "hsl(" + hue + ", " + "55%, 70%)"
        k.style.color = color;
        requestAnimationFrame(loop);
}
loop();
