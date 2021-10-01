interface IAndroidTV {
    get androidVersion(): number;
    accept(visitor: IVisitor): string;
}

class XiaomiMiStick implements IAndroidTV {
    public accept(visitor: IVisitor): string {
        return visitor.visitXiaomiMiStick(this);
    }

    //common functionality
    public get androidVersion(): number {
        return 9;
    }

    //only mi stick has hdmi output
    public getHdmiOut(): string {
        return '1080p hdmi out';
    }
}

class GrundigAndroidTV implements IAndroidTV {
    public accept(visitor: IVisitor): string {
        return visitor.visitGrundigAndroidTV(this);
    }

    //common functionality
    public get androidVersion(): number {
        return 9;
    }

    //only grundig android tv has panel
    public getPanelSize(): string {
        return '4K UHD';
    }
}