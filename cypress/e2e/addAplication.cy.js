import ApplicationPage from '../pages/ApplicationPage'

describe('Başvuru Ekleme Testleri', () => {

  beforeEach(() => {
    cy.login('test@gmail.com', '1234test')
    ApplicationPage.visit()
  })

  it('TC05 - Geçerli bilgilerle başvuru eklenebilmeli', () => {
    ApplicationPage.fillCompanyName('Cypress Test Şirketi')
    ApplicationPage.fillPosition('QA Engineer')
    ApplicationPage.selectStatus('Süreçte')
    ApplicationPage.submit()
    cy.url().should('not.include', '/add')
  })

  it('TC06 - Zorunlu alanlar boş bırakılınca form gönderilememeli', () => {
    ApplicationPage.submit()
    cy.url().should('include', '/add')
  })

  it('TC17 - Arama filtresine yazılınca input güncellenmeli', () => {
    cy.get('input[name="companyName"]').type('Test')
    cy.get('input[name="companyName"]').should('have.value', 'Test')
  })

  it('TC18 - İptal butonuna basınca /add sayfasından çıkılmalı', () => {
    cy.contains('button', 'İptal').click()
    cy.url().should('not.include', '/add')
  })

})