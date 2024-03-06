/// <reference types="Cypress"/>


describe('Teste Funcional de Login', () => {
    it('Deve realizar o Login com sucesso!', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.product_label').should('contain','Products')
    })
})

describe('Teste Funcional de Login', () => {
    it('Login com user incorreto', () => {
        cy.login_teste('standard_user1','secret_sauce')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    })
})


describe('Teste Funcional de Login', () => {
    it('Login com senha incorreta', () => {
        cy.login_teste('standard_user','secret_sauce1')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    })
})