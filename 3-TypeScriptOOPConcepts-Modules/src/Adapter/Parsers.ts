class XmlParser{
    private file: string;
    
    constructor(file: string){
        this.file = file;
    }

    public parse(): boolean {
        console.log(this.file + " is parsed by XML Parser")

        return true;
    }
}

class JsonParser{
    private file: string;
    
    constructor(file: string){
        this.file = file;
    }

    public parse(): boolean {
        console.log(this.file + " is parsed by Json Parser")

        return true;
    }
}

class LegacyParser{
    private file: string;
    
    setFile(file: string){
        this.file = file;
    }
    
    parse(): void{
        console.log(this.file + " is parsed by Legacy Parser")
    }
}