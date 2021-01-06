<template>
  <div class="blocoContato">
    <span id="inicialNome"> {{ contato.nome.charAt(0) }} </span>
    <div class="descricaoContato">
      <span class="nome">{{ contato.nome }}</span>
      <span>{{ contato.telefone }}</span>
      <span>{{ contato.email }}</span>
    </div>
    <button @click="excluirContato(contato.id)" class="botaoRemover">
      <img src="../img/lixeira.png" alt="Remover Contato" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BlocoContato",
  methods: {
    ...mapActions(["excluirContato"]),
  },
  props: {
    contato: Object,
  },
};
</script>

<style scoped>
.blocoContato {
  display: flex;
  background-color: white;
  border-radius: 15px;
  font-family: "padrao";
  padding: 10px 5px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px #686868;
}

.botaoRemover {
  width: auto;
  border: none;
  outline: none;
  background-color: transparent;
}

.botaoRemover:hover {
  cursor: pointer;
}

.botaoRemover img {
  margin: 0 0 0 6px;
  width: 35px;
  position: absolute;
  right: 60px;
}

.botaoRemover img:active {
  filter: invert(100%) saturate(120);
}

.descricaoContato {
  width: 80%;
  float: right;
  text-align: right;
}

.descricaoContato span {
  display: block;
  font-size: 100%;
}

.nome {
  font-family: "negrito";
  font-size: 170% !important;
  color: #292929;
  margin-bottom: 5px;
}

#inicialNome {
  width: 10%;
  background-color: var(--cor-destaque);
  color: white;
  padding: 17px 3px;
  text-align: center;
  border-radius: 100%;
  vertical-align: middle;
  font-family: "negrito";
  font-size: 155%;
}
</style>