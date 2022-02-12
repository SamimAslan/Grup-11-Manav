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
    console.log(theTitle,imageSource, itemPrice)
} 
