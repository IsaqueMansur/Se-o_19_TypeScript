/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 4] */

export class Product {
  constructor(private _name: string, public price: number) {}

  get name(): string {
    return this._name;
  }
}

export class ShoppingCart {
  private readonly products: Product[] = [];

  addProducts(...products: Product[]): void {
    // eslint-disable-next-line
    for (const product of products) {
      this.products.push(product);
    }
  }

  viewProducts(): void {
    console.log(this.products);
  }

  sumPrice(): string {
    const totalPrice = this.products.reduce((sum, product) => sum + product.price, 0);
    return `Valor total: R$${totalPrice.toFixed(2)}`;
  }
}

const product1 = new Product('SMART-TV 32 POL.', 1350.38);
const product2 = new Product('BIKE QUEBRADA.', 800.37);
const shoppingCar1 = new ShoppingCart();
shoppingCar1.addProducts(product1, product2);
shoppingCar1.viewProducts();
console.log(shoppingCar1.sumPrice());
