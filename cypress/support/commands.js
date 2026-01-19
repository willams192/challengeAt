import LoginElments from "../e2e/elements/login_elements"

const loginElements = new LoginElments;
const frontBaseUrl = Cypress.env("FRONT_BASE_URL")


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


