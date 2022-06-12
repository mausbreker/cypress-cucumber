/// <reference types="cypress" />

describe("Google Search", () => {
    beforeEach(() => {
        cy.visit("https://www.google.com")
    })

    it("searches for 'remarkablemark'", () => {
        cy.get("#L2AGLb").click()
        cy.get("input[name='q']").type("remarkablemark")
    })
})