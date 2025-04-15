export class ListarUsuario {

    listarUsuario(dados, assert) {
     
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `${Cypress.config("baseUrl")}${dados.endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            }    
        }).as('response')

        cy.get('@response').then((res) => {

            console.log(res.body);

            expect(res.status).to.eq(200);
            
            //expect(res.body).to.have.property('email', assert.email);
            //expect(res.body).to.have.property('id', assert.id);
            //expect(res.body).to.have.property('name', assert.name);
            //expect(res.body).to.have.property('last_name', assert.last_name);

        });

    }
}

