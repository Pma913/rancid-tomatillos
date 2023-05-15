beforeEach(() => {
  cy.visit("http://localhost:3000")
});

describe('Rancid Tomatillo homepage flows', () => {
  it('Should have visible title logo image', () => {
    cy.get('[alt="Rancid tomatillos text"]')
    .should('be.visible')
  });

  it('Should show a collections of movies on page load', () => {
    cy.get(".card-display").first().contains("h2", "Black Adam")
    cy.get(".card-display").first().contains("h2", "X")
  });

  it('Should be able to navigate to movie page', () => {
    cy.get(".card-display")
    .contains("h2", "Black Adam").click()
    .get(".movie-tag")
    .contains("The world needed a hero. It got Black Adam.")
  });
});