
class Apple {
    constructor(name, price) {
        this._name = name
        this._price = price
    }

    set name(name) {
        this._name = name
    }

    set price(price) {
        this._price = price
    }

    show() {
        console.log(this._name + ", " + this._price)
    }
}

let apple = new Apple("烟台苹果", 20.3)
let apple2 = Object.create(apple)
apple2.show()