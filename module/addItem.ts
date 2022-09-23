import { Item } from "./Item";
const prompt = require('prompt-sync')();

export function addItem(stock: Item[]){
    console.clear();
    let op: string;
    do{
        console.log('\nAdd item to stock\n');
        const name = prompt('Item: ');
        const amountText = prompt('Amount in stock: ');
        const amount = Number(amountText);
    
        const item = new Item(stock.length, name, amount);
        stock.push(item);

        console.log('\nAdd new item?');
        console.log('1 - Yes  2 - No');
        op = prompt('>> ')
    }while(op=='1');
    
}

