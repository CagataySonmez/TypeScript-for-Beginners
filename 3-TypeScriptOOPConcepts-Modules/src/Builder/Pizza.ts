class Pizza{
    private cheese: string;
    private hasOlive: boolean;
    private hasOnion: boolean;
    private hasCorn: boolean
    private hasChiliPapper: boolean;

    constructor(builder: IPizzaBuilder){
        this.cheese = builder.getCheese();
        this.hasOlive = builder.getOlive();
        this.hasOnion = builder.getOnion();
        this.hasCorn = builder.getCorn();
        this.hasChiliPapper = builder.getChiliPapper();
    }

    public toString(name: string): string {
        var result = name + " includes: " + this.cheese;
        if(this.hasOlive)
            result += ", Olive";
        if(this.hasOnion)
            result += ", Onion";
        if(this.hasCorn)
            result += ", Corn";
        if(this.hasChiliPapper)
            result += ", Chili Papper";

        return result;
    }
}