//接口
class Component {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    add(component) { }
    del(component) { }
    get(name) { }
    operate() { }
}

class Leaf extends Component {
    constructor(name) {
        super(name)
    }

    add(component) { }
    del(component) { }
    get(name) { }
    operate() {
        console.log("叶子: " + this._name)
    }
}

//组合类能够组合叶子，组合自己
class Composite extends Component {
    constructor(name) {
        super(name)
        this._components = new Array()
    }

    add(component) {
        this._components.push(component)
    }
    del(component) {
        let idx = this._components.findIndex(item => item === component)
        if (idx !== -1) {
            this._components.splice(idx, 1)//splice修改原数组
            // this._components=this._components.slice(0,idx).concat(this._components.slice(idx+1))//slice创建新数组
            // this._components=this._components.filter(item=?item!==component)//filter创建新数组
        }
    }
    get(name) {
        return this._components.find(item => item.name === name)
    }
    operate() {
        console.log("组合: " + this.name)
        for (const c of this._components) {
            c.operate()
        }
    }
}

///////////
let leaf1 = new Leaf("leaf1")
let leaf2 = new Leaf("leaf2")
let leaf3 = new Leaf("leaf3")
let leaf4 = new Leaf("leaf4")
let leaf5 = new Leaf("leaf5")
let composite1 = new Composite("composite1")
let composite2 = new Composite("composite2")
composite1.add(leaf1)
composite1.add(leaf2)
composite1.add(leaf3)
composite2.add(leaf4)
composite2.add(leaf5)
composite1.add(composite2)

composite1.operate()
