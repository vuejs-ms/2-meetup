<template>
  <v-row>
    <v-col cols="4" v-for="(prod, index) in produtos" :key="index">
      <produto :produto="prod" />
    </v-col>
  </v-row>
</template>

<script>
import ProdutoComponent from "@/components/Produto";

export default {
  components: {
    produto: ProdutoComponent
  },
  computed: {
    produtos() {
      return this.$store.state.produtos;
    }
  }
};
</script>
