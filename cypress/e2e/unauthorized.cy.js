describe('TC19 - Login olmadan dashboard açılmamalı', () => {

  it('Kullanıcı dashboarda erişememeli', () => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.visit('https://job-tracking-web-form.vercel.app/dashboard')

    cy.url().should('eq', 'https://job-tracking-web-form.vercel.app/')
  })

})