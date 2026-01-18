import LoginPage from "../pages/login_page";
import LogoutPage from "../pages/logout_page";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


const loginPage = new LoginPage()
const logoutPage = new LogoutPage()

Given(/^que o usuário acessou a aplicação Automation Exercise$/, () => {
    loginPage.accessHome()
});

And(/^a página inicial está visível corretamente no "([^"]*)"$/, (args1) => {
    loginPage.validateActiveMenu(args1)
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

When(/^seleciona a opção de Sair$/, () => {
    logoutPage.clickButtonLogout()
});


Then(/^o usuário deve ser redirecionado a página de login "([^"]*)"$/, (args1) => {
    logoutPage.validadeActiveMenuLogin(args1)
});

