import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductsPage from "../pages/products_page";

const productsPage = new ProductsPage()


Given(/^que o usuário acessou a aplicação Automation Exercise$/, () => {
    cy.accessHomeCommands()
});

Then(/^a página inicial está visível corretamente no "([^"]*)"$/, (menu) => {
    cy.validateActiveMenuCommands(menu)
});


When(/^seleciona a opção de produtos$/, () => {
    productsPage.clickButtonProducts()
});


When(/^aplicação exibe "([^"]*)"$/, (title) => {
    productsPage.checkTextProducts(title)
});


When(/^digita o nome no campo de pesquisa "([^"]*)"$/, (args1) => {
    productsPage.searchProductsInput(args1)
});


Then(/^aplicação deve exibir "([^"]*)" com os produtos pesquisados$/, (title) => {
    productsPage.clickButtonSearchProducts()
    productsPage.checkTextProducts(title)
    productsPage.checkProductsPolo()
});


When(/^retorna todos os produtos$/, () => {
    productsPage.checkListProducts()
});

When(/^seleciona opção para ver produto$/, () => {
    productsPage.clickButtonDetailButton()
});


Then(/^aplicação deve exibir as informações do item$/, () => {
    productsPage.validateProductDetails()
});

