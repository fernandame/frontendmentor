<template>
  <div id="app" class="bg-background-gray font-sans cursor-default min-w-min">
    <Header />
    <ContentTop />
    <ContentMiddle />
  </div>
</template>

<script>
import Header from "./components/Header";
import ContentTop from "./components/ContentTop.vue";
import ContentMiddle from "./components/ContentMiddle.vue";

export default {
  name: "App",
  components: { Header, ContentTop, ContentMiddle },
};
</script>
