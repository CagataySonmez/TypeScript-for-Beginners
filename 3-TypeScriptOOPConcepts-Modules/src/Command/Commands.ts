/// <reference path="Receiver.ts" />

/**
 * The Command interface declares a method for executing a command.
 */
interface ICommand {
    execute(): void;
    undo(): void;
}

/**
 * Some commands can implement simple operations on their own.
 * Some commands can delegate more complex operations to other objects, called "receivers."
 */
class EncryptCommand implements ICommand {
    private payload: string;
    private receiver: Receiver;

    constructor(receiver: Receiver, payload: string) {
        this.payload = payload;
        this.receiver = receiver;
    }

    public execute(): void {
        this.receiver.encrypt(this.payload);
    }

    public undo(): void {
        console.log(`encryption is undone!`);
    }
}

class DecryptCommand implements ICommand {
    private payload: string;
    private receiver: Receiver;

    constructor(receiver: Receiver, payload: string) {
        this.payload = payload;
        this.receiver = receiver;
    }

    public execute(): void {
        this.receiver.decrypt(this.payload);
    }

    public undo(): void {
        console.log(`decryption is undone!`);
    }
}