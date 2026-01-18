import RegisterElements from "../elements/register_elements";

const registerElements = new RegisterElements()

class RegisterPage {
    clickButtonRegister() {
        cy.get(registerElements.buttonRegister())
            .should('be.visible')
            .click()
    }

    checkTitleRegister() {
        cy.get(registerElements.titleRegister())
            .should('be.visible')
            .and('contain.text', 'New User Signup!')
    }
    emailInput(email) {
        cy.get(registerElements.inputEmail())
            .type(email)
    }
    nameInput(name) {
        cy.get(registerElements.inputName())
            .type(name)
    }
    clickButtonSignup() {
        cy.get(registerElements.buttonSignup())
            .should('be.visible')
            .click()
    }
    checkTitleSignup() {
        cy.get(registerElements.titleSignup())
            .should('be.visible')
            .and('contain.text', 'Enter Account Information')
    }
    clickTitleOption() {
        cy.get(registerElements.buttonTitleOption())
            .should('be.visible')
            .click()
    }
    passwordInput(password) {
        cy.get(registerElements.inputPassword())
            .type(password)
    }
    selectDateOfBirth() {
        cy.get(registerElements.days()).select('10')
        cy.get(registerElements.months()).select('May')
        cy.get(registerElements.years()).select('1995')
    }
    selectNewsletter() {
        cy.get(registerElements.optionNewsletter())
            .should('be.visible')
            .click()
    }
    selectOptionUniform() {
        cy.get(registerElements.optionUniform())
            .should('be.visible')
            .click()
    }
    firstNameInput(firstName) {
        cy.get(registerElements.inputFirstName())
            .type(firstName)
    }
    lastNameInput(lastName) {
        cy.get(registerElements.inputLastName())
            .type(lastName)
    }
    companyInput(company) {
        cy.get(registerElements.inputCompany())
            .type(company)
    }
    phoneNumberInput(number) {
        cy.get(registerElements.inputPhoneNumber())
            .type(number)
    }

    fillAddress() {
        cy.get(registerElements.inputAdress()).type('Rua Teste, 100')
        cy.get(registerElements.inputAdress2()).type('Casa')
        cy.get(registerElements.selectCountry()).select('India')
        cy.get(registerElements.inputState()).type('SP')
        cy.get(registerElements.inputCity()).type('São Paulo')
        cy.get(registerElements.inputZipcode()).type('01010')
    }

    clickButtonCreateAccount() {
        cy.get(registerElements.buttonCreateAccount())
            .should('be.visible')
            .click()
    }

    checkTitleAccountCreate() {
        cy.get(registerElements.titleAccountCreate())
            .should('be.visible')
            .and('have.text', 'Account Created!')
    }

    clickButtonContinueAccount() {
        cy.get(registerElements.buttonContinueAccount())
            .should('be.visible')
            .click()
    }
    checkEmailAlreadyExistsMessage() {
        cy.get(registerElements.errorEmailExists())
            .should('be.visible')
            .and('contain.text', 'Email Address already exist!')
    }
}
export default RegisterPage