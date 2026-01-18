import ProductsElements from "../elements/products_elements";

const productsElements = new ProductsElements()

class ProductsPage {
    clickButtonProducts() {
        cy.get(productsElements.buttonProducts())
            .should('be.visible')
            .click()
    }
    checkTextProducts(title) {
        cy.get(productsElements.textCenterProducts())
            .should('be.visible')
            .and('contain.text', title)
    }
    searchProductsInput(product) {
        cy.get(productsElements.inputSearchProduct())
            .type(product)
    }
    clickButtonSearchProducts() {
        cy.get(productsElements.buttonSearchProducts())
            .should('be.visible')
            .click()
    }
    checkProductsPolo() {
        const searchTerm = 'polo'

        cy.get(productsElements.products())
            .should('have.length.greaterThan', 0)
            .each(($productName) => {
                cy.wrap($productName)
                    .invoke('text')
                    .then((text) => {
                        expect(text.toLowerCase()).to.include(searchTerm.toLowerCase())
                    })
            })
    }
    checkListProducts() {
        cy.get(productsElements.productsImg())
            .should('have.length.greaterThan', 0)
            .and('be.visible')
    }
    clickButtonDetailButton() {
        cy.get(productsElements.productDetailButton())
            .should('be.visible')
            .click()
    }
    validateProductDetails() {
        cy.get(productsElements.detailsItem())
            .should('be.visible')
            .within(() => {
                cy.get('h2').should('be.visible')
                cy.contains('Category:').should('be.visible')
                cy.contains('Rs.').should('be.visible')
                cy.contains('Availability:').should('be.visible')
                cy.contains('Condition:').should('be.visible')
                cy.contains('Brand:').should('be.visible')
            })
    }

}
export default ProductsPage