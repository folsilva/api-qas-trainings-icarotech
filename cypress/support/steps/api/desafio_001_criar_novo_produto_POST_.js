export class CriarProduto {

    criarProduto(dados, assert) {

        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: `${Cypress.config("baseUrl")}${dados.endpoint}`,
            headers: {
                'Content-Type': 'application/json',
            }, body: {
                name: dados.name,
                brand: dados.brand,
                price: dados.price,
            }
        }).as('response')

        cy.get('@response').then((res) => {

            console.log(res.body);

            expect(res.status).to.be.oneOf([200, 201]);
            expect(res.body).to.have.property('name', assert.name);
            expect(res.body).to.have.property('brand', assert.brand);
            expect(res.body).to.have.property('price', assert.price);
        });
    }
}