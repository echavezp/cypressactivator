describe('Vendedores', () => {
  beforeEach(() => {
    cy.viewport(1400, 850)
    cy.visit('http://gdp-portal.apps.csdqa.comcel.com.gt/')
    cy.get('input[placeholder="Usuario"]').clear().type('usractivator')
    cy.get('input[placeholder="Contraseña"]').clear().type('Aa123456!')
    cy.get('button[type="submit"]').click().wait(100)
    cy.url().should('include', '/apps')
    cy.contains('div[class="datos"] > p', 'Activation manager').click()
    cy.url().should('include', '/init')
    cy.wait(200)
    cy.get('li[class="treeview"]').should('not.exist')
      .then(() => {
        cy.reload(true)
      })

    cy.contains('li[class="treeview"] > a > span', 'Vendedores y territorios').click()
    cy.contains('ul[class="treeview-menu"] > li > a', 'Vendedores').click()
    cy.url().should('include', '/salesperson')
  })

  const nombre = 'PRUEBA4'

  it('Crear', () => {
    cy.contains('.content-header > .btn', 'Agregar nuevo').click()
    cy.get(':nth-child(1) > #dateOfBirth').clear().type(nombre) // Vendedor
    cy.get(':nth-child(2) > #dateOfBirth').clear().type('Vendedor de prueba') // Nombres
    cy.get(':nth-child(3) > #dateOfBirth').clear().type('65') // Codigo
    cy.get(':nth-child(4) > #dateOfBirth').clear().type('echavezp@tigo.com.gt') // Email
    cy.get(':nth-child(5) > #dateOfBirth').clear().type('40008245') // Telefono
    cy.get(':nth-child(6) > #dateOfBirth').clear().type('100') // Canal
    cy.get(':nth-child(7) > #dateOfBirth').clear().type('10') // Codigo distribuidor
    cy.get(':nth-child(8) > #state').select('1') // GDP
    cy.get(':nth-child(9) > #state').select('1') // Estado
    cy.screenshot()
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    // cy.contains('.snotifyToast__body', 'Registro guardado con éxito')
    cy.wait(500)
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    cy.get('.pull-right > .btn').click()
  })

  it('Crear - Valida Telefono', () => {
    cy.contains('.content-header > .btn', 'Agregar nuevo').click()
    cy.get(':nth-child(1) > #dateOfBirth').clear().type(nombre) // Vendedor
    cy.get(':nth-child(2) > #dateOfBirth').clear().type('Vendedor de prueba') // Nombres
    cy.get(':nth-child(3) > #dateOfBirth').clear().type('65') // Codigo
    cy.get(':nth-child(4) > #dateOfBirth').clear().type('echavezp@tigo.com.gt') // Email
    cy.get(':nth-child(5) > #dateOfBirth').clear().type('4000824') // Telefono
    cy.get(':nth-child(6) > #dateOfBirth').clear().type('100') // Canal
    cy.get(':nth-child(7) > #dateOfBirth').clear().type('10') // Codigo distribuidor
    cy.get(':nth-child(8) > #state').select('1') // GDP
    cy.get(':nth-child(9) > #state').select('1') // Estado
    cy.screenshot()
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.contains('.snotifyToast__body', "El campo 'Teléfono' no tiene el formato correcto")
    cy.wait(500)
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    cy.get('.pull-right > .btn').click()
  })

  it('Crear - Valida Email', () => {
    cy.contains('.content-header > .btn', 'Agregar nuevo').click()
    cy.get(':nth-child(1) > #dateOfBirth').clear().type(nombre) // Vendedor
    cy.get(':nth-child(2) > #dateOfBirth').clear().type('Vendedor de prueba') // Nombres
    cy.get(':nth-child(3) > #dateOfBirth').clear().type('65') // Codigo
    cy.get(':nth-child(4) > #dateOfBirth').clear().type('echavezp@tigo') // Email
    cy.get(':nth-child(5) > #dateOfBirth').clear().type('40008245') // Telefono
    cy.get(':nth-child(6) > #dateOfBirth').clear().type('100') // Canal
    cy.get(':nth-child(7) > #dateOfBirth').clear().type('10') // Codigo distribuidor
    cy.get(':nth-child(8) > #state').select('1') // GDP
    cy.get(':nth-child(9) > #state').select('1') // Estado
    cy.screenshot()
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.contains('.snotifyToast__body', "El campo 'Email' no tiene el formato correcto")
    cy.wait(500)
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    cy.get('.pull-right > .btn').click()
  })

  it('Editar', () => {
    cy.get('.filtro > .input-search').clear().type(nombre)
    cy.get('.filtro > .btn').click()
    cy.wait(1000)
    cy.get('.datatable-body-cell-label > :nth-child(1) > img').click()
    cy.get(':nth-child(2) > #dateOfBirth').clear().type('Vendedor de pruebas') // Nombres
    cy.get(':nth-child(9) > #state').select('1') // Estado
    cy.screenshot()
    cy.get('.d-block > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.contains('.snotifyToast__body', 'Registro guardado con éxito')
    cy.wait(500)
    cy.get('.pull-right > .btn').click()
  })

  it('Eliminar', () => {
    cy.get('.filtro > .input-search').clear().type(nombre)
    cy.get('.filtro > .btn').click()
    cy.wait(1000)
    cy.get('.datatable-body-cell-label > :nth-child(2) > img').click()
    cy.screenshot()
    cy.get(':nth-child(2) > .swal-button').click()
    cy.contains('.snotifyToast__body', 'Registro desactivado con éxito')
    cy.wait(500)
    cy.get('.pull-right > .btn').click()
  })
})
