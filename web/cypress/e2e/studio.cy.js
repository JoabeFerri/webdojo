describe('Studio', () => {
  it('Exemplo do Cypress Studio', () => {
    cy.visit('https://example.cypress.io')
    cy.get('div.container > p').should('be.visible');
    cy.get('div.container > p').should('have.text', 'This is an example app used to showcase Cypress.io End-to-End (E2E) testing. For a full reference of our documentation, go to docs.cypress.io\n      ');
  });

  it('Deve logar com sucesso', function() {
    cy.visit('http://localhost:3000')
    
    cy.get('#email').click();
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').click();
    cy.get('#password').type('katana123');
    cy.contains('button', 'Entrar').click();
    cy.get('[data-cy="user-name"]').should('have.text', 'Fernando Papito');
    
  });

  it('Kanban Test', function() {
    cy.visit('http://localhost:3000')
    
  });
})