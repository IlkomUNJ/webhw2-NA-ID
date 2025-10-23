import factory from '@adonisjs/lucid/factories'
import Product from '#models/product'

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      name: faker.commerce.productName(),
      brand: faker.helpers.arrayElement(['aezy', 'litex', 'airlx']),
      description: faker.commerce.productDescription(),
      color: faker.color.human(),
      price: faker.number.int({ min: 50000, max: 200000 }),
      imageUrl: faker.image.urlLoremFlickr({ category: 'fashion' }),
    }
  })
  .build()
