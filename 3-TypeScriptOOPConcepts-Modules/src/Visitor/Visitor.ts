interface IVisitor {
    visitXiaomiMiStick(element: XiaomiMiStick): string;
    visitGrundigAndroidTV(element: GrundigAndroidTV): string;
}

class HdmiOutVisitor implements IVisitor {
    public visitXiaomiMiStick(element: XiaomiMiStick): string {
        return `HDMI output of XiaomiMiStick is ${element.getHdmiOut()}`;
    }

    public visitGrundigAndroidTV(element: GrundigAndroidTV): string {
        return `GrundigAndroidTV does not support HDMI output`;
    }
}

class PanelVisitor implements IVisitor {
    public visitXiaomiMiStick(element: XiaomiMiStick): string {
        return `XiaomiMiStick does not have panel`;
    }

    public visitGrundigAndroidTV(element: GrundigAndroidTV): string {
        return `Panel size of GrundigAndroidTV ${element.getPanelSize()}`;
    }
}