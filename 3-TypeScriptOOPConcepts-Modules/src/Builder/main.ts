function init(){
    var pizza1: Pizza = new PizzaBuilder().setCheese("Mozzerella").setOlive().setCorn().build();
    document.getElementById("msgArea1").innerHTML = pizza1.toString("Pizza1");

    var pizza2: Pizza = new PizzaBuilder().setCheese("Parmesan").setOnion().setChiliPapper().build();
    document.getElementById("msgArea2").innerHTML = pizza2.toString("Pizza2");
}