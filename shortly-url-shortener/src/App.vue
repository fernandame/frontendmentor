<template>
  <div
    id="app"
    class="text-dark-violet bg-lighter-gray font-sans cursor-default min-w-min"
  >
    <Header />
    <ContentTop />
    <ShortenerForm />
    <ContentMiddle />
  </div>
</template>

<script>
import Header from "./components/Header";
import ContentTop from "./components/ContentTop.vue";
import ContentMiddle from "./components/ContentMiddle.vue";
import ShortenerForm from "./components/ShortenerForm.vue";

export default {
  name: "App",
  components: { Header, ContentTop, ShortenerForm, ContentMiddle },
};
</script>

<style>
* {
  scroll-behavior: smooth;
}
</style>
