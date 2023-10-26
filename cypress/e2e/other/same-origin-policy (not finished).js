/// <reference types="Cypress" />
/// <reference types="@Cypress/xpath" />

describe("Cypress web security", () => {
    //positive path
    it("Validate visiting two different domains", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.visit("https://automationteststore.com/");
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    });
})