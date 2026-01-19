import LogoutElements from "../elements/logout_elements";

const logoutElements = new LogoutElements()


class LogoutPage {
    clickButtonLogout() {
        cy.get(logoutElements.buttonLogout())
            .should('be.visible')
            .click()
    }

    validadeActiveMenuLogin(menu) {
        cy.validateActiveMenuCommands(menu)
    }
}

export default LogoutPage