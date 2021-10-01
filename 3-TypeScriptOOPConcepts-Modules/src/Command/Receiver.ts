/**
 * The Receiver classes contain some important business logic.
 */
class Receiver {
    public encrypt(text: string): void {
        console.log(`${text} is encrypted`);
    }

    public decrypt(text: string): void {
        console.log(`${text} is decrypted`);
    }
}