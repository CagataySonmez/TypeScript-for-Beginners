// An interface for the Implementation
interface Theme {
    getTheme(): string;
}

// All classes can be dived into seperate files; this is just for demo!
class Dark implements Theme {
    getTheme() {
        return 'dark';
    }
}

class Light implements Theme {
    getTheme() {
        return 'light';
    }
}