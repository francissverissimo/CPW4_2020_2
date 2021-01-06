<template>
  <div>
    <Header />

    <div id="container">
      <PainelContatos />
    </div>
  </div>
</template>

<script>
import PainelContatos from "./components/PainelContatos.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header, PainelContatos },
};
</script>

<style>
@font-face {
  font-family: "padrao";
  src: url(./fonts/KumbhSans-Regular.ttf);
}

@font-face {
  font-family: "negrito";
  src: url(./fonts/KumbhSans-Bold.ttf);
}

:root {
  --cor-destaque: #007969;
  --cor-secundaria: #acd8c3;
}

body {
  margin: 0;
}

#container {
  padding: 0 20px;
}
</style>