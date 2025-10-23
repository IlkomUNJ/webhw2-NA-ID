/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const AuthController = () => import('#controllers/auth_controller')
const ProductController = () => import('#controllers/products_controller')
const WishlistsController = () => import('#controllers/wishlists_controller')

// Public Routes
router
  .group(() => {
    router.get('/', [ProductController, 'indexLatest']).as('home')
    router.get('/products', [ProductController, 'index']).as('products')
    router.on('/products/:id').render('pages/user/product').as('product')
    router.on('/about').render('pages/user/about').as('about')
    router.on('/contact').render('pages/user/contact').as('contact')
    router.get('/wishlist', [WishlistsController, 'index']).as('wishlist')
    router.post('/wishlist/add', [WishlistsController, 'add']).as('wishlist.add')
    router.post('/wishlist/remove', [WishlistsController, 'remove']).as('wishlist.remove')
  })
  .middleware(middleware.guest())

router.get('/sign-in', [AuthController, 'index']).as('signIn')
router.post('/sign-in', [AuthController, 'signIn']).as('signIn.post')

// Protected Admin Routes
router
  .group(() => {
    router.on('/dashboard').redirect('adminProducts').as('dashboard')
    router.get('/products', [ProductController, 'indexAdmin']).as('adminProducts')
    router.post('/products', [ProductController, 'store']).as('storeProduct')
    router.get('/products/:id/edit', [ProductController, 'edit']).as('editProduct')
    router.post('/products/:id/destroy', [ProductController, 'destroy']).as('deleteProduct')
    router.post('/products/:id/update', [ProductController, 'update']).as('updateProduct')
    router.get('/wishlist', [WishlistsController, 'adminIndex']).as('adminWishlists')

    router.post('/signout', [AuthController, 'signOut']).as('signOut')
  })
  .prefix('/admin')
  .middleware(middleware.auth())
