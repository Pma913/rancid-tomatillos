beforeEach(() => {
  cy.visit("http://localhost:3000")
  cy.get(".card-display")
    .contains("h2", "Black Adam").click()
});

describe('Rancid Tomatillos Movie Page flows', () => {
  it('Should allow a user to navigate back to the home page', () => {
    cy.get(".home-btn").click()
    .get('[alt="Rancid tomatillos text"]')
    .should('be.visible')
  });
});