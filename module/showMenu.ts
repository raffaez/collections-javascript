import { Menu } from "./Menu";
const prompt = require('prompt-sync')();

export function showMenu(){
    console.clear();
    console.log('1 - Add item');
    console.log('2 - List items');
    console.log('3 - Remove item');
    console.log('4 - Update item');
    console.log('5 - Exit');

    const input = prompt('>> ');
    let option: Menu;

    switch(input){
        case '1':
            option = Menu.Add;
            break;
        case '2':
            option = Menu.List;
            break;
        case '3':
            option = Menu.Remove;
            break;
        case '4':
            option = Menu.Update
            break;
        case '5':
            option = Menu.Exit
            break;
    }

    return option;
}