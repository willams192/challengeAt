import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PlaceOrderPage from "../pages/place_order_page";

const placeOrdePage = new PlaceOrderPage()

When(/^adiciona produto no carrinho$/, () => {
    placeOrdePage.clickAddToCartAndSaveId()
});

When(/^seleciona opção de visualizar no carrinho "([^"]*)"$/, (menu) => {
    placeOrdePage.clickCart()
    cy.validateActiveMenuCommands(menu)
});

When(/^clica em finalizar a compra$/, () => {
    placeOrdePage.clickProceedToCheckout()
    placeOrdePage.checkDeliveryAddress()
    placeOrdePage.checkSameProductInCart()
});

When(/^insere uma descrição "([^"]*)"$/, (message) => {
    placeOrdePage.fillMessage(message)
    placeOrdePage.clickPayment()
});

When(/^insere o dados do cartão$/, () => {
    placeOrdePage.fillPaymentForm()
});

When(/^confirma o pedido$/, () => {
    placeOrdePage.submitPayment()
});

Then(/^aplicação deve exibir uma transação de sucesso$/, () => {
});
