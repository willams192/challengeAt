Feature: Place Order

    Scenario: Realizar compra
        Given que o usuário acessou a aplicação Automation Exercise
        And a página inicial está visível corretamente no "Home"
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
        And adiciona produto no carrinho
        And seleciona opção de visualizar no carrinho "Cart"
        And clica em finalizar a compra
        And insere uma descrição "Teste123"
        And insere o dados do cartão
        And confirma o pedido
        Then aplicação deve exibir uma transação de sucesso
        When o usuário solicita a exclusão da conta
        Then a aplicação deve exibir a mensagem "Account Deleted!"