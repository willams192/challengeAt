import RegisterPage from "../pages/register_page";
import LoginPage from "../pages/login_page";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


const loginPage = new LoginPage()
const registerPage = new RegisterPage()


Given(/^que o usuário acessou a aplicação Automation Exercise$/, () => {
    cy.accessHomeCommands()
});

When(/^a página inicial está visível corretamente no "([^"]*)"$/, (menu) => {
    cy.validateActiveMenuCommands(menu)
});

When(/^clicar para opção de registro$/, () => {
    registerPage.clickButtonRegister()
    registerPage.checkTitleRegister()
});


When(/^inserir o email "([^"]*)"$/, (email) => {
    registerPage.emailInput(email)
});

When(/^inserir o nome "([^"]*)"$/, (name) => {
    registerPage.nameInput(name)
});

When(/^seleciona opção de registrar$/, () => {
    registerPage.clickButtonSignup()
});


When(/^selecionar o título$/, () => {
    registerPage.checkTitleSignup()
    registerPage.clickTitleOption()
});

When(/^inserir a senha "([^"]*)"$/, (password) => {
    registerPage.passwordInput(password)
});

When(/^selecionar data de nascimento$/, () => {
    registerPage.selectDateOfBirth()
});

When(/^selecionar opção para se inscrever no newsletter$/, () => {
    registerPage.selectNewsletter()
});

When(/^selecionar a opção de receber ofertas especiais$/, () => {
    registerPage.selectOptionUniform()
});

When(/^inserir o primeiro nome "([^"]*)"$/, (firstName) => {
    registerPage.firstNameInput(firstName)
});

When(/^inserir o último nome "([^"]*)"$/, (lastName) => {
    registerPage.lastNameInput(lastName)
});

When(/^inserir empresa "([^"]*)"$/, (company) => {
    registerPage.companyInput(company)
});

When(/^preencher as informações de endereço$/, () => {
    registerPage.fillAddress()
});

When(/^informar o número de telefone "([^"]*)"$/, (phone) => {
    registerPage.phoneNumberInput(phone)
});

When(/^selecionar a opção de criar a conta bancária$/, () => {
    registerPage.clickButtonCreateAccount()
});

Then(/^aplicação deve exibir uma mensagem de sucesso ao cliente$/, () => {
    registerPage.checkTitleAccountCreate()
    registerPage.clickButtonContinueAccount()
});

Then(/^a aplicação deve exibir a mensagem conectado como nome de usuário "([^"]*)"$/, (username) => {
    loginPage.validateUserLogged(username)
});


Then(/^aplicação deve retornar erro$/, () => {
    registerPage.checkEmailAlreadyExistsMessage()
});
