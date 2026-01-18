import LogoutElements from "../elements/logout_elements";

const logoutElememnts = new LogoutElements


class LogoutPage {
    clickButtonLogout() {
        cy.get(logoutElememnts.buttonLogout())
            .should('be.visible')
            .click()
    }

    validadeActiveMenuLogin(menu) {
        cy.validateActiveMenuCommands(menu)
    }
}

export default LogoutPage