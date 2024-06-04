/**
 * 闭包产生真私有变量_instance
 */

const Singleton = (function () {
    let _instance// 效果和静态变量类似

    class Apple {
        constructor() {
            if (_instance) {
                throw new Error("使用Singleton.getInstance()代替new Apple()")
            }
        }

        set name(value) {
            this._name = value;
        }

        get name() {
            return this._name;
        }
    }

    return {//匿名对象
        getInstance: function () {
            if (!_instance) {
                _instance = new Apple()
            }
            return _instance;
        }
    };
})();

let apple1 = Singleton.getInstance();
let apple2 = Singleton.getInstance();
console.log(apple1 === apple2)
apple1.name = "烟台苹果"
console.log(apple1.name)
