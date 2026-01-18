import ContactElements from "../elements/contact_elements";

const contactElements = new ContactElements()

class ContactPage {
    clickButtonContact() {
        cy.get(contactElements.buttonContact())
            .should('be.visible')
            .click()
    }
    emailInput(email) {
        cy.get(contactElements.inputEmail())
            .type(email)
    }
    nameInput(name) {
        cy.get(contactElements.inputName())
            .type(name)
    }
    subjectInput(subject) {
        cy.get(contactElements.inputSubject())
            .type(subject)
    }
    messageInput(message) {
        cy.get(contactElements.inputMessage())
            .type(message)
    }
    clickButtonConfirm() {
        cy.get(contactElements.buttonSendForm())
            .should('be.visible')
            .click()
    }
    checkTitle() {
        cy.get(contactElements.titleContact())
            .contains('h2', 'Get In Touch')
            .should('be.visible')
    }
    uploadDoc() {
        cy.get(contactElements.uploadDoc())
            .selectFile('cypress/fixtures/Desafio_Técnico_QA_(2).pdf')
    }
    checkStatusSucess() {
        cy.get(contactElements.statusSucess())
            .should('be.visible')
            .and('have.text', 'Success! Your details have been submitted successfully.')
    }
    clickButtonHome() {
        cy.get(contactElements.buttonHome())
            .should('be.visible')
            .click()
    }

}
export default ContactPage