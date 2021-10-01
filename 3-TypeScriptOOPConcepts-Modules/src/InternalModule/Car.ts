/// <reference path="ICar.ts"

namespace Demo{
    export class Car implements ICar{
        engine: string;

        setEngine(e: string): void {
            this.engine = e;
        }

        getEngine(): string {
            return this.engine;
        }
    }
}