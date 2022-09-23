import { Item } from "./Item";

export function addItem(stock: Item[]){
    console.log('\nAdd item to stock\n');
    const name = prompt('Item: ');
    const amountText = prompt('Amount in stock: ');
    const amount = Number(amountText);

    const item = new Item(stock.length, name, amount);
    stock.push(item);
}

