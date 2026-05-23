describe('Başvurular Listesi Testleri', () => {

  beforeEach(() => {
    cy.login('test@gmail.com', '1234test')
    cy.visit('/applications')
  })

  it('TC11 - Başvurular sayfası yüklenmeli', () => {
    cy.url().should('include', '/applications')
    cy.contains('Tüm Başvurular').should('be.visible')
  })

  it('TC12 - Başvuru listesi en az 1 kayıt içermeli', () => {
    cy.get('button[title="Sil"]').should('have.length.greaterThan', 0)
  })

  it('TC13 - Firma adına göre arama çalışmalı', () => {
    cy.get('input[aria-label="Başvurularda firma, pozisyon, departman ile arama yap"]')
      .type('apple')
    cy.contains('apple').should('be.visible')
  })

  it('TC14 - Duruma göre filtreleme çalışmalı', () => {
    cy.get('select[aria-label="Duruma göre filtrele"]')
      .select('Süreçte')
    cy.get('button[title="Sil"]').should('have.length.greaterThan', 0)
  })

  it('TC15 - Detay butonuna tıklanabilmeli', () => {

  cy.contains('button', 'Detay')
    .first()
    .should('be.visible')
    .click()

})

  it('TC16 - Sayfalama ikinci sayfaya geçebilmeli', () => {
    cy.contains('button', '2').click()
    cy.contains('button', '2').should('be.visible')
  })

})