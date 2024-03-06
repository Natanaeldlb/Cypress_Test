/// <reference types="Cypress"/>


// metodo que irá realizar o login no WebSite saucedemo
Cypress.Commands.add('login_teste', (user, password) => {
    cy.visit("https://www.saucedemo.com/v1/")
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
})

// metodo que irá clicar no item escollhido
Cypress.Commands.add('clicar_item', (item_name) =>{
    cy.get(item_name).click()
    
})

// metodo que irá adicionar o item no carrinho
Cypress.Commands.add('add_card', (card_item)=>{
    cy.get(card_item).click()
})

// metodo que irá clicar no carrinho e verificar o produto adicionado
Cypress.Commands.add('clicar_card', (card)=>{
    cy.get(card).click()
})

// metodo de validar item no carrinho
Cypress.Commands.add('validar_item', (card_cheio)=>{
    cy.get(card_cheio).should('have.text','Sauce Labs Backpack')
})

// metodo de finalizar a compra e ir pro checkout
Cypress.Commands.add('clique_checkout', (checkout)=>{
    cy.get(checkout).click()
})

// metodo de preencher os campos
Cypress.Commands.add('preencher', (campos1,campos2,campos3)=>{
    cy.get('[data-test="firstName"]').type(campos1)
    cy.get('[data-test="lastName"]').type(campos2)
    cy.get('[data-test="postalCode"]').type(campos3)
})

// metodo pra finalizar compra
Cypress.Commands.add('clique_final', (final, finall)=>{
    cy.get(final).click()
    cy.get(finall).click()
})

// Vaidar compra
Cypress.Commands.add('validar', (validar_text)=>{
    cy.get(validar_text).should('have.text','THANK YOU FOR YOUR ORDER')
})




