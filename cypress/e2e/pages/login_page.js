
import LoginElments from "../elements/login_elements";


const loginElements = new LoginElments

class LoginPage {
    accessHome() {
        cy.accessHomeCommands()
    }

    validateActiveMenu(menu) {
        cy.validateActiveMenuCommands(menu)
    }
    clickButtonLogin() {
        cy.clickLoginButtonCommands()
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