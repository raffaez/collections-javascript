import { Item } from "./Item";
import { showItems } from "./showItems";
const prompt = require('prompt-sync')();

export function updateItem(stock: Item[]){
    console.clear();
    let op: string;
    do{
        showItems(stock);

        console.log('\nWhich item do you want to update?');
        const i = Number(prompt('>> '));

        console.log('\nNew name: ');
        const name = prompt('>> ');

        console.log('\nNew quantity: ');
        const qnt = Number(prompt('>> '));

        stock[i-1].update(name, qnt);

        console.log('\nUpdate another item?');
        console.log('1 - Yes  2 - No');
        op = prompt('>> ')
    }while(op=='1');
}