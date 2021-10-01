/// <reference path="Commands.ts" />

/**
 * The Invoker is associated with one or several commands.
 * It does not depend on concrete command or receiver classes.
*/
class Invoker {
    private commands: ICommand[];

    constructor(commands: ICommand[]){
        this.commands = commands;
    }

    public executeCmd(): void{
        this.commands.forEach(command => {
            command.execute();
        });
    }

    public undoCmd(): void{
        this.commands.reverse().forEach(command => {
            command.undo();
        });
    }
}