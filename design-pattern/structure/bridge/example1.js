class Brand {//品牌
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }
}

class Model {//型号
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }
}

class Phone {
    constructor(brand, model) {//对象作成员属性
        this._brand = brand
        this._model = model
    }

    show() {
        // console.log(this._brand.name + " " + this._model.name)// getter方法调用不需要加name()
        console.log(this._brand.name + " " + this._model.name)
    }
}

let brand = new Brand("华为")
let model = new Model("Mate 60")
let phone = new Phone(brand, model)
phone.show()