const Logger = require('./Logger')

class Calculator {
    constructor() {
        this.id = Date.now()
        
        //Part 2 of Lab6
        this.id = Math.floor(Math.random() *100000);

        //Part 3 of Lab6
        this.logger = new Logger('Calculator', this.id);
    }

    #log = (value) => {
        console.log(`[Calculator :${this.id} ]:${value}`)
    }
    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)

        //Part 3 of Lab6
        this.logger.log(value)

        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2
        this.#log(value)

        //Part 3 of Lab6
        this.logger.log(value)

        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2
        this.#log(value)

        //Part 3 of Lab6
        this.logger.log(value)

        return value;
    }

    divide(num1, num2) {
        const value = num1 * num2
        this.#log(value)

        //Part 3 of Lab6
        this.logger.log(value)
        
        return value;
    }
}

module.exports = Calculator