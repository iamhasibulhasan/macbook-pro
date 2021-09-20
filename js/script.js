// Cost Handle
function costHandle(destination, price) {
    let memoryCost = document.getElementById(destination + '-cost');
    memoryCost.innerText = price;
    totalPrice();
}


// Total Price Handle
function totalPrice() {
    let bestPrice = document.getElementById('best-price').innerText;
    let memoryPrice = document.getElementById('memory-cost').innerText;
    let storagePrice = document.getElementById('storage-cost').innerText;
    let deliveryPrice = document.getElementById('delivery-cost').innerText;

    let total = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);
    console.log(total);
    document.getElementById('total-price').innerText = total;
    document.getElementById('total-cost').innerText = total;

}
// Apply Promo
function applyPromo() {
    let promoCode = document.getElementById('promo-input').value;
    if (promoCode == 'stevekaku') {
        let totalCost = document.getElementById('total-cost').innerText;
        let discountPrice = parseFloat(totalCost) - (parseFloat(totalCost) / 100) * 20;
        // console.log(discountPrice);
        document.getElementById('total-cost').innerText = discountPrice;
        document.getElementById('promo-input').value = '';
    }
}

