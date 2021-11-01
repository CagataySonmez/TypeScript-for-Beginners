class HbbtvAppDecorator extends AppDecorator{

    run(): string {
        return super.run() + " as HbbTV app";
    }
}