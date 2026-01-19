class ProductsElements {
    buttonProducts = () => {
        return 'a[href="/products"]'
    }
    textCenterProducts = () => {
        return 'h2.title.text-center'
    }
    inputSearchProduct = () => {
        return '#search_product'
    }
    buttonSearchProducts = () => {
        return '#submit_search'
    }
    products = () => {
        return '.features_items .productinfo p'
    }
    productsImg = () => {
        return '.features_items .product-image-wrapper'
    }
    productDetailButton = () => {
        return 'a[href="/product_details/1"]'
    }
    detailsItem = () => {
        return '.product-information'
    }

}

export default ProductsElements