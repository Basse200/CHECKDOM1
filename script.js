function updateQuantity(button, change) {  
    const cartItem = button.parentElement;  
    const quantityElement = cartItem.querySelector(".quantity");  
    let quantity = parseInt(quantityElement.innerText);  
    
    // Update quantity  
    quantity += change;  
    
    // Ensure quantity doesn't go below 1  
    if (quantity < 1) {  
        quantity = 1;  
    }  
    
    quantityElement.innerText = quantity;  
    updateTotalPrice();  
}  

function deleteItem(button) {  
    const cartItem = button.parentElement;  
    cartItem.remove();  
    updateTotalPrice();  
}  

function toggleLike(button) {  
    button.classList.toggle("liked");  
    button.innerText = button.classList.contains("liked") ? "❤️" : "❤️";  
}  

function updateTotalPrice() {  
    const cartItems = document.querySelectorAll('.cart-item');  
    let total = 0;  
    
    cartItems.forEach(item => {  
        const price = parseInt(item.dataset.price);  
        const quantity = parseInt(item.querySelector('.quantity').innerText);  
        total += price * quantity;  
    });  

    document.getElementById('total-price').innerText = `Total Price: $${total}`;  
}