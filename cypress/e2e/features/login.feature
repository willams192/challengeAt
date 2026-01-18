Feature: Login
    Scenario: Login do usuário com credenciais válidas e exclusão da conta
        Given que o usuário acessou a aplicação Automation Exercise
        And a página inicial está visível corretamente no "Home"
        And o usuário verificar a opção "Login to your account"
        When o usuário realiza login com e-mail "Teste@gmail.com2"
        And informa a senha "1234"
        And seleciona opção para realizar o login
        Then a aplicação deve exibir a mensagem Conectado como nome de usuário "teste"
        When o usuário solicita a exclusão da conta
        Then a aplicação deve exibir a mensagem "ACCOUNT DELETED"
    @focus
    Scenario: Login do usuário com credenciais inválidas
        Given que o usuário acessou a aplicação Automation Exercise
        And a página inicial está visível corretamente no "Home"
        And o usuário verificar a opção "Login to your account"
        When o usuário realiza login com e-mail "Teste@gmail.com"
        And informa a senha "1234"
        And seleciona opção para realizar o login
        Then Verifique se a mensagem de erro "Your email or password is incorrect!" está visível.
