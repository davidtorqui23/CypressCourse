class POM {

    iniciarURL(){

        beforeEach(() => {
            cy.visit("https://testingqarvn.com.es/")
        })

    }

    seleccionarPagina(nombrePagina){

        // Mover el mouse por encima de un elemento
        cy.contains('Prácticas QA').trigger('mouseover')

        // Ir al elemento
        cy.contains(nombrePagina).click()
    }

    diligenciarDatos(nombre, apellido, email, telefono, direccion){

        // Diligenciar datos
        cy.get('#wsf-1-field-21').as('nombre').should('be.visible').type(nombre)
        cy.get('#wsf-1-field-22').as('apellido').should('be.visible').type(apellido)
        cy.get('#wsf-1-field-23').as('email').should('be.visible').type(email)
        cy.get('#wsf-1-field-24').as('phone').should('be.visible').type(telefono)
        cy.get('#wsf-1-field-28').as('address').should('be.visible').type(direccion)

        // Dar click
        cy.get('#wsf-1-field-27').click()

    }

    validarAlerta(mensaje){
        cy.get('.wsf-alert').should('have.text', mensaje)
    }

    seleccionarCheckBox(opcion){
        cy.get("[@type='checkbox']").contains(opcion).click()
    }


}

export default POM;