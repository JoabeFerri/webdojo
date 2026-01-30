describe("Formulário de Consultoria", () => {
  it("Deve solicitar consultoria individual", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");

    cy.goTo("Formulários", "Consultoria");

    cy.get('input[placeholder="Digite seu nome completo"]').type("Joabe Ferri");
    cy.get('input[placeholder="Digite seu email"]').type("papito@teste.com.br");
    cy.get('input[placeholder="(00) 00000-0000"]')
      .type("11999999999")
      .should("have.value", "(11) 99999-9999");

    // cy.get('#consultancyType').select('inCompany')
    cy.contains("label", "Tipo de Consultoria")
      .parent()
      .find("select")
      .select("inCompany");

    cy.contains("label", "Pessoa Física")
      .find("input[type=radio]")
      .check()
      .should("be.checked");

    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .should("be.not.checked");

    // cy.contains('label', 'Pessoa Jurídica')
    //     .parent()
    //     .find('input')
    //     .click()

    cy.contains("label", "CPF")
      .parent()
      .find("input")
      .type("24468787090")
      .should("have.value", "244.687.870-90");

    const discoveryChannels = [
      "Instagram",
      "LinkedIn",
      "Udemy",
      "YouTube",
      "Indicação de Amigo",
    ];

    discoveryChannels.forEach((channel) => {
      cy.contains("label", channel)
        .find("input[type=checkbox]")
        .check()
        .should("be.checked");
    });
  
    cy.get('input[type="file"]')
      .selectFile('./cypress/fixtures/document.pdf', {force: true})

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
      .type('Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit.')
    
    const techs = [
      'Cypress',
      'Vuejs',
      'Nuxt',
      'NodeJs',
      'Python'
    ]

    techs.forEach((tech) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(tech).type('{enter}')

      cy.contains('label', 'Tecnologias')
        .parent()
        .contains('span', tech)
        .should("be.visible");
    })

    cy.contains('label', 'termos de uso')
      .find('input')
      .check()

    cy.contains('button', 'Enviar formulário')
      .click()

    cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    .should('be.visible')

  });

  it("Deve verificar os campos obrigatorios", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");

    cy.goTo("Formulários", "Consultoria");

    cy.contains('button', 'Enviar formulário')
      .click()
  })
});
