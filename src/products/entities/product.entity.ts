export class Product {
  id: string;
  name: string;
  description?: string;
  price: number;

  constructor(id: string, name: string, price: number, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
