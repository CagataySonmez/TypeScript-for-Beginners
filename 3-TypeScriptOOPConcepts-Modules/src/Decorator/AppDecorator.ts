abstract class AppDecorator implements IApp{
    private app: IApp;

    constructor(app: IApp){
        this.app = app;
    }

    run(): string {
        return this.app.run();
    }
}