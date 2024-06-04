/**
 * ES6
 * 不同的套餐有不同的项目（汉堡、饮料）
 * 项目（打包方式、名字、价格）
 * 汉堡：鸡肉汉堡、蔬菜汉堡
 * 饮料：百事可乐、可口可乐
 * 打包方式：瓶子、包装纸
 * 
 */
class Packing {
    pack() { }
}

class Bottle extends Packing {
    pack() {
        return "瓶子"
    }
}

class Wrapper extends Packing {
    pack() {
        return "包装纸"
    }
}
////////

class Item {
    name() { }
    price() { }
    packing() { }
}

class Meal {
    constructor() {
        //注意，属性定义在构造方法中
        this._items = []
    }

    addItem(item) {
        //套餐项
        //等价于 _items=new Array()
        this._items.push(item)
    }

    showItem() {
        for (let i = 0; i < this._items.length; i++) {
            console.log(this._items[i].name() + ", "
                + this._items[i].price() + ", "
                + this._items[i].packing().pack())
        }
    }

    showCost() {
        var cost = 0.0
        for (let i = 0; i < this._items.length; i++) {
            cost += this._items[i].price()
        }
        console.log("套餐价格: " + cost)
    }
}
////////
class Burger extends Item {
    // name() { }
    // price() { }
    packing() {
        return new Wrapper()
    }
}

class ChickenBurger extends Burger {
    name() {
        return "鸡肉汉堡"
    }

    price() {
        return 10.3
    }
}

class VegBurger extends Burger {
    name() {
        return "蔬菜汉堡"
    }

    price() {
        return 5.3
    }
}

////////
class Drink extends Item {
    // name() { }
    // price() { }
    packing() {
        return new Bottle()
    }
}

class Coke extends Drink {
    name() {
        return "可口可乐"
    }
    price() {
        return 3.5
    }
}

class Pepsi extends Drink {
    name() {
        return "百事可乐"
    }
    price() {
        return 3.0
    }
}

///////
class MealBuilder {
    //套餐1
    buildVegetariansMeal() {
        let meal = new Meal()
        meal.addItem(new VegBurger())
        meal.addItem(new Pepsi())
        return meal
    }

    //套餐2
    buildCarnivorousMeal() {
        let meal = new Meal()
        meal.addItem(new ChickenBurger())
        meal.addItem(new Coke())
        return meal
    }
}

let mealBuilder = new MealBuilder()
let meal1 = mealBuilder.buildCarnivorousMeal()
meal1.showItem()
meal1.showCost()