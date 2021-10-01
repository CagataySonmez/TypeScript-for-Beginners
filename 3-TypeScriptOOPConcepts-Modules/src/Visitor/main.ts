function init(){
    var xiaomi: IAndroidTV = new XiaomiMiStick();
    var grundig: IAndroidTV = new GrundigAndroidTV();

    const hmiOutVisitor: IVisitor = new HdmiOutVisitor();
    const panelVisitor: IVisitor = new PanelVisitor();

    document.getElementById("msgArea1").innerHTML = xiaomi.accept(hmiOutVisitor);
    document.getElementById("msgArea2").innerHTML = xiaomi.accept(panelVisitor);
    document.getElementById("msgArea3").innerHTML = grundig.accept(hmiOutVisitor);
    document.getElementById("msgArea4").innerHTML = grundig.accept(panelVisitor);
}