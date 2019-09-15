import Vue from "vue";

Vue.filter("limitarCaracteres", (value, tamanho) => {
  return value.slice(0, tamanho).concat("...");
});
