import LoginPage from '../pages/LoginPage'

describe('Login Testleri', () => {

  it('TC01 - Geçerli bilgilerle giriş yapılabilmeli', () => {
    LoginPage.login('test@gmail.com', '1234test')
    cy.url().should('not.include', '/login')
  })

  it('TC02 - Yanlış şifreyle giriş reddedilmeli', () => {
    LoginPage.login('test@gmail.com', 'yanliksifre')
    cy.url().should('include', '/login')
  })

  it('TC03 - Boş alanlarla submit butonu disabled olmalı', () => {
    LoginPage.visit()
    cy.get('button[type="submit"]').should('be.disabled')
  })

 it('TC04 - Geçersiz email formatında giriş yapılamamalı', () => {

  cy.visit('https://job-tracking-web-form.vercel.app/login')

  cy.get('input[type="email"]')
    .clear()
    .type('gecersizemail')

  cy.get('input[type="password"]')
    .clear()
    .type('1234test')

  cy.get('input[type="email"]').then(($input) => {
    expect($input[0].checkValidity()).to.be.false
  })

})

})