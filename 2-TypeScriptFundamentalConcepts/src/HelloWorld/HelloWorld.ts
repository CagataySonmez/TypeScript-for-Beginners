function greet(name: string): void {
    document.getElementById("msgArea").innerHTML = "Hello " + name;
}

function init(): void {
    greet("Cagatay")
}