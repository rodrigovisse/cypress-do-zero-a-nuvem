<<<<<<< HEAD
 it('testa a pagina da politica de privacidade de forma independente', () => {
=======
 it.only('testa a pagina da politica de privacidade de forma independente', () => {
>>>>>>> 5aefa28 (Configure the ci workflow)
   cy.visit('./src/privacy.html')
   cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
   cy.contains('p', 'Talking About Testing')

   })