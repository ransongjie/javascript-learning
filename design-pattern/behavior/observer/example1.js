class Target {//目标被哪些对象观察
    constructor(state) {
        this._state = state
        this._observers = new Array()
    }

    get state() {
        return this._state
    }

    set state(state) {//状态变化，通知所有观察者
        this._state = state
        this._notify()
    }

    register(observer) {
        this._observers.push(observer)
    }

    _notify() {
        for (const o of this._observers) {
            o.observe()
        }
    }
}

////////////
class Observer {
    constructor(target) {
        this._target = target
    }
    observe() {//观察目标对象

    }
}

class ObserverA extends Observer {
    constructor(target) {
        super(target)
    }

    observe() {
        console.log("observer A, target state is changed into " + this._target.state)
    }
}

class ObserverB extends Observer {
    constructor(target) {
        super(target)
    }

    observe() {
        console.log("observer A, target state is changed into " + this._target.state)
    }
}

class ObserverC extends Observer {
    constructor(target) {
        super(target)
    }

    observe() {
        console.log("observer A, target state is changed into " + this._target.state)
    }
}

////////////
let target = new Target(1)
let observeA = new ObserverA(target)
let observeB = new ObserverB(target)
let observeC = new ObserverB(target)
target.register(observeA)
target.register(observeB)
target.register(observeC)
target.state = 2