document.addEventListener('DOMContentLoaded', function() {
   const itemList = document.getElementById('item-list');
   const totalPriceDisplay = document.getElementById('total-price');
 
   let totalPrice = parseFloat(totalPriceDisplay.textContent);
 
   itemList.addEventListener('click', function(e) {
     if (e.target.classList.contains('minus')) {
       decreaseQuantity(e.target.parentElement);
     } else if (e.target.classList.contains('plus')) {
       increaseQuantity(e.target.parentElement);
     } else if (e.target.classList.contains('remove')) {
       removeFromCart(e.target.parentElement);
     } else if (e.target.classList.contains('like')) {
       toggleLike(e.target);
     }
   });
 
   function increaseQuantity(item) {
     const quantitySpan = item.querySelector('.quantity');
     let quantity = parseInt(quantitySpan.textContent);
     quantity++;
     quantitySpan.textContent = quantity;
     const itemPrice = parseFloat(item.dataset.price);
     totalPrice += itemPrice;
     updateTotalPrice();
   }
 
   function decreaseQuantity(item) {
     const quantitySpan = item.querySelector('.quantity');
     let quantity = parseInt(quantitySpan.textContent);
     if (quantity >1) {
       quantity--;
       quantitySpan.textContent = quantity;
       const itemPrice = parseFloat(item.dataset.price);
       totalPrice -= itemPrice;
       updateTotalPrice();
     }
   }
 
   function removeFromCart(item) {
     const quantity = parseInt(item.querySelector('.quantity').textContent);
     const itemPrice = parseFloat(item.dataset.price);
     totalPrice -= quantity * itemPrice;
     item.remove();
     updateTotalPrice();
   }
 
   function toggleLike(likeButton) {
     likeButton.classList.toggle('liked');
   }
 
   function updateTotalPrice() {
    let totalPrice = 0;
    const items = document.querySelectorAll('#item-list li');
    items.forEach(item => {
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      const itemPrice = parseFloat(item.dataset.price);
      totalPrice += quantity * itemPrice;
    });
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
  }
  
 });
 