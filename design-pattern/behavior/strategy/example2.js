///////////赵云3个锦囊妙计
class JinNang {//锦囊
    miaoJi() { }
}

class JinNang1 extends JinNang {
    miaoJi() {
        console.log("火攻")
    }
}

class JinNang2 extends JinNang {
    miaoJi() {
        console.log("虚张声势")
    }
}

class JinNang3 extends JinNang {
    miaoJi() {
        console.log("金蝉脱壳")
    }
}
////////
class ZhaoYun {
    constructor(jinNang) {
        this._jinNang = jinNang
    }

    open() {
        this._jinNang.miaoJi()
    }
}

////////
let jinNang1 = new JinNang1()
let zhaoYun = new ZhaoYun(jinNang1)
zhaoYun.open()

let jinNang2 = new JinNang2()
zhaoYun = new ZhaoYun(jinNang2)
zhaoYun.open()

let jinNang3 = new JinNang3()
zhaoYun = new ZhaoYun(jinNang3)
zhaoYun.open()
