describe('Territorios', () => {
  beforeEach(() => {
    cy.viewport(1400, 850)
    cy.visit('http://gdp-portal.apps.csdqa.comcel.com.gt/')
    cy.get('input[placeholder="Usuario"]').clear().type('usractivator')
    cy.get('input[placeholder="Contraseña"]').clear().type('Aa123456!')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/apps')
    cy.contains('div[class="datos"] > p', 'Activation manager').click()
    cy.url().should('include', '/init')
    cy.contains('li[class="treeview"] > a > span', 'Vendedores y territorios').click()
    cy.contains('ul[class="treeview-menu"] > li > a', 'Territorios').click()
    cy.url().should('include', '/territories')
  })

  const nombre = 'PRBTERRITO'

  it('Crear', () => {
    cy.contains('.content-header > .btn', 'Agregar nuevo').click()
    cy.get(':nth-child(1) > #dateOfBirth').clear().type(nombre) // CODIGO
    cy.get(':nth-child(2) > #dateOfBirth').clear().type('Territorio de prueba') // DESCRIPCION
    cy.get(':nth-child(3) > #dateOfBirth').clear().type('65') // Codigo LEGADO
    cy.screenshot()
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.contains('.snotifyToast__body', 'Registro guardado con éxito')
  })

  it('Editar', () => {
    cy.get('.filtro > .input-search').clear().type(nombre)
    cy.get('.filtro > .btn').click()
    cy.wait(1000)
    cy.get('.datatable-body-cell-label > :nth-child(1) > img').click()
    cy.get(':nth-child(2) > #dateOfBirth').clear().type('Territorio de pruebas') // DESCRIPCION
    cy.screenshot()
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.contains('.snotifyToast__body', 'Registro guardado con éxito')
  })

  it('Eliminar', () => {
    cy.get('.filtro > .input-search').clear().type(nombre)
    cy.get('.filtro > .btn').click()
    cy.wait(1000)
    cy.get('.datatable-body-cell-label > :nth-child(2) > img').click()
    cy.screenshot()
    cy.get(':nth-child(2) > .swal-button').click()
    cy.contains('.snotifyToast__body', 'Registro eliminado con éxito')
  })
})