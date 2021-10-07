describe('Vendedores y territorios', () => {
  beforeEach(() => {
    cy.viewport(1400, 850)
    cy.visit('http://gdp-portal.apps.csdqa.comcel.com.gt/')
    cy.get('input[placeholder="Usuario"]').clear().type('usractivator')
    cy.get('input[placeholder="Contraseña"]').clear().type('Aa123456!')
    cy.get('button[type="submit"]').click()
    cy.wait(100)
    cy.url().should('include', '/apps')
    cy.contains('div[class="datos"] > p', 'Activation manager').click()
    cy.url().should('include', '/init')
    cy.wait(1500)
    cy.get('span#username')
      .then(($item) => {
        if ($item.text().toString() === 'undefined') {
          cy.reload(true).should(() => {
            cy.wait(900)
          })
        }
      })

    cy.contains('li[class="treeview"] > a > span', 'Vendedores y territorios').click()
    cy.contains('ul[class="treeview-menu"] > li > a', 'Vendedores y territorios').click()
    cy.url().should('include', '/salespersonprofile')
  })

  const vendedor = 'AECASTILLOA'
  const territorio = 'VENTAS ASTRO'
  let cont = 0
  let i = 0

  it('Crear', () => {
    cy.get('select.form-select').first().select(vendedor, { force: true })
    cy.get('select.form-select').last().select(territorio, { force: true })
    cy.contains('button.btn', 'Asociar').click()
    cy.screenshot()
    cy.contains('.snotifyToast__body', 'Asociación realizada con éxito')
    cy.wait(500)
    cy.get('.pull-right > .btn').click()
  })

  it('Eliminar', () => {
    cy.get('div[class="datatable-body-cell-label"] > span').each(($li, index, $lis) => {
      if (index === 0) { cont = cont + 1 } else {
        if (index % 3 === 0) cont++
      }

      if (i === 2) {
        cy.wrap($li).children().click()
        cy.screenshot()
        cy.get(':nth-child(2) > .swal-button').click()
        cy.contains('.snotifyToast__body', 'Registro eliminado con éxito')
        cy.wait(500)
        cy.get('.pull-right > .btn').click()
        i++
      }
      if (i === 1 && $li.text() === territorio) i = 2
      if ($li.text() === vendedor) i = 1
    })
  })
})
