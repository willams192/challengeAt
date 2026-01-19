import PlaceOrderElements from "../elements/place_order_elements";

const placeOrderElements = new PlaceOrderElements()

class PlaceOrderPage {
    clickAddToCartAndSaveId() {
        cy.contains('.productinfo', 'Blue Top')
            .find('[data-product-id]')
            .invoke('attr', 'data-product-id')
            .then((productId) => {
                cy.wrap(productId).as('productId')
                cy.contains('.productinfo', 'Blue Top')
                    .find('[data-product-id]')
                    .click()
            })
    }

    checkSameProductInCart() {
        cy.get('@productId').then((productId) => {
            cy.get(`#product-${productId}`)
                .should('be.visible')
        })
    }


    clickCart() {
        cy.get(placeOrderElements.viewCart())
            .should('be.visible')
            .click()
    }
    clickProceedToCheckout() {
        cy.get(placeOrderElements.buttonProceedToCheckout())
            .should('be.visible')
            .click()
    }

    checkDeliveryAddress() {
        cy.get(placeOrderElements.deliveryAddress())
            .should('be.visible')

        cy.get(placeOrderElements.deliveryAddressLine())
            .should('contain.text', 'Rua Teste, 100')
            .and('contain.text', 'Casa')

        cy.get(placeOrderElements.deliveryCityStateZip())
            .should('contain.text', 'São Paulo')
            .and('contain.text', '01010')

        cy.get(placeOrderElements.deliveryCountry())
            .should('have.text', 'India')
    }
    fillMessage(message) {
        cy.get(placeOrderElements.textareaMessage())
            .should('be.visible')
            .type(message)
    }
    clickPayment() {
        cy.get(placeOrderElements.payment())
            .should('be.visible')
            .click()
    }
    fillPaymentForm() {
        cy.get(placeOrderElements.nameOnCard())
            .should('be.visible')
            .type('Teste QA')

        cy.get(placeOrderElements.cardNumber())
            .type('4111111111111111')

        cy.get(placeOrderElements.cvc())
            .type('123')

        cy.get(placeOrderElements.expiryMonth())
            .type('12')

        cy.get(placeOrderElements.expiryYear())
            .type('2028')
    }
    submitPayment() {
        cy.get(placeOrderElements.payButton())
            .should('be.visible')
            .click()
    }
    checkPaymentSuccess() {
        cy.contains('p', 'Congratulations! Your order has been confirmed!')
            .should('be.visible')
    }
}
export default PlaceOrderPage