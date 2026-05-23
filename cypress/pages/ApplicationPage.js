class ApplicationPage {
  visit() {
    cy.visit('https://job-tracking-web-form.vercel.app/add')
  }

  fillCompanyName(name) {
    cy.get('input[name="companyName"]').clear().type(name)
  }

  fillPosition(position) {
    cy.get('input[name="position"]').clear().type(position)
  }

  selectStatus(status) {
    cy.get('select[name="status"]').select(status)
  }

  submit() {
    cy.get('button[type="submit"]').click()
  }
}

export default new ApplicationPage()