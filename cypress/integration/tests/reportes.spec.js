describe('Reportes', () => {
  beforeEach(() => {
    cy.viewport(1400, 850)
    cy.visit('http://gdp-portal.apps.csdqa.comcel.com.gt/')
    cy.get('input[placeholder="Usuario"]').clear().type('usractivator')
    cy.get('input[placeholder="Contraseña"]').clear().type('Aa123456!')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/apps')
    cy.contains('div[class="datos"] > p', 'Activation manager').click()
    cy.url().should('include', '/init')
    cy.contains('li[class="treeview"] > a > span', 'Reportería').click()
  })
  const fecha = new Date()
  const mes = fecha.getMonth().toString()
  const dia = (fecha.getDate() === 1) ? 28 : fecha.getDate() - 1

  it('Reporte de vendedores', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Reporte de vendedores').click()
    cy.url().should('include', '/reports')
    cy.wait(1000)
    cy.get('.filtro > button').click()
    cy.screenshot()
    cy.readFile('cypress/downloads/vendor_report.csv').should('exist')
  })

  it('Reporte de solicitudes', () => {
    cy.contains('ul[class="treeview-menu"] > li > a', 'Reporte de solicitudes').click()
    cy.url().should('include', '/requestreports')
    cy.wait(1000)
    // cy.get('[style="display:inline-block;"] > div[_ngcontent-c5=""] > .ng-untouched > .ngb-dp-months > .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week > [aria-label="Tuesday, September 28, 2021"] > .btn-light').click()
    cy.get('[style="display:inline-block;"] > div[_ngcontent-c5=""] > .ng-valid > .ngb-dp-header > ngb-datepicker-navigation > .ngb-dp-navigation-select > [aria-label="Select month"]').select(mes)
    cy.contains('div[class="ngb-dp-day"] > .btn-light', dia.toString()).click()
    cy.get('.filtro > button').click()
    cy.screenshot()
    cy.readFile('cypress/downloads/requestreport.csv').should('exist')
  })
})
