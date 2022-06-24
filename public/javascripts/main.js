const canvas = document.getElementById("myCanvas");
// canvas.width = 200;

const ctx = canvas.getContext("2d");
let balls = [
    new Ball(window.innerWidth / 2, window.innerHeight / 3)
];

animate();

function animate() {
    // ------------ Update ----------------
    balls.forEach(ball => {
        ball.update();
    });

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    // ------------- Draw -----------------
    balls.forEach(ball => {
        ball.draw(ctx);
    });

    ctx.font = "30px Courier New";
    ctx.fillText("Mohammad Ammar Ramadhan", 50, window.innerHeight / 3);
    ctx.font = "26px Courier New";
    ctx.fillText("github - mohammarr", 50, (window.innerHeight / 3) + 40);

    requestAnimationFrame(animate);
}

document.onclick = (event) => {
    balls.push(new Ball(event.clientX, event.clientY));
}