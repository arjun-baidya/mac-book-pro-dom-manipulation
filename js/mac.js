
// function for final price section
function setFinalPrice(){
    const getFinalPrice = document.getElementById('final-price')
    return getFinalPrice
}

// function for product type wise cost
function setCost(productType){
    const productTypeCost = document.getElementById(productType+'-cost')
    return productTypeCost
}

// function for get total price 
function totalPrice(){
    const getTotalPrice = document.getElementById('total-price')
    return getTotalPrice
}


// function for cupon section
document.getElementById('cupon-button').addEventListener('click',function(){
    const getCuponCode = document.getElementById('cupon-input')
    const getCuponInput = getCuponCode.value
    const getTotal = document.getElementById('total-price').innerText
    const finalPrice = setFinalPrice()
    getCuponCode.value = ''
    getCuponInput.value ='';
    if (getCuponInput == 'stevekaku'){
        const discount = (getTotal * 20) / 100
        const afterDiscount = getTotal - discount
        finalPrice.innerText = afterDiscount
    }

})


// Event for 8Gb memory
document.getElementById('memory-8gb').addEventListener('click',function(){
    // const get8gbcost = document.getElementById('memory-cost')
    const setMemoryCost8gb = setCost('memory')
    setMemoryCost8gb.innerText = 0

    const getBestPrice = document.getElementById('best-price').innerText
    const getStorage = setCost('storage').innerText
    const getDelivery = setCost('delivery').innerText
    const getTotalPrice = totalPrice()
    const total = parseInt(getBestPrice) + 0 + parseInt(getStorage) + parseInt(getDelivery)
    getTotalPrice.innerText = total

    const finalPrice = setFinalPrice()
    finalPrice.innerText = total

})

// Event for 16Gb memory
document.getElementById('memory-16gb').addEventListener('click',function(){
    // const get16gbcost = document.getElementById('memory-cost').innerText
    // get16gbcost.innerText = 16
    const setMemoryCost16gb = setCost('memory')
    setMemoryCost16gb.innerText = 180

    const getBestPrice = document.getElementById('best-price').innerText
    const getStorage = setCost('storage').innerText
    const getDelivery = setCost('delivery').innerText
    const getTotalPrice = totalPrice()
    const total = parseInt(getBestPrice) + 180 + parseInt(getStorage) + parseInt(getDelivery)
    getTotalPrice.innerText = total

    const finalPrice = setFinalPrice()
    finalPrice.innerText = total
    


})

// Event for 256Gb storage
document.getElementById('storage-256gb').addEventListener('click',function(){
    // const get256gbcost = document.getElementById('storage-cost')
    // get256gbcost.innerText = 0
    const setStorageCost256gb = setCost('storage')
    setStorageCost256gb.innerText = 0;

    const getBestPrice = document.getElementById('best-price').innerText
    const getmemory = setCost('memory').innerText
    const getDelivery = setCost('delivery').innerText
    const getTotalPrice = totalPrice()
    const total = parseInt(getBestPrice) + 0 + parseInt(getmemory) + parseInt(getDelivery)
    getTotalPrice.innerText = total

    const finalPrice = setFinalPrice()
    finalPrice.innerText = total
})

// Event for 512Gb storage
document.getElementById('storage-512gb').addEventListener('click',function(){
    // const get512gbcost = document.getElementById('storage-cost')
    // get512gbcost.innerText = 100
    const setStorageCost512gb = setCost('storage')
    setStorageCost512gb.innerText = 100;

    const getBestPrice = document.getElementById('best-price').innerText
    const getmemory = setCost('memory').innerText
    const getDelivery = setCost('delivery').innerText
    const getTotalPrice = totalPrice()
    const total = parseInt(getBestPrice) + 100 + parseInt(getmemory) + parseInt(getDelivery)
    getTotalPrice.innerText = total

    const finalPrice = setFinalPrice()
    finalPrice.innerText = total
})


// Event for 1TB storage
document.getElementById('storage-1tb').addEventListener('click',function(){
    // const get1tbcost = document.getElementById('storage-cost')
    // get1tbcost.innerText = 180
    const setStorageCost1tb = setCost('storage')
    setStorageCost1tb.innerText = 180;

    const getBestPrice = document.getElementById('best-price').innerText
    const getmemory = setCost('memory').innerText
    const getDelivery = setCost('delivery').innerText
    const getTotalPrice = totalPrice()
    const total = parseInt(getBestPrice) + 180 + parseInt(getmemory) + parseInt(getDelivery)
    getTotalPrice.innerText = total

    const finalPrice = setFinalPrice()
    finalPrice.innerText = total
})


// Event for free delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    const setFreeDelivery = setCost('delivery')
    setFreeDelivery.innerText = 0;

    const getBestPrice = document.getElementById('best-price').innerText
    const getmemory = setCost('memory').innerText
    const getStorage = setCost('storage').innerText
    const getTotalPrice = totalPrice()
    const total = parseInt(getBestPrice) + 0 + parseInt(getmemory) + parseInt(getStorage)
    getTotalPrice.innerText = total

    const finalPrice = setFinalPrice()
    finalPrice.innerText = total
})


// Event for cost delivery
document.getElementById('cost-delivery').addEventListener('click',function(){
    const setDeliveryCost = setCost('delivery')
    setDeliveryCost.innerText = 20;

    const getBestPrice = document.getElementById('best-price').innerText
    const getmemory = setCost('memory').innerText
    const getStorage = setCost('storage').innerText
    const getTotalPrice = totalPrice()
    const total = parseInt(getBestPrice) + 20 + parseInt(getmemory) + parseInt(getStorage)
    getTotalPrice.innerText = total

    const finalPrice = setFinalPrice()
    finalPrice.innerText = total

})
