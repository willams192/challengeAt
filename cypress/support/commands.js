import LoginElments from "../e2e/elements/login_elements"
import RegisterPage from "../e2e/pages/register_page";
import LogoutPage from "../e2e/pages/logout_page";

const registerPage = new RegisterPage()
const loginElements = new LoginElments;
const logoutPage = new LogoutPage()

Cypress.Commands.add('accessHomeCommands', () => {
    const frontBaseUrl = Cypress.env('FRONT_BASE_URL')

    expect(frontBaseUrl, 'FRONT_BASE_URL definida').to.not.be.undefined

    cy.visit(frontBaseUrl)
    cy.url().should('include', frontBaseUrl)
})


Cypress.Commands.add('validateActiveMenuCommands', (menuName) => {
    cy.contains('a', menuName)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(255, 165, 0)')
})

Cypress.Commands.add('clickLoginButtonCommands', () => {
    cy.get(loginElements.buttonLogin())
        .should('be.visible')
        .click()
})

Cypress.Commands.add('scrollToFooter', () => {
    cy.get('footer')
        .should('exist')
        .scrollIntoView()
})

Cypress.Commands.add('createDynamicEmail', () => {
    const email = `teste_${Date.now()}@test.com`
    cy.wrap(email).as('dynamicEmail')
})


Cypress.Commands.add('createUser', () => {
    const email = `teste_${Date.now()}@teste.com`
    cy.wrap(email).as('createdEmail')

    cy.accessHomeCommands()
    registerPage.clickButtonRegister()
    registerPage.checkTitleRegister()

    registerPage.nameInput('teste1')
    registerPage.fillEmail(email)
    registerPage.clickButtonSignup()

    registerPage.checkTitleSignup()
    registerPage.clickTitleOption()
    registerPage.passwordInput('1234')
    registerPage.selectDateOfBirth()
    registerPage.selectNewsletter()
    registerPage.selectOptionUniform()
    registerPage.firstNameInput('teste2')
    registerPage.lastNameInput('Testador')
    registerPage.companyInput('Testador S.A.')
    registerPage.fillAddress()
    registerPage.phoneNumberInput('123')

    registerPage.clickButtonCreateAccount()
    registerPage.checkTitleAccountCreate()
    registerPage.clickButtonContinueAccount()

    logoutPage.clickButtonLogout()
    logoutPage.validadeActiveMenuLogin('Login')
})

