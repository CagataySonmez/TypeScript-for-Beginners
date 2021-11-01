function init(){
    var app1 = new AndroidApp("Netflix");
    document.getElementById("msgArea1").innerHTML = app1.run();

    var app2 = new WebAppDecorator(new AndroidApp("Das Erste"));
    app2.setUrl("https://daserste.de");
    document.getElementById("msgArea2").innerHTML = app2.run();

    var app3 = new HbbtvAppDecorator(app2);
    document.getElementById("msgArea3").innerHTML = app3.run();
}