class Component {
    constructor(name) {
        this._name = name
    }
    get name() { return this._name }
    operate() { }
}

class Leaf extends Component {
    constructor(name) { super(name) }

    operate() {
        console.log("叶子: " + this.name)
    }
}

class Composite extends Component {
    constructor(name) {
        super(name)
        this._components = new Array()
    }

    operate() {
        console.log("Composite: " + this.name)
        for (const c of this._components) {
            c.operate()
        }
    }

    add(component) {
        this._components.push(component)
    }

    del(component) {
        let idx = this._components.find(o => o === component)
        if (-1 !== idx) {
            this._components.splice(idx, 1)
            // this._components=this._components.filter(o=>o!==component)
            // this._components=this._components.slice(0,idx).concat(this._components.slice(idx+1))
        }
    }

    get(name) {
        return this._components.find(o => o.name === name)
    }
}
/////////////
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