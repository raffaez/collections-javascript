export class Item{
    public id: number;
    public name: string;
    public amountInStock: number;

    constructor(id: number, name: string, amountInStock: number){
        this.id = id;
        this.name = name;
        this.amountInStock = amountInStock;
    }
}