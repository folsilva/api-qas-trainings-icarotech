// Importar as classes dos endpoints e instância das classes
import { EndpointsApi } from "../../support/helpers/endpoints-envs";
const endpoint = new EndpointsApi;

import { CriarProduto } from "../../support/steps/api/desafio_001_criar_novo_produto_POST_";
const criar = new CriarProduto;

import { ListarProduto } from "../../support/steps/api/desafio_002_listar_todos_produtos_GET_";
const listar = new ListarProduto;

// Bloco de testes
describe('Validar criação e listagem de produto', () => {

    // 1º caso de testes

    it('001 - Criar novo produto', () => {
        // Criar um objeto de "Dados"
        var dados = {
            endpoint: endpoint.endpointProduto(),
            name: "Roteador TP Link",
            brand: "TP123",
            price: 120
        };

        // Criar um objeto de "Assert"
        var assert = {
            "name": "Roteador TP Link",
            "brand": "TP123",
            price: 120
        };

        // Chamar a função p/ criar produto
        criar.criarProduto(dados, assert)
    });

    // 2º caso de testes
    it('002 - Listar produto criado', () => {
        // Listar um objeto de "Dados"
        var dados = {
            teste : 1,
            endpoint: endpoint.endpointProduto(),
        };

        // Criar um objeto de "Assert"
        var assert = {
            id: 26,
            status: '200',
            name: "Roteador TP Link", 
    //        brand: "TP123",
     //       price: 120
        };

        // Chamar a função p/ listar produtos
        listar.listarProduto(dados, assert)
    });

    // 3º caso de testes
    it('003 - Listar produto existente da API', () => {

        // Criar um objeto de "Dados"
        var dados = {
            teste : 2,
            endpoint: endpoint.endpointProduto(),
        };

        // Criar um objeto de "Assert"
        var assert = {
            id: 10,
            name: "Galaxy Tab S7",
            brand: "Samsung",
            price: 4500
        };

        // Chamar a função p/ listar produtos
        listar.listarProduto(dados, assert);
    })
})