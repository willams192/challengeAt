class PlaceOrderElements {
    viewCart = () => {
        return '#cartModal a[href="/view_cart"]'
    }
    buttonProceedToCheckout = () => {
        return 'a.check_out'
    }
    deliveryAddress = () => {
        return '#address_delivery'
    }
    deliveryAddressLine = () => {
        return '#address_delivery .address_address1'
    }
    deliveryCityStateZip = () => {
        return '#address_delivery .address_city'
    }
    deliveryCountry = () => {
        return '#address_delivery .address_country_name'
    }
    cartProductRow = () => {
        return '#product-1'
    }
    textareaMessage = () => {
        return 'textarea[name="message"]'
    }
    payment = () => {
        return 'a[href="/payment"]'
    }
    nameOnCard = () => {
        return '[data-qa="name-on-card"]'
    }
    cardNumber = () => {
        return '[data-qa="card-number"]'
    }
    cvc = () => {
        return '[data-qa="cvc"]'
    }
    expiryMonth = () => {
        return '[data-qa="expiry-month"]'
    }
    expiryYear = () => {
        return '[data-qa="expiry-year"]'
    }

    payButton = () => {
        return '[data-qa="pay-button"]'
    }
    successMessage = () => {
        return '#success_message .alert-success'
    }


}
export default PlaceOrderElements