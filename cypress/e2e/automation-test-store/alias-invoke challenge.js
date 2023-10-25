/// <reference types="Cypress" />
/// <reference types="@Cypress/xpath" />

//My resolution:
describe("Alias and invoke", () => {
    it("Validate products number", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").invoke('toArray').as('productsList')
    });
    it("Validate cart text", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail .productcart").eq(0).invoke('attr', 'display', 'Add to Cart').as('productCart')
        cy.get('@productCart').should('have.attr', 'display', 'Add to Cart')
    });

//Course resolution:

    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
})