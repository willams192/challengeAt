Feature: Home
        Scenario: Verificar assinatura na página inicial
                Given que o usuário acessou a aplicação Automation Exercise
                And a página inicial está visível corretamente no "Home"
                And rola para baixo até o rodapé
                And insere o endero de email "teste@gmail.com"
                When clica no botão da seta
                Then aplicação deve exibir a mensagem "You have been successfully subscribed!"