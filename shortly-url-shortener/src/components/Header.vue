<template>
  <header class="flex justify-between items-center font-bold text-gray-400">
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
        class="rounded-full bg-primary-blue hover:bg-active-blue py-2 px-6"
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
