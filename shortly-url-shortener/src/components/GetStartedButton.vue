<template>
  <a
    class="text-white font-bold text-lg rounded-full bg-blue-default xl:text-xl hover:bg-blue-light px-10 py-3"
    href="#form"
    @click="removeHash"
    >Get Started
  </a>
</template>

<script>
export default {
  name: "GetStartedButton",
  methods: {
    removeHash: function() {
      setTimeout(() => {
        history.replaceState("", document.title, window.location.pathname);
      }, 1);
    },
  },
};
</script>
