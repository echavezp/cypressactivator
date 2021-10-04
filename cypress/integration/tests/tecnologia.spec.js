describe('Tecnologias', () => {
  beforeEach(() => {
    cy.viewport(1400, 850)
    cy.visit('http://gdp-portal.apps.csdqa.comcel.com.gt/')
    cy.get('input[placeholder="Usuario"]').clear().type('usractivator')
    cy.get('input[placeholder="Contraseña"]').clear().type('Aa123456!')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/apps')
    cy.contains('div[class="datos"] > p', 'Activation manager').click()
    cy.url().should('include', '/init')
    cy.contains('li[class="treeview"] > a > span', 'Configuración').click()
    cy.contains('ul[class="treeview-menu"] > li > a', 'Tecnologías').click()
    cy.url().should('include', '/technologies')
  })

  const nombre = 'PRB1'

  it('Crear', () => {
    cy.contains('.content-header > .btn', 'Agregar nuevo').click()
    cy.get(':nth-child(1) > #dateOfBirth').clear().type('5') // ID AS400
    cy.get(':nth-child(2) > #dateOfBirth').clear().type(nombre) // DESCRIPCION
    cy.get(':nth-child(3) > #dateOfBirth').clear().type('home_' + nombre) // CODIGO PROFILING
    cy.get(':nth-child(4) > #dateOfBirth').clear().type('5') // ID TIPO VENTA
    cy.get(':nth-child(5) > #dateOfBirth').clear().type('NPA') // TIPO VENTA
    cy.get(':nth-child(6) > #state').select('1') // TIENE CELDA
    cy.get(':nth-child(7) > #dateOfBirth').clear().type('TIGO') // OPERADOR
    cy.get(':nth-child(8) > #state').select('1') // Estado
    cy.screenshot()
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.contains('.snotifyToast__body', 'Registro guardado con éxito')
  })

  it('Editar', () => {
    cy.get('.filtro > .input-search').clear().type(nombre)
    cy.get('.filtro > .btn').click()
    cy.wait(1000)
    cy.get('.datatable-body-cell-label > :nth-child(1) > img').click()
    cy.get(':nth-child(7) > #dateOfBirth').clear().type('TIGOX') // OPERADOR
    cy.get(':nth-child(8) > #state').select('1') // Estado
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
    cy.contains('.snotifyToast__body', 'Registro desactivado con éxito')
  })
})
