import { Item } from "../module/Item";
import { addItem } from "../module/addItem"
import { showItems } from "../module/showItems";
import { showMenu } from "../module/showMenu";
import { Menu } from "../module/Menu";
import { removeItems } from "../module/removeItem";
import { updateItem } from "../module/updateItem";
const prompt = require('prompt-sync')();

const stock: Item[] = [];

let opt: Menu;

do{
    opt = showMenu();

    switch(opt){
        case Menu.Add:
            addItem(stock);
            break;
        case Menu.List:
            showItems(stock);
            prompt('Press ENTER to return');
            break;
        case Menu.Remove:
            removeItems(stock);
            break;
        case Menu.Update:
            updateItem(stock);
            break;
        default:
            break;
    }
}while(opt!=Menu.Exit);
