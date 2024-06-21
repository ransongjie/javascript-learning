class Customer {
    constructor(name, gender, single) {
        this._name = name
        this._gender = gender
        this._single = single
    }

    get name() {
        return this._name
    }

    isMale() {
        return this._gender
    }

    isFemale() {
        return !this._gender
    }

    /**
     * @param {*} name 
     * @returns true 单身 false 非单身
     */
    get single() {
        return this._single
    }
}
/////////////
class Criteria {
    filter(customers) { }
}

class IsMale extends Criteria {//是否男性
    filter(customers) {
        let males = []
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].isMale()) {
                males.push(customers[i])
            }
        }
        return males
    }
}

class IsFemale extends Criteria {//是否女性
    filter(customers) {
        let females = []
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].isFemale()) {
                females.push(customers[i])
            }
        }
        return females
    }
}

class IsSingle extends Criteria {//是否单身
    filter(customers) {
        let singles = []
        for (const customer of customers) {
            if (customer.single) {
                singles.push(customer)
            }
        }
        return singles
    }
}

class And extends Criteria {//2个标准都必须满足
    constructor(criteria1, criteria2) {
        super()
        this._criteria1 = criteria1
        this._criteria2 = criteria2
    }

    filter(customers) {
        //先使用第1个标准过滤，在使用第2个标准过滤
        let customers1 = this._criteria1.filter(customers)
        let customers2 = this._criteria2.filter(customers1)
        return customers2
    }
}

class Or extends Criteria {
    constructor(criteria1, criteria2) {//满足第1个标准或者第2个标准
        super()
        this._criteria1 = criteria1
        this._criteria2 = criteria2
    }

    filter(customers) {
        //先分别使用第1个标准，第2个标准过滤，再求并集
        let customers1 = this._criteria1.filter(customers)
        let customers2 = this._criteria2.filter(customers)
        let customers3 = []
        for (const c of customers1) {
            customers3.push(c)
        }
        for (const c of customers2) {
            if (customers3.indexOf(c) === -1) {
                customers3.push(c)
            }
        }
        return customers3
    }
}
//////////////
let c1 = new Customer("xcrj1", true, true)
let c2 = new Customer("xcrj2", false, true)
let c3 = new Customer("xcrj3", true, false)
let c4 = new Customer("xcrj4", true, true)
let c5 = new Customer("xcrj5", false, true)
let c6 = new Customer("xcrj6", true, false)
let c7 = new Customer("xcrj7", false, false)
let customers = [c1, c2, c3, c4, c5, c6, c7]

let single = new IsSingle()
let male = new IsMale()
let female = new IsFemale()

console.log("Single")
console.log(single.filter(customers))

console.log("Male")
console.log(male.filter(customers))

console.log("Male and Single")
let and = new And(male, single)
console.log(and.filter(customers))

console.log("Female or Single")
let or = new Or(female, single)
console.log(or.filter(customers))