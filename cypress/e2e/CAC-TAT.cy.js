describe('Central de Atendimento ao cliente TAT', () => {
  beforeEach(() => { 
 cy.visit('./src/index.html');
  });

  it('verifica o título da aplicação', () => {
  cy.title().should('not.be.equal', 'Centrall de Atendimento ao Cliente TAT')
  })

 it('Preenche os campos obrigatórios e envia o formulário', () => {
  const longText = Cypress._.repeat("N-A-U-T-I-C-O",10)
  cy.get("#firstName").type("Rodrigo")
  cy.get("#lastName").type("Santos")
  cy.get("#email").type("rodrigobolinha@gmail.com")
  //cy.get("#phone").type("81999887766") 
 // cy.get("#support-type > label:nth-child(3) > input[type=radio]").click()
 // cy.get("#phone-checkbox").click()
  cy.get("#open-text-area").type(longText,{delay:0})
  cy.get("#white-background > form > button").click()
   

  cy.get(".success").should('be.visible')
 })

 it('exibe mensagem de erro ao submeter com um email com formatação inválida', () => {
  cy.get("#firstName").type("Rodrigo")
  cy.get("#lastName").type("Santos")
  cy.get("#email").type("rodrigobo123")
 cy.get("#open-text-area").type("Valeu carai")
 cy.get("#white-background > form > button").click()

  
 cy.get(".error").should('be.visible')
})

it('valida campo telefone continua vazio quando preenchido com um valor não-numerico', () => {

  cy.get("#phone")
  .type("abcd") 
  .should('have.value', "")
})

it('exibe mensagem de erro quando o telefone se torna obrigatorio mas não é preenchido antes do envio do formulário', () => {
  cy.get("#firstName").type("Rodrigo")
  cy.get("#lastName").type("Santos")
  cy.get("#email").type("rodrigobolinha@gmail.com")
  cy.get("#phone-checkbox").check()
  cy.get("#open-text-area").type("KASINOOOO")
  cy.get("#white-background > form > button").click()

  cy.get(".error").should('be.visible')
 
})

it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
  cy.get("#firstName").type("Rodrigo")
  .should('have.value', "Rodrigo")
  .clear()
   .should('have.value', "")

  cy.get("#lastName").type("Santos")
  .should('have.value', "Santos")
   .clear()
   .should('have.value', "")

  cy.get("#email").type("rodrigo@gmail.com")
  .should('have.value', "rodrigo@gmail.com")
   .clear()
   .should('have.value', "")

  cy.get("#phone") .type("11998887766") 
  .should('have.value', "11998887766")
   .clear()
   .should('have.value', "")
})

it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
  cy.get("#white-background > form > button").click()
  cy.get(".error").should('be.visible')
 
})

it('envia o formuário com sucesso usando um comando customizado', () => {
  cy.get("#white-background > form > button").click()
  cy.get(".error").should('be.visible')
 
})

  it('envia o formulario com suceso usando um comando customizado', () => {
    const data = {
      firstName: 'Charlinho',
      lastName: 'Batata',
      email: 'charlinho@gmail.com',
      text: 'Teste.'
    }
    
    
    cy.fillMandatoryFieldsAndSubmit(data)
     cy.get('select').select('Blog')
   
    cy.get('.success').should('be.visible')
    

  })
   it('seleciona um produto (YouTube) por seu texto', () => {
     cy.get("#product")
     cy.get('select').select('YouTube')
     .should('have.value', 'youtube')
   })
    it('eleciona um produto (Mentoria) por seu valor (value)', () => {
     cy.get("#product")
     cy.get('select').select('mentoria')
     .should('have.value', 'mentoria')
   })
    it('seleciona um produto (blog) por seu índice', () => {
    cy.get("#product")
     cy.get('select').select(1)
     .should('have.value', 'blog')
   })
    it('marca o tipo de atendimento "Feedback', () => {
    cy.get('input[type="radio"]').check("feedback")
      .should('be.checked')
   })
it('marca o tipo de atendimento', () => {


// JEITO FACIL
//  cy.get('input[type="radio"]').check("ajuda")
//     .should('be.checked')
//  cy.get('input[type="radio"]').check("elogio")
 //    .should('be.checked')
//    cy.get('input[type="radio"]').check("feedback")
//     .should('be.checked')

//JEITO CHIQUE
  cy.get('input[type="radio"]')
  .each(marcageral => {
    cy.wrap(marcageral)
    .check()
    .should('be.checked')
  })

   })

   it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]').check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
   })

    it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json')
    .should((input) => {
      expect(input[0].files[0].name).to.equal('example.json')
   })
   

    }) 
    it('seleciona um arquivo simulando drag-and-drop', () => {
    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json',{action:'drag-drop'})
    .should((input) => {
      expect(input[0].files[0].name).to.equal('example.json')
   })

  })

   it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
    .selectFile('@sampleFile')
    .should((input) => {
      expect(input[0].files[0].name).to.equal('example.json')

      
   })
   })
   //<a href="privacy.html" target="_blank">Política de Privacidade</a>
   
   it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
   })

   it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
     cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

      cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    
   })


   



})



