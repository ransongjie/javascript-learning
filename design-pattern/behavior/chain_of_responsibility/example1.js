class Logger {
    static INFO = 1;
    static DEBUG = 2;
    static ERROR = 3;

    constructor(level) {
        this._level = level;
    }

    set nextLogger(nextLogger) {
        this._nextLogger = nextLogger
    }

    log(level, msg) {
        if (level >= this._level) {
            this.write(msg);
        }

        if (this._nextLogger != null) {
            this._nextLogger.log(level, msg);
        }
    }

    write(msg) { }
}

class InfoLogger extends Logger {
    constructor(level) {
        super(level)
    }

    write(msg) {
        console.log("Info Logger: " + msg)
    }
}

class DebugLogger extends Logger {
    constructor(level) {
        super(level)
    }

    write(msg) {
        console.log("Debug Logger: " + msg)
    }
}

class ErrorLogger extends Logger {
    constructor(level) {
        super(level)
    }

    write(msg) {
        console.log("Error Logger: " + msg)
    }
}

//////////////////
class ChainFactory {
    static getChainOfLogger() {
        let infoLogger = new InfoLogger(Logger.INFO)
        let debugLogger = new DebugLogger(Logger.DEBUG)
        let errorLogger = new ErrorLogger(Logger.ERROR)

        errorLogger.nextLogger = debugLogger
        debugLogger.nextLogger = infoLogger
        return errorLogger;
    }
}
//////////////////
let chainOfLogger = ChainFactory.getChainOfLogger();
chainOfLogger.log(Logger.INFO, "This is info level information");
chainOfLogger.log(Logger.ERROR, "This is error level information");