<template>
  <div id="app" class="text-violet-dark bg-gray-light font-sans min-w-min">
    <Header />
    <ContentTop />
    <ShortenerForm />
    <ContentMiddle />
    <BoostLinks />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import ContentTop from "@/components/ContentTop.vue";
import ShortenerForm from "@/components/ShortenerForm.vue";
import ContentMiddle from "@/components/ContentMiddle.vue";
import BoostLinks from "@/components/BoostLinks.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    ContentTop,
    ShortenerForm,
    ContentMiddle,
    BoostLinks,
    Footer,
  },
};
</script>

<style>
* {
  scroll-behavior: smooth;
}
</style>
