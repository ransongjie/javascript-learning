/**
 * ES6
 */

//接口
class Shape {
    constructor(name) {
        this.name = name;
    }
    draw() {
        console.log("shape");
    }
}

class Circle extends Shape {
    constructor(name) {
        super(name);
    }

    //重写
    draw() {
        console.log(this.name);
    }
}

class Square extends Shape {
    constructor(name) {
        super(name);
    }

    draw() {
        console.log(this.name);
    }
}

class ShapeFactory {
    createShape(shapeType) {
        switch (shapeType) {
            case "circle":
                return new Circle("圆形");
                break;
            case "square":
                return new Square("方形");
                break;
            default:
                break;
        }
    }
}

let shapeFactory=new ShapeFactory();

let shape1 = shapeFactory.createShape("circle");
shape1.draw();

let shape2 = shapeFactory.createShape("square");
shape2.draw();
