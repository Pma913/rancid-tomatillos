describe('Error handling for home page', () => {
  it('Should display an error message when failed to fetch main page content', () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", (req) => {
      req.destroy()
    })
    cy.visit("http://localhost:3000/")
      .get(".error-message")
      .contains("Failed to fetch")
  })
})
