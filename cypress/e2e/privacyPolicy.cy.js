

   Cypress._.times(1, () => {
   it.only('testa a pagina da politica de privacidade de forma independente', () => {
   cy.visit('./src/privacy.html')
   cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
   cy.contains('p', 'Talking About Testing')

   })

  })

   