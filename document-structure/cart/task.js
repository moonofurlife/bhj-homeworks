document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    const cartProductsContainer = document.querySelector('.cart__products');
    
    function updateCart() {
      const cartProducts = document.querySelectorAll('.cart__product');
      const cartData = {};
  
      cartProducts.forEach(product => {
        const id = product.dataset.id;
        const count = parseInt(product.querySelector('.cart__product-count').textContent, 10);
        cartData[id] = count;
      });
  
      localStorage.setItem('cart', JSON.stringify(cartData));
    }
  
    function loadCart() {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      for (const [id, count] of Object.entries(cartData)) {
        const productElement = document.querySelector(`.product[data-id="${id}"]`);
        if (productElement) {
          addProductToCart(productElement, count);
        }
      }
    }
  
    function addProductToCart(productElement, count) {
      const id = productElement.dataset.id;
      const imageSrc = productElement.querySelector('.product__image').src;
      
      let cartProduct = document.querySelector(`.cart__product[data-id="${id}"]`);
  
      if (cartProduct) {
        const currentCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent, 10);
        cartProduct.querySelector('.cart__product-count').textContent = currentCount + count;
      } else {
        cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = id;
  
        const productImage = document.createElement('img');
        productImage.className = 'cart__product-image';
        productImage.src = imageSrc;
  
        const productCount = document.createElement('div');
        productCount.className = 'cart__product-count';
        productCount.textContent = count;
  
        cartProduct.appendChild(productImage);
        cartProduct.appendChild(productCount);
  
        cartProductsContainer.appendChild(cartProduct);
      }
  
      updateCart();
    }
  
    function handleProductQuantityChange(event) {
      const product = event.target.closest('.product');
      if (!product) return;
  
      const quantityValue = product.querySelector('.product__quantity-value');
      let quantity = parseInt(quantityValue.textContent, 10);
  
      if (event.target.classList.contains('product__quantity-control_inc')) {
        quantity++;
      } else if (event.target.classList.contains('product__quantity-control_dec')) {
        quantity = Math.max(1, quantity - 1);
      }
  
      quantityValue.textContent = quantity;
    }
  
    function handleAddToCart(event) {
      const product = event.target.closest('.product');
      if (!product) return;
  
      const quantityValue = product.querySelector('.product__quantity-value');
      const quantity = parseInt(quantityValue.textContent, 10);
  
      addProductToCart(product, quantity);
    }
  
    productsContainer.addEventListener('click', event => {
      if (event.target.classList.contains('product__quantity-control_inc') || event.target.classList.contains('product__quantity-control_dec')) {
        handleProductQuantityChange(event);
      } else if (event.target.classList.contains('product__add')) {
        handleAddToCart(event);
      }
    });
  
    loadCart();
  });
  