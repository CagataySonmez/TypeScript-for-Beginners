function init(){
    // Instantiate the circle with a concrete implementation
    let button = new Button(new Dark());
    let text = new TextArea(new Light());

    document.getElementById("msgArea1").innerHTML = button.toString();
    document.getElementById("msgArea2").innerHTML = text.toString();
}