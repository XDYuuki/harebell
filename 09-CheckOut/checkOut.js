function cartItensInsert() {
    let divCartItemList = document.getElementById("cart-item");

    let productList = getItemListFromTheCart();

    console.log(productList);

    productList.forEach((element) => {
        divCartItemList.appendChild(
            createProductCard(
                element.productTitle,
                element.description,
                element.price,
                element.img
            )
        );
    });
}

function createProductCard(title, description, price, imagePath) {
    let divProductItem = document.createElement("div");
    divProductItem.setAttribute("class", "product-item");
    let divTextProduct = document.createElement("div");
    divTextProduct.setAttribute("class", "text-product");
    let divInStock = document.createElement("div");
    divInStock.setAttribute("class", "in-stock");
    let divProductQt = document.createElement("div");
    divProductQt.setAttribute("class", "product-qt");

    let txt;

    let productImg = document.createElement("img");
    productImg.setAttribute("src", imagePath);
    let prodIconImg = document.createElement("img");
    prodIconImg.setAttribute("src", "Assets/checkIcon.svg");

    let p1 = document.createElement("p");
    p1.setAttribute("class", "semi-600-20");
    txt = document.createTextNode(title);
    p1.appendChild(txt);

    let p2 = document.createElement("p");
    txt = document.createTextNode(description);
    p2.appendChild(txt);

    let p3 = document.createElement("p");
    p3.setAttribute("class", "semi-600-20");
    txt = document.createTextNode(price);
    p3.appendChild(txt);

    let p4 = document.createElement("p");
    txt = document.createTextNode("In Stock");
    p4.appendChild(txt);

    let p5 = document.createElement("p");
    txt = document.createTextNode("Qt");
    p5.appendChild(txt);

    let p6 = document.createElement("p");
    txt = document.createTextNode("|");
    p6.appendChild(txt);

    let selectComboBox = document.createElement("select");

    let option1 = document.createElement("option");
    option1.setAttribute("Value", "1");
    txt = document.createTextNode("1");
    option1.appendChild(txt);

    let option2 = document.createElement("option");
    option2.setAttribute("Value", "2");
    txt = document.createTextNode("2");
    option2.appendChild(txt);

    let option3 = document.createElement("option");
    option3.setAttribute("Value", "3");
    txt = document.createTextNode("3");
    option3.appendChild(txt);

    let option4 = document.createElement("option");
    option4.setAttribute("Value", "4");
    txt = document.createTextNode("4");
    option4.appendChild(txt);

    let option5 = document.createElement("option");
    option5.setAttribute("Value", "5");
    txt = document.createTextNode("5");
    option5.appendChild(txt);

    divInStock.appendChild(prodIconImg);
    divInStock.appendChild(p4);

    selectComboBox.appendChild(option1);
    selectComboBox.appendChild(option2);
    selectComboBox.appendChild(option3);
    selectComboBox.appendChild(option4);
    selectComboBox.appendChild(option5);

    divProductQt.appendChild(p5);
    divProductQt.appendChild(p6);
    divProductQt.appendChild(selectComboBox);

    divTextProduct.appendChild(p1);
    divTextProduct.appendChild(p2);
    divTextProduct.appendChild(p3);
    divTextProduct.appendChild(divInStock);

    divProductItem.appendChild(productImg);
    divProductItem.appendChild(divTextProduct);
    divProductItem.appendChild(divProductQt);

    return divProductItem;
}

cartItensInsert();
