import { Item } from "./Item";
import { showItems } from "./showItems";
const prompt = require('prompt-sync')();

export function removeItems(stock: Item[]){
    console.clear();
    let op: string;
    do{
        showItems(stock);

        console.log('Which item do you want to remove?');
        const i = Number(prompt('>> '));
    
        stock.splice(i-1,1);

        showItems(stock);

        console.log('\nRemove another item?');
        console.log('1 - Yes  2 - No');
        op = prompt('>> ')
    }while(op=='1');
}