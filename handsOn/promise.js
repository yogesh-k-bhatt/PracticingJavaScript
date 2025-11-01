const cart = ["cap", "shirt", "pant", "shoes"];

// Consumer part - createOrder, proceedToPayment, showOrderSummary, updateWallet

createOrder(cart)
    .then(function(orderId) {
        console.log("OrderID:", orderId);
        return orderId;
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentId) {
        console.log("Payment was successful!");
        return paymentId;
    })
    .then(function(paymentId) {
        return showOrderSummary(paymentId);
    })
    .then(function(summaryId) {
        console.log("Your Order is successfully placed!");
    })
    .then(function(summaryId) {
        return updateWallet(summaryId);
    })
    .then(function(orderId) {
        console.log("Your wallet balance is also updated.");
    })
    .catch(function(err) {
        console.log(err.message);
    })


// Producer part

function createOrder(cart) {
    const promise = new Promise(function (resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid!");
            reject(err);
        }
        const orderId = generateOrderId(cart);
        if(orderId)
            resolve(orderId);
    });
    return promise;
}

function proceedToPayment(orderId) {
    const promise = new Promise(function(resolve, reject) {
        // Payment proccessing code here
        const paymentId = validatePayment(orderId);
        if(paymentId)
            resolve(paymentId);
        else {
            const err = new Error("Payment was unsuccessful!");
            reject(err);
        }
    });
    return promise;
}

function showOrderSummary(paymentId) {
    return new Promise(function(resolve, reject) {
        // Show the order summary code here
        if(paymentId) {
            const summaryId = generateSummaryId(paymentId);
            resolve(summaryId);
        }
        else {
            const err = new Error("Your order wasn't placed!");
            reject(err);
        }
    });
}

function updateWallet(orderId) {
    return new Promise(function(resolve, reject) {
        // Update balance code here
        resolve("Your wallet balance is");
    });
}


// Validation part

function validateCart(cart) {
    // For now checking only if the cart is empty
    return (cart ? true:false);
}

function validatePayment(orderId) {
    // Payment validation code here, for now payment is successfull
    return 1111;
}

// ID generation

function generateOrderId(cart) {
    const orderId = 1234;
    // Order ID generation code here
    return orderId;
}

function generateSummaryId(paymentId) {
    const summaryId = 2345;
    // Summary ID generation code here
    return summaryId;
}