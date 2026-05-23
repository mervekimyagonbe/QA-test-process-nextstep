class LoginPage {
  visit() {
    cy.visit('https://job-tracking-web-form.vercel.app/login')
  }

  typeEmail(email) {
    cy.get('input[type="email"]').clear().type(email)
  }

  typePassword(password) {
    cy.get('input[type="password"]').clear().type(password)
  }

  submit() {
    cy.get('button[type="submit"]').click()
  }

  login(email, password) {
    this.visit()
    this.typeEmail(email)
    this.typePassword(password)
    this.submit()
  }
}

export default new LoginPage()