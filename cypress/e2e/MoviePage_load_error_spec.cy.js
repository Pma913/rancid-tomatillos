describe('Error handling for individual movie page', () => {
  it('Should display an error message when failed to fetch movie page content', () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495", (req) => {
      req.destroy()
    })
    cy.visit("http://localhost:3000/")
      .get(".card-display")
      .contains("h2", "The Woman King").click()
      .get(".error-message")
      .contains("Failed to fetch")
  })
})
