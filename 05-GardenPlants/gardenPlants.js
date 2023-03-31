function addToTheCart(ProductId, imgNumber) {
    console.log(ProductId + "img number: ", imgNumber);

    addItemtoTheCart(
        ProductId.children[0].innerHTML,
        ProductId.children[1].innerHTML,
        ProductId.children[2].innerHTML,
        "../assets/Garden-plants/" + imgNumber + ".jpg"
    );
}
