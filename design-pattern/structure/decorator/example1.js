class Shape {
    draw() { }
}

class Circle extends Shape {
    draw() {
        console.log("画1个圆形")
    }
}

class Square extends Shape {
    draw() {
        console.log("画1个方形")
    }
}

//////////
class ColorDecorator {//颜色装饰器
    constructor(shape) {
        this._shape = shape
    }

    draw() {
        this._shape.draw()
    }

    fill(color) {
        console.log("填充" + color)
    }
}

let shape = new Circle()
let colorShape = new ColorDecorator(shape)
colorShape.draw()
colorShape.fill("红色")