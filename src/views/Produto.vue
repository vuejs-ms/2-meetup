<template>
  <div>
    <v-row>
      <v-col cols="8">
        <v-img :src="produto.images[0].url" />
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <p class="headline">{{ produto.title }}</p>
          <p class="text-justify" v-html="produto.description"></p>
          <p>Por Apenas</p>
          <p class="display-1">R$ {{ produto.price }}</p>
          <v-btn color="primary">Comprar</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  data: () => ({
    produto: {}
  }),
  created() {
    this.buscarProduto();
  },
  methods: {
    async buscarProduto() {
      const { data } = await axios.get("offer/" + this.$route.params.id);
      this.produto = data;
    }
  }
};
</script>

<style></style>
