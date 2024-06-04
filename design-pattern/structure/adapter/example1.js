class EUSocket {
    constructor() {
        console.log("我是欧洲插座")
    }
    charge() {
        console.log("插入欧洲插座充电")
    }
}

class ChargerAdapter {
    constructor() {
        console.log("我是插头适配器")
    }
    charge() {
        new EUSocket().charge()
    }
}

class ChinaCharger {
    constructor() {
        console.log("我是中国插头")
    }
    charge() {
        new ChargerAdapter().charge()
    }
}

let chinaCharger = new ChinaCharger()
chinaCharger.charge()
