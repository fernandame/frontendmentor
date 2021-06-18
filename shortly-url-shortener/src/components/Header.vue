<template>
  <header
    class="absolute inset-x-0 flex justify-between items-center px-6 lg:px-32 xl:px-40 pt-12 font-bold text-gray-400 z-10"
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
      <button
        class="rounded-full bg-primary-blue hover:bg-active-blue focus:outline-none py-2 px-6"
      >
        <a href="#!" class="text-white">Sign Up</a>
      </button>
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
