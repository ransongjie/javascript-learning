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


////////////////
//接口
class Color {
    constructor(name) {
        this.name = name;
    }

    fill() { }
}

class Red extends Color {
    constructor(name) {
        super(name);
    }

    fill() {
        console.log(this.name);
    }
}

class Blue extends Color {
    constructor(name) {
        super(name)
    }

    fill() {
        console.log(this.name)
    }
}


//////////////
class AbstractFactory {
    createShape(shapeType) { }
    createColor(colorType) { }
}

class ColorFactory extends AbstractFactory {
    createColor(colorType) {
        switch (colorType) {
            case "red":
                return new Red("红色")
                break;
            case "blue":
                return new Blue("蓝色")
                break;
            default:
                break;
        }
    }
}

class ShapeFactory extends AbstractFactory {
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

/////////////

class FactoryProducer {
    static createFactory(factoryType) {
        switch (factoryType) {
            case "colorFactory":
                return new ColorFactory()
                break;
            case "shapeFactory":
                return new ShapeFactory()
            default:
                break;
        }
    }
}

let abstractFactory = FactoryProducer.createFactory("shapeFactory")
let shape1 = abstractFactory.createShape("circle")
shape1.draw()