<template>
  <v-card class="meu-produto">
    <v-img @click="redirecionar" max-height="200" :src="produto.image.url" />
    <v-card-title>{{ produto.title }}</v-card-title>
    <v-card-text v-html="tratarDescricao()"></v-card-text>
    <v-card-text class="display-1">R$ {{ produto.price }}</v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn @click="redirecionar" color="primary"
        ><v-icon>mdi-cart</v-icon>Comprar</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    produto: Object,
    default: () => {}
  },
  methods: {
    tratarDescricao() {
      const descricao = this.$options.filters.limitarCaracteres(
        this.produto.description,
        50
      );
      return descricao;
    },
    redirecionar() {
      this.$router.push({ name: "produto", params: { id: this.produto.id } });
    }
  }
};
</script>

<style></style>
