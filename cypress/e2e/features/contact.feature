Feature: Contact Us Form

    Scenario: Verificar formuláriode de contato
        Given que o usuário acessou a aplicação Automation Exercise
        And a página inicial está visível corretamente no "Home"
        And seleciona opção de contato
        And informa o nome "testador"
        And informa o email "teste@testei.com"
        And informa o título "Testando"
        And informa a mensagem "Testei testado"
        And realizar o upload do arquivo
        When clicar no botão de enviar
        Then aplicação deve exibir uma mensagem de sucesso
        And o usuário retorna a tela inicial "Home"