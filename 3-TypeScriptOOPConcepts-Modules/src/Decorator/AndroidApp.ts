class AndroidApp implements IApp{
    private name: string;
    
    constructor(name: string){
        this.name = name;
    }

    run(): string {
        return 'Running "' + this.name + '" Android app';
    }
}

