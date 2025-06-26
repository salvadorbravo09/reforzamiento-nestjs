import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { v4 as UuidV4 } from 'uuid';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const { name, description, price } = createProductDto;

    const newProduct = new Product(UuidV4(), name, price, description);
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id '${id}' not found`);
    }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const { name, description, price } = updateProductDto;
    const product = this.findOne(id);
    product.updateWith({
      name,
      description,
      price,
    });
    return product;
  }

  remove(id: string): Product {
    const product = this.findOne(id);
    // Devuelve todos los productos que no coinciden con el id del producto a eliminar
    this.products = this.products.filter((product) => product.id !== id);
    return product;
  }
}
