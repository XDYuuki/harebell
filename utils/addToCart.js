function addItemtoTheCart(productTitle, description, price, imgReference) {
    let newProduct = {
        productTitle: productTitle,
        description: description,
        price: price,
        img: imgReference,
    };

    let storageCartObj = {
        storageCartList: [],
    };

    let localStorageProductList =
        window.localStorage.getItem("cartProductList");

    if (localStorageProductList) {
        localStorageProductList = JSON.parse(localStorageProductList);

        localStorageProductList.storageCartList.push(newProduct);

        window.localStorage.setItem(
            "cartProductList",
            JSON.stringify(localStorageProductList)
        );
    } else {
        storageCartObj.storageCartList.push(newProduct);

        window.localStorage.setItem(
            "cartProductList",
            JSON.stringify(storageCartObj)
        );
    }
}

function getItemListFromTheCart() {
    let productList = JSON.parse(
        window.localStorage.getItem("cartProductList")
    );

    if (productList) {
        return productList.storageCartList;
    } else {
        return [];
    }
}
