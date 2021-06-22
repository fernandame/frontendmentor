<template>
  <div
    class="flex items-center justify-center bg-violet-default rounded-xl mx-auto h-40 relative -mt-20 w-10/12 max-w-xl lg:max-w-3xl xl:max-w-5xl"
    id="form"
    @keydown.tab="handleTab()"
  >
    <form
      action="/"
      class="flex flex-col lg:flex-row h-full items-center justify-center w-10/12 gap-y-4 lg:gap-y-0 lg:gap-x-4"
    >
      <input
        id="input"
        :class="styles.input"
        type="text"
        placeholder="Shorten a link here..."
      />
      <button
        :class="[
          styles.button,
          tabKeyActive ? 'focus:ring' : 'focus:outline-none',
        ]"
        type="submit"
      >
        Shorten It!
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ShortenerForm",
  data: function() {
    return {
      styles: {
        input:
          "w-full rounded-md lg:rounded-lg lg:w-3/4 xl:w-10/12 py-3 md:py-4 px-4 focus:outline-none",
        button:
          "bg-blue-default hover:bg-blue-light text-white font-bold w-full lg:w-1/4 xl:w-3/12 py-3 md:py-4 rounded-md lg:rounded-lg",
      },
      userIsTabbing: false,
      tabKeyActive: false,
    };
  },
  methods: {
    handleTab: function() {
      this.userIsTabbing = true;
    },
  },
  watch: {
    userIsTabbing: function() {
      if (this.userIsTabbing) this.tabKeyActive = true;
      window.addEventListener("mousedown", () => (this.tabKeyActive = false));
      this.userIsTabbing = false;
    },
  },
};
</script>

<style scoped>
#form {
  background: #3a3054 url("../assets/images/BgShortenMobile.svg") no-repeat
    right top;
}

@screen lg {
  #form {
    background-image: url("../assets/images/BgShortenDesktop.svg");
  }
}
</style>
