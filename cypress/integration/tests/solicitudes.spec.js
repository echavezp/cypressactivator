describe('Solicitudes', () => {
  beforeEach(() => {
    cy.viewport(1400, 850)
    cy.visit('http://gdp-portal.apps.csdqa.comcel.com.gt/')
    cy.get('input[placeholder="Usuario"]').clear().type('usractivator')
    cy.get('input[placeholder="Contraseña"]').clear().type('Aa123456!')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/apps')
    cy.contains('div[class="datos"] > p', 'Activation manager').click()
    cy.url().should('include', '/init')
    cy.contains('li[class="treeview"] > a > span', 'Solicitudes').click()
  })

  const recibida = '7472339889'
  const pendiente = '1500001'
  const finalizada = '33124536'
  const rechazada = '2358294550301'

  it('Recibidas - Documento', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Solicitudes recibidas').click()
    cy.url().should('include', '/request')
    cy.get('.filtro > .input-search').clear().type(recibida)
    cy.get('.filtro > .btn').click()
    cy.wait(100)
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > :nth-child(2) > img').click()
    cy.wait(100)
    cy.screenshot()
  })

  it('Recibidas - Consultar', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Solicitudes recibidas').click()
    cy.url().should('include', '/request')
    cy.get('.filtro > .input-search').clear().type(recibida)
    cy.get('.filtro > .btn').click()
    cy.wait(10)
    cy.screenshot()
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > :nth-child(1) > img').click()
    cy.url().should('include', '/request-detail')
    cy.screenshot()
  })

  it('Pendientes - Documento', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Solicitudes pendientes').click()
    cy.url().should('include', '/request/pendientes')
    cy.get('.filtro > .input-search').clear().type(pendiente)
    cy.get('.filtro > .btn').click()
    cy.wait(100)
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > :nth-child(2) > img').click()
    cy.wait(100)
    cy.screenshot()
  })

  it('Pendientes - Consultar', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Solicitudes pendientes').click()
    cy.url().should('include', '/request/pendientes')
    cy.get('.filtro > .input-search').clear().type(pendiente)
    cy.get('.filtro > .btn').click()
    cy.wait(100)
    cy.screenshot()
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > :nth-child(1) > img').click()
    cy.wait(100)
    cy.screenshot()
  })

  it('finalizadas - Documento', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Solicitudes finalizadas').click()
    cy.url().should('include', '/request/finalizadas')
    cy.get('.filtro > .input-search').clear().type(finalizada)
    cy.get('.filtro > .btn').click()
    cy.wait(100)
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > :nth-child(2) > img').click()
    cy.wait(100)
    cy.screenshot()
  })

  it('finalizadas - Consultar', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Solicitudes finalizadas').click()
    cy.url().should('include', '/request/finalizadas')
    cy.get('.filtro > .input-search').clear().type(finalizada)
    cy.get('.filtro > .btn').click()
    cy.wait(100)
    cy.screenshot()
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > :nth-child(1) > img').click()
    cy.wait(100)
    cy.screenshot()
  })

  it('rechazadas - Documento', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Solicitudes rechazadas').click()
    cy.url().should('include', '/request/rechazadas')
    cy.get('.filtro > .input-search').clear().type(rechazada)
    cy.get('.filtro > .btn').click()
    cy.wait(100)
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > :nth-child(2) > img').click()
    cy.wait(100)
    cy.screenshot()
  })

  it('rechazadas - Consultar', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Solicitudes rechazadas').click()
    cy.url().should('include', '/request/rechazadas')
    cy.get('.filtro > .input-search').clear().type(rechazada)
    cy.get('.filtro > .btn').click()
    cy.wait(100)
    cy.screenshot()
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(8) > .datatable-body-cell-label > :nth-child(1) > img').click()
    cy.wait(100)
    cy.screenshot()
  })
})
