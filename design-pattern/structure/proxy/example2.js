class BrideGroom {
    constructor(names) {
        this._names = names
    }

    get names() {
        return this._names
    }

    set names(names) {
        this._names = names
    }

    wed() {
        console.log(this._names + "结婚啦");
    }
}

class Handler {
    /**
     * get陷阱，访问时触发
     */
    get(target, propKey, receiver) {
        if (propKey === 'wed') {
            return function (...args) {
                console.log('婚庆公司代理布置婚礼现场');
                const result = target.wed.apply(target, args); // 调用原始方法  
                console.log('婚庆公司代理收拾婚礼现场');
                return result; // 这里返回了undefined
            };
        }
        // 如果不是wed方法，则直接调用
        // Reflect.get 读取对象属性值，返回属性值
        return Reflect.get(...arguments); //等价于 return Reflect.get(target, propKey, receiver);
    }

    /**
     * set陷阱，修改时触发
     * @param {object} target 被代理对象
     * @param {string} propKey 属性key
     * @param {string} value 属性值
     * @param {object} receiver 原方法
     * @returns 
     */
    set(target, propKey, value, receiver) {
        console.log("增强setter能力")
        //Reflect.set 设置对象属性值，返回 bool值
        return Reflect.set(target, propKey, value, receiver);
    }
};

const bg = new BrideGroom("张三&李四");
const handler = new Handler()
const bgProxy = new Proxy(bg, handler);  // 代理整个BrideGroom实例  
bgProxy.wed();
console.log(bgProxy.names)// 张三&李四
bgProxy.names = "abc&def"
console.log(bgProxy.names)// abc&def