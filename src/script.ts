import { Item } from "../module/Item";
import { addItem } from "../module/addItem"
const prompt = require('prompt-sync')();

const stock: Item[] = [];

let aux = 1;

do{
    addItem(stock);
    
    console.log('\nAdd new item?');
    console.log('1 - Yes  2 - No');
    aux = prompt('>> ');
}while(aux!=2);

console.clear();

stock.forEach((e) => {
        console.log(`${(e.id)+1}. ${e.name} - ${e.amountInStock} available`);
    }
);

console.log('1-Remove  2-Update  3-Exit');
const op = prompt('>> ');

switch(op){
    case 1:
        removeItem();
        break;
    case 2:
        updateItem();
        break;
    default:
        break;
}