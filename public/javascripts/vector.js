class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    length() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }

    normalized() {
        return new Vector2D(this.x / this.length(), this.y / this.length());
    }

    multiply(scale) {
        return new Vector2D(this.x * scale, this.y * scale);
    }

    add(vector) {
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }
}