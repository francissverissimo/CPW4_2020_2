<template>
  <div>
    <router-link to="/">
      <img src="../img/LogoJulius.png" alt="Julius" />
    </router-link>
    <router-link to="/">
      <span>JULIUS</span>
    </router-link>

    <div id="menu">
      <router-link to="/historico">Histórico de lançamentos</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marca",
};
</script>

<style scoped>
div {
  background-color: white;
  font-family: "negrito";
  padding: 10px;
}

img {
  width: 40px;
  vertical-align: middle;
  margin-right: 10px;
}

span {
  color: var(--cor-destaque);
  font-size: 120%;
}

a {
  text-decoration: none;
  color: var(--cor-destaque);
}

a:hover,
span:hover {
  color: lightskyblue;
}

#menu {
  float: right;
  font-size: 80%;
}
</style>