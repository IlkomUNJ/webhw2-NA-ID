document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button')
  const tabPanes = document.querySelectorAll('.tab-pane')
  const allProducts = document.querySelectorAll('.product-card[data-brand]')

  function showProductsInTab(brand) {
    const targetPane = document.getElementById(brand)
    const productGrid = targetPane.querySelector('.product-grid')

    productGrid.innerHTML = ''

    if (brand === 'all') {
      allProducts.forEach((product) => {
        productGrid.appendChild(product.cloneNode(true))
      })
    } else {
      allProducts.forEach((product) => {
        if (product.dataset.brand === brand) {
          productGrid.appendChild(product.cloneNode(true))
        }
      })
    }
  }

  function switchTab(targetTab) {
    // Reset all buttons to inactive state
    tabButtons.forEach((btn) => {
      btn.classList.remove('active', 'bg-gray-900', 'text-gray-100', 'font-semibold')
      btn.classList.add('bg-transparent', 'text-gray-700', 'font-medium')
    })

    // Hide all tab panes
    tabPanes.forEach((pane) => {
      pane.classList.remove('active', 'block')
      pane.classList.add('hidden')
    })

    const targetButton = document.querySelector(`[data-tab="${targetTab}"]`)
    const targetPane = document.getElementById(targetTab)

    // Set active button state
    targetButton.classList.remove('bg-transparent', 'text-gray-700', 'font-medium')
    targetButton.classList.add('active', 'bg-gray-900', 'text-gray-100', 'font-semibold')

    // Show active tab pane
    targetPane.classList.remove('hidden')
    targetPane.classList.add('active', 'block')

    showProductsInTab(targetTab)
  }

  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const targetTab = this.dataset.tab
      switchTab(targetTab)
    })
  })

  showProductsInTab('all')
})
