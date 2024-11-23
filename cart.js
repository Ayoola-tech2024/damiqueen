// Add to Cart Function
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show confirmation message
    alert(`${productName} added to cart!`);
}

// Function to load cart items on the cart page
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    // Clear previous cart items
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Create cart item element
        const cartItem = `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>Price: $${item.price} x ${item.quantity}</p>
                <p>Total: $${itemTotal.toFixed(2)}</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
            <hr>
        `;
        cartContainer.innerHTML += cartItem;
    });

    totalPriceElement.innerText = `Total Price: $${total.toFixed(2)}`;
}

// Remove item from cart
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show confirmation message
    alert(`${productName} removed from cart!`);
    loadCartItems(); // Refresh the cart
}


// javascript for toggle menu
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}