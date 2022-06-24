class Ball {
    constructor(x, y, radius = 50, color = "black") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        this.velocity = new Vector2D(0, 0);
        this.acceleration = 0.2;
        this.maxSpeed = 10;
    }

    update() {
        this.#move();
    }

    #move() {
        this.velocity.y += this.acceleration;

        if (this.velocity.length() > this.maxSpeed) {
            this.velocity = this.velocity.normalized().multiply(this.maxSpeed);
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.y + this.radius > window.innerHeight) {
            this.velocity.y = -this.velocity.y
            this.y = window.innerHeight - this.radius;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}