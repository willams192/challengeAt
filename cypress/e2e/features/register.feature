Feature: Register User
    Background:
        Given que o usuário acessou a aplicação Automation Exercise
        And a página inicial está visível corretamente no "Home"
        And o usuário verificar a opção "Login to your account"

    Scenario: Realizar o cadastro do usuário
        And clicar para opção de registro
        And inserir o nome "teste1"
        And inserir o email
        And seleciona opção de registrar
        And selecionar o título
        And inserir a senha "1234"
        And selecionar data de nascimento
        And selecionar opção para se inscrever no newsletter
        And selecionar a opção de receber ofertas especiais
        And inserir o primeiro nome "teste2"
        And inserir o último nome "Testador"
        And inserir empresa "Tesador S.A."
        And preencher as informações de endereço
        And informar o número de telefone "123"
        When selecionar a opção de criar a conta bancária
        Then aplicação deve exibir uma mensagem de sucesso ao cliente
        And a aplicação deve exibir a mensagem conectado como nome de usuário "teste1"

    Scenario: Realizar cadastro com e-mail existente
        And clicar para opção de registro
        And inserir o nome "teste1"
        And inserir o email "teste@gmail.com2"
        When seleciona opção de registrar
        Then aplicação deve retornar erro



