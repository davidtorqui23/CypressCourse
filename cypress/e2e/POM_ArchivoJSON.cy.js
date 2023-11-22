import POM from "../support/page_object_model"

/// <reference types="Cypress" />

// Para archivos de Excel se pasan a Json y listo

describe ("Empezando con Page Object Model", () => {

    // Estamos instanciando la clase para utilizarla
    const pom = new POM()

    // Realizar Before
    before(() => {

        // Se coloca todos los datos del Json y se crea el constructor
        cy.fixture("datos").then(function(data){
            globalThis.data = data
        })
    })

    //Esta es una funcion Before
    pom.iniciarURL()

    it("Ejemplo de Page Object Model con Datos personales desde el Json", () => {

        pom.seleccionarPagina(data.seccion_1)
        cy.get('#wsf-1-field-21').as('nombre').should('be.visible').type(data.nombre)
        cy.get('#wsf-1-field-22').as('apellido').should('be.visible').type(data.apellido)
        cy.get('#wsf-1-field-23').as('email').should('be.visible').type(data.correo)
        cy.get('#wsf-1-field-24').as('phone').should('be.visible').type(data.celular)
        cy.get('#wsf-1-field-28').as('address').should('be.visible').type(data.direccion)
        cy.get('#wsf-1-field-27').click()
        pom.validarAlerta(data.validacion)

        cy.wait(2000)
    })

    // Se toman Screenshot manuales con el comanto cy.screenshot()
    // Para tomar videos se activa la funcion en config y se coloca true

    // Para ambos casos se necesita correr los casos desde el Run y no desde el explorador


})//Cierre de describe