<template>
  <header
    class="text-gray-400 absolute inset-x-0 flex justify-between items-center px-6 lg:px-32 xl:px-40 pt-12 font-bold z-10"
  >
    <div class="flex items-center justify-between">
      <a href="/">
        <logo />
      </a>
      <div class="hidden lg:flex lg:ml-8 lg:gap-x-8">
        <a href="#!" class="hover:text-black focus:text-black">Features</a>
        <a href="#!" class="hover:text-black focus:text-black">Pricing</a>
        <a href="#!" class="hover:text-black focus:text-black">Resources</a>
      </div>
    </div>
    <div class="hidden lg:flex items-center gap-x-9">
      <a href="#!" class="hover:text-black">Login</a>
      <a
        class="text-white rounded-full bg-primary-blue hover:bg-lighter-blue py-2 px-6"
        href="#!"
        >Sign Up</a
      >
    </div>
    <span class="lg:hidden">
      <font-awesome-icon
        :icon="['far', 'bars']"
        size="2x"
        class="text-gray-400"
      />
    </span>
  </header>
</template>

<script>
import Logo from "../assets/icons/Logo.vue";
export default {
  components: { Logo },
  name: "Header",
};
</script>
