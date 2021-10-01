var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
    }
    PizzaBuilder.prototype.build = function () {
        return new Pizza(this);
    };
    PizzaBuilder.prototype.setCheese = function (cheese) {
        this.cheese = cheese;
        return this;
    };
    PizzaBuilder.prototype.setOlive = function () {
        this.hasOlive = true;
        return this;
    };
    PizzaBuilder.prototype.setOnion = function () {
        this.hasOnion = true;
        return this;
    };
    PizzaBuilder.prototype.setCorn = function () {
        this.hasCorn = true;
        return this;
    };
    PizzaBuilder.prototype.setChiliPapper = function () {
        this.hasChiliPapper = true;
        return this;
    };
    PizzaBuilder.prototype.getCheese = function () {
        return this.cheese;
    };
    PizzaBuilder.prototype.getOlive = function () {
        return this.hasOlive;
    };
    PizzaBuilder.prototype.getOnion = function () {
        return this.hasOnion;
    };
    PizzaBuilder.prototype.getCorn = function () {
        return this.hasCorn;
    };
    PizzaBuilder.prototype.getChiliPapper = function () {
        return this.hasChiliPapper;
    };
    return PizzaBuilder;
}());
var Pizza = /** @class */ (function () {
    function Pizza(builder) {
        this.cheese = builder.getCheese();
        this.hasOlive = builder.getOlive();
        this.hasOnion = builder.getOnion();
        this.hasCorn = builder.getCorn();
        this.hasChiliPapper = builder.getChiliPapper();
    }
    Pizza.prototype.toString = function (name) {
        var result = name + " includes: " + this.cheese;
        if (this.hasOlive)
            result += ", Olive";
        if (this.hasOnion)
            result += ", Onion";
        if (this.hasCorn)
            result += ", Corn";
        if (this.hasChiliPapper)
            result += ", Chili Papper";
        return result;
    };
    return Pizza;
}());
function init() {
    var pizza1 = new PizzaBuilder().setCheese("Mozzerella").setOlive().setCorn().build();
    document.getElementById("msgArea1").innerHTML = pizza1.toString("Pizza1");
    var pizza2 = new PizzaBuilder().setCheese("Parmesan").setOnion().setChiliPapper().build();
    document.getElementById("msgArea2").innerHTML = pizza2.toString("Pizza2");
}
//# sourceMappingURL=out.js.map