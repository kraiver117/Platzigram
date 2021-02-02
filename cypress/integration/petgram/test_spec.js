/* global describe, it, expect, cy */

describe('Petgram', function () {
    it('Test if the app works', function() {
        cy.visit('/')
    })

    it('Navigate among categories and see the photos', function () {
        cy.visit('/pet/1')
        cy.get('article')
    })

    it('Navigate using navBar to the route Home', function () {
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('eq', Cypress.config().baseUrl)
    })

    it('Users not registered see the view with forms to signIn or SignUp', function () {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})