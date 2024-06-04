/**
 * facade 美/fəˈsɑːd/
 */

class Shape {

    draw() { }
}

class Circle extends Shape {

    draw() {
        console.log("circle")
    }
}

class Rectangle extends Shape {

    draw() {
        console.log("Rectangle")
    }
}

class Square extends Shape {

    draw() {
        console.log("Square")
    }
}

////////////
class ShapeFacade {
    constructor() {
        this._circle = new Circle()
        this._square = new Square()
        this._rectangle = new Rectangle()
    }

    drawCircle() {
        this._circle.draw()
    }

    drawSquare() {
        this._square.draw()
    }

    drawRectangle() {
        this._rectangle.draw()
    }
}

let shapeFacade = new ShapeFacade()
shapeFacade.drawCircle()
shapeFacade.drawSquare()
shapeFacade.drawRectangle()