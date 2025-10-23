import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Wishlist from './wishlist.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare brand: string

  @column()
  declare description: string

  @column()
  declare color: string

  @column()
  declare price: number

  @column()
  declare imageUrl: string

  @hasMany(() => Wishlist)
  declare wishlists: HasMany<typeof Wishlist>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
