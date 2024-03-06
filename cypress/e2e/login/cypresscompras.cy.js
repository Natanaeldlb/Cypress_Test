/// <reference types="Cypress"/>

describe('Teste E2E de Validaçao de Produtos e Compras', () => {
    it('Deve validar produtos no carrinho', () => {
        cy.login_teste('standard_user','secret_sauce')
        
        // Adicionar os itens no carrinho de compras.
        cy.clicar_item('#item_4_title_link > .inventory_item_name')
        cy.add_card('.btn_primary')
        cy.clicar_card('.fa-layers-counter')

        // Validar os Produtos e Compras no WebSite
        cy.validar_item('#item_4_title_link > .inventory_item_name')
        cy.clique_checkout('.btn_action')

        // Preencher os Campos
        cy.preencher('Natanael de Lima','Batista','69044-370')
        cy.clique_final('.btn_primary', '.btn_action')
        cy.validar('.complete-header')
    })
})