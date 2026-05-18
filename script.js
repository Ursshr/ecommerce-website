// Cart data ko browser ki memory se nikalna
let cart = JSON.parse(localStorage.getItem('handskill_cart')) || [];

// Add to Cart Function
document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Product ki details uthana (Template ke hisaab se)
        const card = button.parentElement;
        const name = card.querySelector('h4').innerText;
        const price = card.querySelector('.price').innerText;
        
        const item = {
            id: index,
            name: name,
            price: price
        };

        // Cart mein add karna
        cart.push(item);
        
        // Browser memory mein save karna
        localStorage.setItem('handskill_cart', JSON.stringify(cart));
        
        // Alert dikhana (Flipkart style)
        alert(name + " has been added to your cart! 🛍️");
        updateCartDisplay();
    });
});

function updateCartDisplay() {
    const cartCount = document.querySelector('.fa-shopping-cart');
    if (cartCount) {
        cartCount.innerHTML = ` ${cart.length}`;
    }
}

// Page load hote hi count update karna
updateCartDisplay();