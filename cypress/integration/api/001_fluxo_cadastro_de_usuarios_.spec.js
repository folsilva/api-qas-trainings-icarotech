// Importar as classes dos endpoints e instância das classes
import { EndpointsApi } from "../../support/helpers/endpoints-envs";
const endpoint = new EndpointsApi;

import { CriarUsuario } from "../../support/steps/api/001_criar_novo_usuario_POST_";
const criar = new CriarUsuario;

import { ListarUsuario } from "../../support/steps/api/002_listar_todos_usuarios_GET_";
const listar = new ListarUsuario

// Bloco de testes
describe('Validar criação de usuário e listagem', () => {

    // 1º caso de testes

    it('001 - Criar novo usuario', () => {

        // Criar um objeto de "Dados"
        var dados = {
            endpoint: endpoint.endpointUsuario(),
            name: 'Fernando',
            last_name: 'Silva',
            email: 'fernando@teste.com'
        }

        // Criar um objeto de "Assert"
        var assert = {
            id: 97,
            name: 'Fernando',
            last_name: 'Silva',
            email: 'fernando@teste.com'
        }

        // Chamar a função p/ criar usuário
        criar.criarUsuario(dados, assert)
    })

    // 2º caso de testes

    it('002 - Listar usuario criado', () => {

        // Criar um objeto de "Dados"
        var dados = {
            endpoint: endpoint.endpointUsuario(),
        }

        // Criar um objeto de "Assert"
        var assert = {
            status: '200',
            id: 97,
            name: 'Fernando',
            last_name: 'Silva',
            email: 'teste@teste.com'
        }

        // Chamar a função p/ listar usuário
        listar.listarUsuario(dados, assert)
    })

})