const activeClass = ['stroke-red-500', 'fill-red-500']
const inactiveClass = ['stroke-gray-900', 'fill-transparent']

document.addEventListener('DOMContentLoaded', () => {
  const wishlistButtons = document.querySelectorAll('button[data-product-id]')

  if (!wishlistButtons || wishlistButtons.length === 0) {
    console.log('No wishlist buttons found')
    return
  }

  wishlistButtons.forEach((button) => {
    button.addEventListener('click', async function () {
      const product_id = this.dataset.productId
      if (!product_id) {
        console.error('Product ID not found on button')
        return
      }
      
      console.log(`Wishlist button clicked for product ID: ${product_id}`)
      
      // Optionally, you can toggle the state instead of just setting it to active
      if (button.classList.contains(...activeClass)) {
        try {
          const response = await fetch('/wishlist/remove', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_id }),
          })
        } catch (error) {
          console.error('Error adding product to wishlist:', error)
        }
        button.classList.remove(...activeClass)
        button.classList.add(...inactiveClass)
      } else {
        try {
          const response = await fetch('/wishlist/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_id }),
          })
        } catch (error) {
          console.error('Error removing product from wishlist:', error)
        }
        button.classList.remove(...inactiveClass)
        button.classList.add(...activeClass)
      }
    })
  })
})