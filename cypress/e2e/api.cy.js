describe.only('faz uma requisição HTTP', () => {
  it('busca usuários corretamente', () => {
    cy.request({
      method: 'GET',
      url: 'https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.statusText).to.include('OK');
      expect(response.body).to.include('CAC TAT');
    })
  })
})