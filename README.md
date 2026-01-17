# Automation Exercise E2E UI

Este projeto realiza testes automatizados end-to-end (E2E) para o https://automationexercise.com utilizando **Cypress**, **Cucumber** (Gherkin) e o padrão **Page Object Model**.

---

## 🛠️ Stack Utilizada

- **Cypress**: Framework de testes E2E moderno e rápido para aplicações web.
- **Cucumber**: Permite escrever cenários de teste em linguagem natural (Gherkin), facilitando a colaboração entre áreas técnicas e de negócio.
- **JavaScript (ES6+)**
- **Page Object Model (POM)**: Padrão de projeto para organizar e reutilizar código de automação.
- **Node.js**: Ambiente de execução para o Cypress.
- **Chai**: Biblioteca de assertions (inclusa no Cypress).

---

## 📁 Estrutura do Projeto

```
cypress/
  e2e/
    features/               # Cenários Gherkin (.feature)
    pages/                  # Page Objects (fluxos e ações das telas)
    elements/               # Elementos e seletores das telas
    steps/                  # Steps definitions (passos dos cenários)
  fixtures/                 # Dados de teste (não sensíveis)
  support/
    commands.js             # Comandos customizados do Cypress
    e2e.js                  # Configuração global dos testes
  cucumber-html-report.js   # Arquivo de configuração do dashboard de resultados dos testes.
cypress.env.json            # Variáveis de ambiente (dados sensíveis, NÃO versionar)
cypress.config.js           # Configuração do Cypress
```

---

## 🧩 Padrão Page Object

- **Page Objects**: Cada tela/fluxo tem uma classe em `cypress/e2e/pages/` com métodos para interagir com a interface.
- **Elements**: Os seletores e textos de cada tela ficam em `cypress/e2e/elements/`, facilitando manutenção e reutilização.
- **Steps**: Os arquivos em `cypress/e2e/steps/` conectam os cenários Gherkin aos métodos dos Page Objects.

**Exemplo de uso:**
```javascript
// Exemplo de método em um Page Object
inputValue(value) {
  cy.get(cardElements.selectDropDownItem()).type(value);
  cy.contains(cardElements.submitCardButton()).click();
}
```

---

## 🥒 Utilização do Cucumber

- Os cenários são escritos em arquivos `.feature` dentro de `cypress/e2e/features/`.
- Os passos (`Given`, `When`, `Then`) são implementados em arquivos JS dentro de `cypress/e2e/steps/`.
- Exemplo de cenário:
  ```gherkin
  Scenario: Realizar compra
    Given um usuário logado na aplicação
    When selecionar um item
    And adicionar no carrinho 
    And confirmar item
    And inserir as informações do cartão
    And selecionar a opção para confirmar o pagamento
    Then aplicação deve retornar que a compra foi realizada com sucesso
  ```

---

## Geração de Reports com multiple-cucumber-html-reporter

O projeto utiliza o [multiple-cucumber-html-reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter) para gerar relatórios detalhados dos testes E2E escritos em Cucumber.

### Como funciona

1. **Execução dos testes:**  
   Os testes são executados e os resultados são salvos em arquivos `.cucumber` dentro de `cypress/cucumber-json/`.

2. **Geração do relatório:**  
   Após a execução dos testes, o relatório HTML é gerado automaticamente na pasta `cypress/reports/multiple-cucumber-html-reporter/`.

---

## ▶️ Como Executar os Testes

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure variáveis sensíveis:**
   - Crie o arquivo `cypress.env.json` na raiz do projeto com seus dados (NÃO versionar).

3. **Executar testes no modo headless:**
   ```bash
   npx cypress run
   ```

4. **Executar testes com interface gráfica:**
   ```bash
   npx cypress open
   ```

5. **Executar cenários Cucumber:**
   - Os comandos acima já executam os cenários `.feature` se o plugin do Cucumber estiver instalado e configurado.

6. **Executar todos os testes:**
   ```bash
   npm run run-tests
   ```

---

## Como Executar os Testes e Gerar o Relatório


1. **Gerar apenas o relatório (após os testes)**
   ```bash
   npm run generate-multiple-cucumber-html-report
   ```

2. **Executar testes e gerar o relatório automaticamente**
   ```bash
   npm run test-with-report
   ```

> **Obs.:** O relatório será gerado mesmo que algum teste falhe.

---

## Visualizando o Relatório

Abra o arquivo:
   ```
   cypress/reports/multiple-cucumber-html-reporter/index.html
   ```

no seu navegador para visualizar o relatório detalhado dos testes.

---

## Integração Contínua

O arquivo `cypress-testing.yml` define o pipeline de integração contínua (CI) para execução automática dos testes E2E em ambientes de Desenvolvimento.  
Ele garante que, a cada push ou pull request, os testes sejam executados em ambiente controlado, gerando relatórios e validando a qualidade do código antes de qualquer deploy.

Principais funções do `cypress-testing.yml`:
- Instalação das dependências do projeto.
- Execução dos testes E2E em ambiente headless.
- Geração automática dos relatórios HTML.
- Upload dos artefatos de teste para consulta posterior.

> Isso garante rastreabilidade, automação e maior confiabilidade no processo de entrega contínua do Internet Banking.

## 📚 Referências

- [Documentação Cypress](https://docs.cypress.io/)
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Page Object Model](https://martinfowler.com/bliki/PageObject.html)

---

**Thanks!**
