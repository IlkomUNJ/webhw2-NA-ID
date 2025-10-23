import { BaseSeeder } from '@adonisjs/lucid/seeders'
// import { ProductFactory } from '#database/factories/product_factory'
import Product from '#models/product'

const PRODUCTS = [
  {
    name: 'Sleeveless',
    brand: 'aezy',
    description: 'A stylish sleeveless top',
    color: 'black',
    price: 49000,
    imageUrl: 'resources/images/products/aezy_sleeveless_black.jpeg',
  },
  {
    name: 'T-Shirt',
    brand: 'litex',
    description: 'A comfortable cotton t-shirt',
    color: 'white',
    price: 79000,
    imageUrl: 'resources/images/products/litex_tshirt_white.jpeg',
  },
  {
    name: 'T-Shirt',
    brand: 'litex',
    description: 'A comfortable cotton t-shirt',
    color: 'black',
    price: 79000,
    imageUrl: 'resources/images/products/litex_tshirt_black.jpeg',
  },
  {
    name: 'Long Sleeve',
    brand: 'aezy',
    description: 'A warm long sleeve shirt',
    color: 'black',
    price: 99000,
    imageUrl: 'resources/images/products/aezy_longsleeve_black.jpeg',
  },
  {
    name: 'Hoodie',
    brand: 'aezy',
    description: 'A cozy hoodie for chilly days',
    color: 'gray',
    price: 150000,
    imageUrl: 'resources/images/products/aezy_hoodie_gray.jpeg',
  },
  {
    name: 'Shirt',
    brand: 'airlx',
    description: 'A formal shirt for work or events',
    color: 'white',
    price: 120000,
    imageUrl: 'resources/images/products/airlx_shirt_white.jpeg',
  },
  {
    name: 'Shirt',
    brand: 'airlx',
    description: 'A formal shirt for work or events',
    color: 'black',
    price: 120000,
    imageUrl: 'resources/images/products/airlx_shirt_black.jpeg',
  },
  {
    name: 'Sweatshirt',
    brand: 'aezy',
    description: 'A casual sweatshirt for everyday wear',
    color: 'gray',
    price: 110000,
    imageUrl: 'resources/images/products/aezy_sweatshirt_gray.jpeg',
  },
  {
    name: 'T-Shirt',
    brand: 'aezy',
    description: 'A comfortable cotton t-shirt',
    color: 'white',
    price: 89000,
    imageUrl: 'resources/images/products/aezy_tshirt_white.jpeg',
  },
]
export default class extends BaseSeeder {
  async run() {
    for (const PRODUCT of PRODUCTS) {
      await Product.create(PRODUCT)
    }
    // await ProductFactory.createMany(10)
  }
}
