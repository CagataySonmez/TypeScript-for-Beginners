/**
 * The client code can parameterize an invoker with any commands.
 */
function init(){
    var receiver = new Receiver();
    var encryptCommand = new EncryptCommand(receiver, "plain text");
    var decryptCommand = new DecryptCommand(receiver, "encrypted text")

    var invoker = new Invoker([encryptCommand, decryptCommand]);
    invoker.executeCmd();
    invoker.undoCmd();
}