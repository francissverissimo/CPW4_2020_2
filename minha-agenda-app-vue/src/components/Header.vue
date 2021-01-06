<template>
  <div>
    <h1>Minha Agenda</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
div {
  background-color: var(--cor-destaque);
  color: white;
  padding: 10px 20px;
  box-shadow: 14px 14px gray, 23px 23px var(--cor-destaque);
}

h1 {
  font-family: "negrito";
  font-size: 300%;
}

p {
  font-family: "padrao";
  font-size: 150%;
}
</style>