Feature: Logout
    Scenario: Realizar logout do usuário
        Given que o usuário acessou a aplicação Automation Exercise
        And a página inicial está visível corretamente no "Home"
        And o usuário verificar a opção "Login to your account"
        When o usuário realiza login com e-mail "teste@gmail.com2"
        And informa a senha "1234"
        And seleciona opção para realizar o login
        Then a aplicação deve exibir a mensagem Conectado como nome de usuário "teste"
        When seleciona a opção de Sair
        Then o usuário deve ser redirecionado a página de login "Login"
