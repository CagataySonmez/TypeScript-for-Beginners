class LegacyParserAdapter implements IParser{
    private file: string;
    private legacyParser: LegacyParser;
    
    constructor(legacyParser: LegacyParser){
        this.legacyParser = legacyParser;
    }

    public parse(): boolean {
        this.legacyParser.parse();
        return true;
    }
}