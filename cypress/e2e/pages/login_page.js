
import LoginElments from "../elements/login_elements";

const loginElements = new LoginElments
const frontBaseUrl = Cypress.env("FRONT_BASE_URL")

class LoginPage {
    accessHome() {
        cy.visit(frontBaseUrl)
        cy.url()
            .should('include', frontBaseUrl)
    }

    validateActiveMenu() {
        cy.contains('a', 'Home')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(255, 165, 0)')
    }
    clickButtonLogin() {
        cy.get(loginElements.buttonLogin())
            .should('be.visible')
            .click()
    }
    clickButtonDeleteAccount() {
        cy.get(loginElements.buttonDeleteAccount())
            .should('be.visible')
            .click()
    }

    emailInput(email) {
        cy.get(loginElements.inputEmail())
            .type(email)
    }
    passwordInput(password) {
        cy.get(loginElements.inputPassword())
            .type(password)
    }
    confirmLogin() {
        cy.get(loginElements.confirmLogin())
            .should('be.visible')
            .click()
    }
    validateUserLogged(username) {
        cy.contains('a', 'Logged in as')
            .find('b')
            .should('have.text', username)
    }
    validateLoginPageIsVisible(text) {
        cy.contains('h2', text)
            .should('be.visible')
    }
    validadeErrorMessage(message) {
        cy.get(loginElements.formsLogin)
            .contains('p', message)
            .should('be.visible')
    }
    validadeAccountDelete(message) {
        cy.get(loginElements.messageDeleteAccount)
            .should('be.visible')
            .and('contain.text', message)
    }

}
export default LoginPage