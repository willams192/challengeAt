import HomeElements from "../elements/home_elements";

const homeElements = new HomeElements()

class HomePage {
    scrollHome() {
        cy.scrollToFooter()
    }
    checkSubscription() {
        cy.get(homeElements.footerSubscription())
            .contains('h2', 'Subscription')
            .should('be.visible')
    }
    emailInput(email) {
        cy.get(homeElements.inputEmail())
            .type(email)
    }
    clickButtonSend() {
        cy.get(homeElements.buttonSend())
            .should('be.visible')
            .click()
    }
    checkMessageSucess(message) {
        cy.get(homeElements.alertSucess())
            .should('be.visible')
            .and('contain.text', message)
    }

}

export default HomePage