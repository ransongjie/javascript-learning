class Shape {
    draw() { }
}

class Circle extends Shape {
    draw() {
        console.log("圆形")
    }
}

class Square extends Shape {
    draw() {
        console.log("方形")
    }
}

class ShapeFactory {
    static getCircle() {
        return new Circle()
    }

    static getSquare() {
        return new Square()
    }
}

let circle = ShapeFactory.getCircle()
let square = ShapeFactory.getSquare()
circle.draw()
square.draw()