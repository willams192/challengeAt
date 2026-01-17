
import LoginPage from "../pages/login_page";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


const loginPage = new LoginPage()

Given(/^que o usuário acessou a aplicação Automation Exercise$/, () => {
    loginPage.accessHome()
});

And(/^a página inicial está visível corretamente$/, () => {
    loginPage.validateActiveMenu()
});


When(/^o usuário verificar a opção "([^"]*)"$/, (args1) => {
    loginPage.clickButtonLogin()
    loginPage.validateLoginPageIsVisible(args1)
});


When(/^o usuário realiza login com e-mail "([^"]*)"$/, (email) => {
    loginPage.emailInput(email)
});


When(/^informa a senha "([^"]*)"$/, (password) => {
    loginPage.passwordInput(password)
});


When(/^seleciona opção para realizar o login$/, () => {
    loginPage.confirmLogin()
});


Then(/^a aplicação deve exibir a mensagem Conectado como nome de usuário "([^"]*)"$/, (username) => {
    loginPage.validateUserLogged(username)
});


Then(/^Verifique se a mensagem de erro "([^"]*)" está visível.$/, (messageError) => {
    loginPage.validadeErrorMessage(messageError);
});


When(/^o usuário solicita a exclusão da conta$/, () => {
    loginPage.clickButtonDeleteAccount()
});


Then(/^a aplicação deve exibir a mensagem "([^"]*)"$/, (textError) => {
    loginPage.validadeAccountDelete(textError)
});


