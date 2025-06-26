interface UpdateWithOptions {
  name?: string;
  description?: string;
  price?: number;
}

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

  updateWith({ name, description, price }: UpdateWithOptions) {
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.price = price ?? this.price;
  }
}
