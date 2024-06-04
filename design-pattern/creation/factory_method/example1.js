/**
 * ES6
 */

class Shape {
    constructor(name) {
        this.name = name
    }

    draw() { }
}

class Circle extends Shape {
    constructor(name) {
        super(name)
    }

    draw() {
        console.log(this.name)
    }
}

class Square extends Shape {
    constructor(name) {
        super(name)
    }

    draw() {
        console.log(this.name)
    }
}

//////////

class ShapeFactory {
    create() { }
}

class CircleFactory extends ShapeFactory {
    create() {
        return new Circle("圆形")
    }
}

class SquareFactory extends ShapeFactory {
    create() {
        return new Square("方形")
    }
}

let shapeFactory1 = new CircleFactory()
let circle = shapeFactory1.create()
circle.draw()