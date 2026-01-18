
import LoginPage from "../pages/login_page";
import HomePage from "../pages/home_page";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


const loginPage = new LoginPage()
const homePage = new HomePage()


Given(/^que o usuário acessou a aplicação Automation Exercise$/, () => {
    loginPage.accessHome()
});

Then(/^a página inicial está visível corretamente no "([^"]*)"$/, (args1) => {
    loginPage.validateActiveMenu(args1)
});

Then(/^rola para baixo até o rodapé$/, () => {
    homePage.scrollHome()
    homePage.checkSubscription()
});

Then(/^insere o endero de email "([^"]*)"$/, (args1) => {
    homePage.emailInput(args1)
});

When(/^clica no botão da seta$/, () => {
    homePage.clickButtonSend()
});

Then(/^aplicação deve exibir a mensagem "([^"]*)"$/, (args1) => {
    homePage.checkMessageSucess(args1)
});
