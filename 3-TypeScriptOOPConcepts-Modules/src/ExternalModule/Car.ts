import Demo = require("./ICar")

export class Car implements Demo.ICar{
    engine: string;

    setEngine(e: string): void {
        this.engine = e;
    }

    getEngine(): string {
        return this.engine;
    }
}



