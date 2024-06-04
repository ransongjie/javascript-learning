////////////加减乘除
class Operation {
    do(num1, num2) { }
}

class Add extends Operation {
    do(num1, num2) {
        console.log(num1 + num2)
    }
}

class Sub extends Operation {
    do(num1, num2) {
        console.log(num1 - num2)
    }
}

class Mul extends Operation {
    do(num1, num2) {
        console.log(num1 * num2)
    }
}

class Div extends Operation {
    do(num1, num2) {
        console.log(num1 / num2)
    }
}

//////////
class Calculator {
    constructor(operation) {
        this._operation = operation
    }

    calculate(num1, num2) {
        this._operation.do(num1, num2)
    }
}

////////////
let operation1 = new Add()
let operation2 = new Div()
let calculator = new Calculator(operation1)
calculator.calculate(10, 2)
calculator = new Calculator(operation2)
calculator.calculate(10, 2)