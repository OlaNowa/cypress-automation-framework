/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    //positive path
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type("Aleksandra")
        cy.get('[name="last_name"]').type("Smith")
        cy.get('[name="email"]').type("aleks.smith@test.com")
        cy.get('textarea.feedback-input').type("test")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    //negative path
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type("Alex")
        cy.get('[name="last_name"]').type("Smith")
        cy.get('textarea.feedback-input').type("test")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})
