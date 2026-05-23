describe('Dashboard Testleri', () => {

  beforeEach(() => {
    cy.login('test@gmail.com', '1234test')
    cy.visit('/dashboard')
  })

  it('TC07 - Dashboard giriş sonrası yüklenmeli', () => {
    cy.url().should('include', '/dashboard')
  })

  it('TC08 - Navigasyon menüsü görünmeli', () => {
    cy.get('nav').should('be.visible')
    cy.get('a[aria-label="Anasayfa"]').should('exist')
    cy.get('a[aria-label="Ekle"]').should('exist')
    cy.get('a[aria-label="Başvurular"]').should('exist')
  })

  it('TC09 - Ekle butonuna tıklanınca /add sayfasına gitmeli', () => {
    cy.get('a[aria-label="Ekle"]').click()
    cy.url().should('include', '/add')
  })

  it('TC10 - Logout butonu tıklanınca ana sayfaya yönlenmeli', () => {

  cy.get('button[aria-label="Çıkış Yap"]')
    .should('be.visible')
    .click()

  cy.url().should('eq', 'https://job-tracking-web-form.vercel.app/')

})

})