namespace Demo{
    export interface ICar{
        engine: string;
        setEngine: (e: string) => void;
        getEngine: () => string;
    }
}