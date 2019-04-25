export class Product {
    id: number;
    name: string;
    description: string;
    dtCreate: Date;
    dtUpdate: Date;

    constructor() {
        this.dtCreate = new Date();
    }
}
