class PizzaBuilder implements IPizzaBuilder{
    private cheese: string;
    private hasOlive: boolean;
    private hasOnion: boolean;
    private hasCorn: boolean;
    private hasChiliPapper: boolean;

    build(){
        return new Pizza(this);
    }

    setCheese(cheese: string): IPizzaBuilder {
        this.cheese = cheese;
        return this;
    }

    setOlive(): IPizzaBuilder {
        this.hasOlive = true;
        return this;
    }

    setOnion(): IPizzaBuilder {
        this.hasOnion = true;
        return this;
    }

    setCorn(): IPizzaBuilder {
        this.hasCorn = true;
        return this;
    }

    setChiliPapper(): IPizzaBuilder {
        this.hasChiliPapper = true;
        return this;
    }


    getCheese(): string {
        return this.cheese;
    }

    getOlive(): boolean {
        return this.hasOlive;
    }

    getOnion(): boolean {
        return this.hasOnion;
    }
    
    getCorn(): boolean {
        return this.hasCorn;
    }

    getChiliPapper(): boolean {
        return this.hasChiliPapper;
    }
}

