let addToBoxButton = document.getElementsByClassName ("shop-item-button")
for (let index = 0; index < addToBoxButton.length; index++) {
    var buton = addToBoxButton[index];
    buton.addEventListener("click", addToClickBox)
    
}
function addToClickBox (event) {
    let butonHedefi = event.target
    let shopItem = butonHedefi.parentElement.parentElement
    let theTitle = shopItem.getElementsByClassName("shop-item-title")[0].innerText
    let imageSource = shopItem.getElementsByClassName("shop-item-image")[0].src
    let itemPrice = shopItem.getElementsByClassName("shop-item-price")[0].innerText
    addShoppingBox(theTitle,imageSource, itemPrice)
} 
function  addShoppingBox(theTitle, imageSource, itemPrice) {
    let container = document.createElement('div');
    container.classList.add('cart-row');


    let cardItemsContainer = document.getElementsByClassName('cart-items')[0];
    let boxItemsTitlesList = cardItemsContainer.querySelector('.cart-item-title');

//    for (let index = 0; index < boxItemsTitlesList.length; index++) {
       
//         if (boxItemsTitlesList[index].innerText == theTitle) {
//             alert('bu urun zaten sepette var');
//             return 
//         }
       
//    }

    container.innerHTML +=`

    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSource}" width="100" height="100">
        <span class="cart-item-title">${theTitle}</span>
    </div>

    <span class="cart-price cart-column">${itemPrice}</span>

    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
    `
    cardItemsContainer.append(container);
}

let deleteItemFromBox = document.getElementsByClassName("btn-danger")
for (let index = 0; index < deleteItemFromBox.length; index++) {
    const deleteButton = deleteItemFromBox[index];
    deleteButton.addEventListener("click", deleteItems)
    
}

function deleteItems (params) {
    let paramsVariable = params.target.parentElement.parentElement.remove()
    console.log(paramsVariable)
    
}