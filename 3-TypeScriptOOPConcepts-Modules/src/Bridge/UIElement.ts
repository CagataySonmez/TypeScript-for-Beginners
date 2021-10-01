// abstract class for the Abstraction
abstract class UIElement {
    theme: Theme;

    constructor(theme: Theme) {
        this.theme = theme;
    }

    abstract toString(): string;
}

// All classes can be dived into seperate files!
class Button extends UIElement {
    constructor(theme: Theme) {
        super(theme);
    }

    toString() {
        return `This is a button with ${this.theme.getTheme()} theme.`;
    }
}

class TextArea extends UIElement {
    constructor(theme: Theme) {
        super(theme);
    }

    toString() {
        return `This is a text area with ${this.theme.getTheme()} theme.`;
    }
}