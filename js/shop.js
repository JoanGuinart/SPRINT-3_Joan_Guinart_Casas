// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
console.log(products)
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1


function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart   
    const getProduct = products.find((element) => element.id === id);
    // 2. Add found product to the cartList array
    if (getProduct !== undefined) {
    let productIndex = products.indexOf(getProduct);
    cartList.push(products[productIndex]);
  }
  console.log(cartList);
}

// Exercise 2

function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
    total = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    //let totalPrice = 0;

    let productPrice = [];
    let products = [];
    let id1 = 0;
    let id3 = 0;
    applyPromotionsCart()
    // working
    /* cart.forEach((element) => {
        if (element.subtotalWithDiscount) {
            productPrice.push(element.subtotalWithDiscount);
        } else {
            productPrice.push(element.price * element.quantity);
        }

    }); */

    cartList.forEach((element) => {
        products.push(element.id);
    });

    for (let i = 0; i < cartList.length; i++) {
        if (products[i] === 1) {
            id1++;
        }
        if (products[i] === 3) {
            id3++;
        }
    };

    cartList.forEach((element) => {
        if (element.id === 1 && id1 >= 3) {
            productPrice.push(10);
        }
        else if  (element.id === 3 && id3 >= 10) {
            productPrice.push(element.price * (2/3));
        } else {
            productPrice.push(element.price);
        }

    });

    for (let i = 0; i < productPrice.length; i++) {
        total += productPrice[i];
    }
    
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    for (let i = 0; i <= cartList.length - 1; i++) {
        let itemSelected = cart.find((element) => element.id === cartList[i].id);
          if (itemSelected !==undefined){
            let itemIndex = cart.indexOf(itemSelected);
            cart[itemIndex].quantity ++;
          } else {
            let product = cartList[i];
            product.quantity = 1;
            cart.push(product);
          }
        }                
        console.table("cart", cart);
}


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        if ((cart[i].id === 1) && (cart[i].quantity >= 3)){
            cart[i].subtotalWithDiscount = (cart[i].quantity) * 10;
        }
        if ((cart[i].id === 3) && (cart[i].quantity >= 10)) {
            cart[i].subtotalWithDiscount = (((cart[i].quantity) * (cart[i].price)) * 2 / 3);
        }
    }
    console.table("cart", cart);
   
}
 

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    const modalCart = document.getElementById("cart_list");
    modalCart.innerHTML = "";

    //let finalPriceDiscount = 0;
    //let finalRegularPrice = 0;
    
    calculateTotal();

        for (let i = 0; i < cart.length; i++) {
           let tableRow = document.createElement("tr");
           let itemName = document.createElement("th");
               itemName.innerHTML = cart[i].name;
           let itemPrice = document.createElement("td");
               itemPrice.innerHTML = cart[i].price;
           let itemQuantity = document.createElement("td");
               itemQuantity.innerHTML = cart[i].quantity;
           let itemTotal = document.createElement("td");
              if (!cart[i].subtotalWithDiscount) {
                 itemTotal.innerHTML = cart[i].price * cart[i].quantity;
              } else {
                itemTotal.innerHTML = (cart[i].subtotalWithDiscount).toFixed(2);
              }
    tableRow.appendChild(itemName);
    tableRow.appendChild(itemPrice);
    tableRow.appendChild(itemQuantity);
    tableRow.appendChild(itemTotal);
    modalCart.appendChild(tableRow);

    
    /*
    if (!cart[i].subtotalWithDiscount) {
        finalPriceDiscount += cart[i].price * cart[i].quantity;
    } else {
        finalRegularPrice += cart[i].subtotalWithDiscount;
    }
    */
  }

  const elementPrice = document.getElementById("total_price");
  elementPrice.innerHTML = total.toFixed(2);
  console.log(total);

}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}