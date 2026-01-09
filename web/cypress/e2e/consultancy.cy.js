describe('Formulário de Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('input[placeholder="Digite seu nome completo"]').type('Joabe Ferri')
        cy.get('input[placeholder="Digite seu email"]').type('papito@teste.com.br')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11999999999')
            .should('have.value', '(11) 99999-9999')
            
        // cy.get('#consultancyType').select('inCompany')
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('inCompany')

    })
})
