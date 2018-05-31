describe('App', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a title', () => {
    cy.title().should('be.equal', 'Ng Seed .NET SQL');
  });

  it('should have <nav>', () => {
    cy.get('sd-app sd-navbar nav');
  });

  it('should have correct nav text for Home', () => {
    cy.get('sd-app sd-navbar nav a:first-child').should('have.text', 'HOME');
  });

  it('should have correct nav text for Build', () => {
    cy.get('sd-app sd-navbar nav a:nth-child(2)').should('have.text', 'BUILD');
  });

  it('should have correct nav text for Deploy', () => {
    cy.get('sd-app sd-navbar nav a:nth-child(3)').should('have.text', 'DEPLOY');
  });

  it('should have correct nav text for About', () => {
    cy.get('sd-app sd-navbar nav a:nth-child(4)').should('have.text', 'ABOUT');
  });

});
