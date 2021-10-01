interface IPizzaBuilder {
    build(): Pizza;
    
    setCheese(cheese:string): IPizzaBuilder;
    setOlive(): IPizzaBuilder;
    setOnion(): IPizzaBuilder;
    setCorn(): IPizzaBuilder;
    setChiliPapper(): IPizzaBuilder;

    getCheese(): string;
    getOlive(): boolean;
    getOnion(): boolean;
    getCorn(): boolean;
    getChiliPapper(): boolean;
}