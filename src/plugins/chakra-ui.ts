import ChakraUIVuePlugin, { chakra, extendTheme } from "@chakra-ui/vue-next";
import { domElements } from "@chakra-ui/vue-system";
import { defineNuxtPlugin, NuxtApp } from "nuxt/app";

export const plugin = (nuxtApp: NuxtApp) => {
  const theme = extendTheme({});
  nuxtApp.vueApp.use(ChakraUIVuePlugin, { extendTheme: theme });
  domElements.forEach((tag) => {
    nuxtApp.vueApp.component(`chakra.${tag}`, chakra(tag));
  });
};

export default defineNuxtPlugin(plugin);