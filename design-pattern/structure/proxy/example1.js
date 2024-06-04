/**
 * 静态代理
 */

class Wedding {
    wed() { }
}

class BrideGroom extends Wedding {//新郎新娘
    wed() {
        console.log("新郎新娘结婚")
    }
}

class WeddingCompanyProxy extends Wedding {//婚庆公司
    constructor(brideGroom) {
        super()//注意，子类构造函数this前需要显式调用父类的构造方法
        this._brideGroom = brideGroom
    }

    wed() {
        console.log("婚庆公司代理布置婚礼现场")
        this._brideGroom.wed()
        console.log("婚庆公司代理收拾婚礼现场")
    }
}

let brideGroom = new BrideGroom()
let proxy = new WeddingCompanyProxy(brideGroom)
proxy.wed()