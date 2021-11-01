class WebAppDecorator extends AppDecorator{
    private url: string;
    
    setUrl(url: string) {
        this.url = url;
    }
    
    run(): string {
        return super.run() + " on WebView with url: " + this.url;
    }
}