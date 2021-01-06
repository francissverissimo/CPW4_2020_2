<template>
  <div id="painelContato">
    <div id="formularioContato">
      <form @submit="salvar">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" required v-model="nome" />
        <label for="telefone">Telefone</label>
        <input
          type="tel"
          name="telefone"
          id="telefone"
          required
          v-mask="['(##)####-####', '(##)#####-####']"
          v-model="telefone"
        />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />

        <button id="botaoSalvar">Salvar</button>
      </form>
    </div>

    <div id="areaContatos">
      <span v-if="todosContatos.length < 1">Lista de Contatos Vázia</span>
      <BlocoContato
        v-for="contato in todosContatos"
        v-bind:key="contato.id"
        :contato="contato"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BlocoContato from "./BlocoContato.vue";
import Contato from "../models/Contato";
import { mask } from "vue-the-mask";

export default {
  name: "PainelContatos",
  data: () => {
    return {
      nome: "",
      telefone: "",
      email: "",
    };
  },
  directives: { mask },
  components: { BlocoContato },
  computed: mapGetters(["todosContatos"]),
  methods: {
    ...mapActions(["salvarContato"]),
    salvar(event) {
      event.preventDefault();
      const contato = new Contato(this.nome, this.telefone, this.email);
      this.salvarContato(contato);
      this.limparFormulario();
    },
    limparFormulario() {
      (this.nome = ""), (this.telefone = ""), (this.email = "");
    },
  },
};
</script>

<style scoped>
#painelContato {
  display: flex;
  width: auto;
  padding: 20px;
  margin: 0 3px;
}

#formularioContato {
  width: 45%;
  background-color: white;
  border-radius: 20px;
  padding: 25px;
  font-family: "padrao";
  border: 2px solid grey;
  box-shadow: 7px 7px grey;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20%;
}

#nome,
#telefone,
#email,
button {
  display: block;
  margin-bottom: 15px;
}

#nome,
#telefone,
#email {
  color: #353535;
  height: 30px;
  font-family: "padrao";
  font-size: 130%;
  border: 2px solid #808080;
  border-radius: 5px;
  outline: none;
  width: 70%;
}

#botaoSalvar {
  background-color: var(--cor-destaque);
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 10px 20px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
  transition: 0.3s;
}

#botaoSalvar:hover {
  transition: 0.3s;
  background-color: #09473d;
  border-radius: 0;
}

#botaoSalvar:active {
  color: aqua;
  transition: 3ms;
}

#areaContatos {
  background-color: var(--cor-secundaria);
  border-radius: 15px;
  padding: 15px 20px;
  margin: auto;
  margin-top: 20px;
  width: 55%;
  box-shadow: 7px 7px var(--cor-destaque);
}

#areaContatos span {
  font-family: "negrito";
  font-size: 120%;
  color: #003f34;
}
</style>