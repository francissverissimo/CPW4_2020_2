const moduloContatos = {
    state: {
        contatos: []
    },
    getters: {
        todosContatos: state => state.contatos,
    },
    actions: {
        salvarContato: ({
            commit
        }, contato) => {
            commit("adicionarContato", contato);
        },
        excluirContato: ({
            commit
        }, id) => {
            commit('removerContato', id);
        }
    },
    mutations: {
        adicionarContato: (state, contato) => {
            state.contatos.unshift(contato);
        },
        removerContato: (state, id) => state.contatos =
            state.contatos.filter(contato => contato.id !== id)
    }
};

export default moduloContatos;