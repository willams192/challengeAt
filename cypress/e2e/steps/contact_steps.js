import ContactPage from "../pages/contact_page";

const contactPage = new ContactPage()


Given(/^que o usuário acessou a aplicação Automation Exercise$/, () => {
    cy.accessHomeCommands()
});

Then(/^a página inicial está visível corretamente no "([^"]*)"$/, (menu) => {
    cy.validateActiveMenuCommands(menu)
});

Then(/^seleciona opção de contato$/, () => {
    contactPage.clickButtonContact()
    contactPage.checkTitle()
});

When(/^informa o nome "([^"]*)"$/, (name) => {
    contactPage.nameInput(name)
});

When(/^informa o email "([^"]*)"$/, (email) => {
    contactPage.emailInput(email)
});

When(/^informa o título "([^"]*)"$/, (subject) => {
    contactPage.subjectInput(subject)
});

When(/^informa a mensagem "([^"]*)"$/, (message) => {
    contactPage.messageInput(message)
});

When(/^realizar o upload do arquivo$/, () => {
    contactPage.uploadDoc()
});

When(/^clicar no botão de enviar$/, () => {
    contactPage.clickButtonConfirm()
});

Then(/^aplicação deve exibir uma mensagem de sucesso$/, () => {
    contactPage.checkStatusSucess()
    contactPage.clickButtonHome()

});

When(/^o usuário retorna a tela inicial "([^"]*)"$/, (menu) => {
    cy.validateActiveMenuCommands(menu)
});
