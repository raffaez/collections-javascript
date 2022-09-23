import { Item } from "./Item";
const prompt = require('prompt-sync')();

export function showItems(stock: Item[]){
    console.clear();
    let i = 0;
    stock.forEach((e) => {
        console.log(`${(i)+1}. ${e.name} - ${e.amountInStock} available`);
        i++;
    });
}