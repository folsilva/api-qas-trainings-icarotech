export class ListarProduto {

    listarProduto(dados, assert) {

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

            if (dados.teste === 1) {
            const array_ = 25
   //         expect(res.body[array_]).to.have.property('id', assert.id);
            expect(res.body[array_]).to.have.property('name', assert.name);
   //         expect(res.body[array_]).to.have.property('brand', assert.brand);
          } else if (dados.teste === 2) {
            const array_1 = 9
          //  expect(res.body[array_1]).to.have.property('id', assert.id); 
            expect(res.body[array_1]).to.have.property('nome', assert.name); 
     //       expect(res.body[array_1]).to.have.property('brand', assert.brand);
          }

          
/*
            expect(res.body[array_]).to.have.property('id', assert.id);
            expect(res.body[array_]).to.have.property('name', assert.name);
            expect(res.body[array_]).to.have.property('brand', assert.brand);
            expect(res.body[array_]).to.have.property('price', assert.price);
*/
        });
    }
}