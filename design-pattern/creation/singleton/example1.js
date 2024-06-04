/**
 * ES6
 * 饿汉式
 * 伪私有变量_instance
 */

class Apple {
    static _instance = new Apple();

    static getInstance() {
        return Apple._instance;
    }

    constructor() {
        if (Apple._instance) {
            throw new Error("使用Apple.getInstance()代替new Apple()")
        }
    }

    //其它方法
    set name(value) {//setter name不能加_
        this._name = value;//_name 伪私有变量
    }

    get name() {
        return this._name;
    }
}

let a1 = Apple.getInstance()
let a2 = Apple.getInstance()
console.log(a1 == a2)
a1.name = "烟台苹果"//setter
console.log(a1.name)//getter

