class Shape {
    set name(name) {
        this._name = name
    }
    get name() {
        return this._name
    }

    set color(color) {
        this._color = color
    }

    get color() {
        return this._color
    }

    set radius(radius) {
        this._radius = radius
    }

    draw() { }
}

class Circle extends Shape {
    draw() {
        console.log(this.name
            + ", x=" + this.x
            + ", y=" + this.y
            + ", radius=" + this.radius
            + ", color=" + this.color)
    }
}

class ShapeFactory {
    //color:Shape
    static _map = new Map()
    // static const colorShape={}//js中类静态属性不能和const一起使用

    static getCircle(color) {
        if (!ShapeFactory._map.has(color)) {
            let circle = new Circle()
            circle.color = color
            ShapeFactory._map.set(color, circle)
            return circle
        }
        return ShapeFactory._map.get(color)
    }

    static getMapSize() {
        return this._map.size
    }
}

let colors = ["red", "blue", "yellow", "black", "green"]
for (let i = 0; i < 1000; i++) {
    let circle = ShapeFactory.getCircle(colors[randomColor(colors.length)]);
    circle.x = randomXY()
    circle.y = randomXY()
}

console.log(ShapeFactory.getMapSize())//5

function randomColor(len) {
    return Math.floor(Math.random() * len)
}

function randomXY() {
    return Math.random() * 100
}