/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data; 
            globalThis.data = data;  //this logic if above doesn't work
        })
    })
    //positive path
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("test")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    //negative path
    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('textarea.feedback-input').type("test")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})
