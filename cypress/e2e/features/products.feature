Feature: Products
    Scenario: Pesquisar produto
        Given que o usuário acessou a aplicação Automation Exercise
        And a página inicial está visível corretamente no "Home"
        And seleciona a opção de produtos
        And aplicação exibe "All Products"
        When digita o nome no campo de pesquisa "polo"
        Then aplicação deve exibir "Searched Products" com os produtos pesquisados

    Scenario: Verificar todos os produtos e a página de detalhes do produto
        Given que o usuário acessou a aplicação Automation Exercise
        And a página inicial está visível corretamente no "Home"
        And seleciona a opção de produtos
        And aplicação exibe "All Products"
        And retorna todos os produtos
        When seleciona opção para ver produto
        Then aplicação deve exibir as informações do item



