<template>
  <div id="container">
    <PainelLancamentos />
    <PainelResumo />
  </div>
</template>

<script>
import PainelResumo from "../components/PainelResumo.vue";
import PainelLancamentos from "../components/PainelLancamentos.vue";

export default {
  name: "Home",
  components: {
    PainelResumo,
    PainelLancamentos,
  },
};
</script>

<style>
#container {
  display: flex;
  padding: 20px;
}
</style>