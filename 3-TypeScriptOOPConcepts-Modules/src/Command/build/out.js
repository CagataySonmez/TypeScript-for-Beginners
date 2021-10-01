/**
 * The Receiver classes contain some important business logic.
 */
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.encrypt = function (text) {
        console.log(text + " is encrypted");
    };
    Receiver.prototype.decrypt = function (text) {
        console.log(text + " is decrypted");
    };
    return Receiver;
}());
/// <reference path="Receiver.ts" />
/**
 * Some commands can implement simple operations on their own.
 * Some commands can delegate more complex operations to other objects, called "receivers."
 */
var EncryptCommand = /** @class */ (function () {
    function EncryptCommand(receiver, payload) {
        this.payload = payload;
        this.receiver = receiver;
    }
    EncryptCommand.prototype.execute = function () {
        this.receiver.encrypt(this.payload);
    };
    EncryptCommand.prototype.undo = function () {
        console.log("encryption is undone!");
    };
    return EncryptCommand;
}());
var DecryptCommand = /** @class */ (function () {
    function DecryptCommand(receiver, payload) {
        this.payload = payload;
        this.receiver = receiver;
    }
    DecryptCommand.prototype.execute = function () {
        this.receiver.decrypt(this.payload);
    };
    DecryptCommand.prototype.undo = function () {
        console.log("decryption is undone!");
    };
    return DecryptCommand;
}());
/// <reference path="Commands.ts" />
/**
 * The Invoker is associated with one or several commands.
 * It does not depend on concrete command or receiver classes.
*/
var Invoker = /** @class */ (function () {
    function Invoker(commands) {
        this.commands = commands;
    }
    Invoker.prototype.executeCmd = function () {
        this.commands.forEach(function (command) {
            command.execute();
        });
    };
    Invoker.prototype.undoCmd = function () {
        this.commands.reverse().forEach(function (command) {
            command.undo();
        });
    };
    return Invoker;
}());
/**
 * The client code can parameterize an invoker with any commands.
 */
function init() {
    var receiver = new Receiver();
    var encryptCommand = new EncryptCommand(receiver, "plain text");
    var decryptCommand = new DecryptCommand(receiver, "encrypted text");
    var invoker = new Invoker([encryptCommand, decryptCommand]);
    invoker.executeCmd();
    invoker.undoCmd();
}
//# sourceMappingURL=out.js.map