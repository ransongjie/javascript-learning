class Soldier {//士兵能射击飞机，射击坦克
    constructor(code) {
        this._code = code
    }

    shootPlane() {
        console.log("shoot plane")
    }

    shootTank() {
        console.log("shoot tank")
    }
}

//////////
class Order {//士兵执行命令
    constructor(soldier) {
        this._soldier = soldier
    }

    do() { }
}

class ShootPlane extends Order {
    constructor(soldier) {
        super(soldier)
    }

    do() {
        this._soldier.shootPlane()
    }
}

class ShootTank extends Order {
    constructor(soldier) {
        super(soldier)
    }

    do() {
        this._soldier.shootTank()
    }
}

////////////
class Officer {//能够发送多个命令
    constructor() {
        this._orders = new Array()
    }

    addOrder(order) {
        this._orders.push(order)
    }

    delOrder(order) {
        let idx = this._orders.find(o => o === order)
        this._orders.splice(idx, 1)
    }

    makeOrders() {
        for (const o of this._orders) {
            o.do()
        }
    }
}
///////
let soldier1 = new Soldier("soldier1")
let order1 = new ShootPlane(soldier1)
let order2 = new ShootPlane(soldier1)
let order3 = new ShootTank(soldier1)
let officer = new Officer()
officer.addOrder(order1)
officer.addOrder(order2)
officer.addOrder(order3)
officer.makeOrders()