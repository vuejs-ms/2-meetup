<template>
  <v-app>
    <v-app-bar app color="secondary">
      <v-toolbar-title
        @click="redirecionarHome"
        class="headline text-uppercase"
      >
        <span>Barato Coletivo</span>
      </v-toolbar-title>
      <v-text-field
        label="Procurar produtos"
        filled
        rounded
        class="my-auto px-8"
        prepend-inner-icon="mdi-magnify"
      />
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  name: "App",
  data: () => ({
    //
  }),
  mounted() {
    this.buscarProdutos();
  },

  computed: {
    produtos() {
      return this.$store.state.produtos;
    }
  },

  methods: {
    async buscarProdutos() {
      const response = await axios.get("/offers");
      this.$store.state.produtos = response.data;
    },
    redirecionarHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
