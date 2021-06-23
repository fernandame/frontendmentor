<template>
  <div
    class="flex items-center justify-center bg-violet-default rounded-xl mx-auto relative -mt-20 w-10/12 max-w-xl lg:max-w-3xl xl:max-w-5xl"
    id="form"
    @keydown.tab="userIsTabbing"
  >
    <form
      class="flex items-center justify-center w-10/12"
      @submit="handleSubmit"
    >
      <div
        class="flex flex-col lg:flex-row items-start justify-center w-full gap-y-4 lg:gap-y-0 lg:gap-x-4 py-6 lg:py-12"
      >
        <div
          class="flex flex-col w-full lg:w-3/4 xl:w-10/12 gap-y-1 lg:gap-y-2"
        >
          <input
            id="input"
            :class="[styles.input.default, error && styles.input.error]"
            type="text"
            placeholder="Shorten a link here..."
            v-model="longURL"
            @keypress="() => (error = false)"
          />
          <div
            v-if="error"
            class="text-orange-red text-xs italic lg:text-sm lg:absolute lg:bottom-5"
          >
            {{ message }}
          </div>
        </div>
        <button
          :class="[
            'bg-blue-default hover:bg-blue-light text-white text-lg font-bold w-full lg:w-1/4 xl:w-3/12 py-3 lg:py-4 rounded-md lg:rounded-lg',
            tabKeyActive ? 'focus:ring' : 'focus:outline-none',
          ]"
          type="submit"
        >
          Shorten It!
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShortenerForm",
  data: function() {
    return {
      styles: {
        input: {
          default:
            "h-full lg:text-lg w-full rounded-md lg:rounded-lg py-3 lg:py-4 px-4 focus:outline-none",
          error:
            "border-4 text-orange-red placeholder-orange-red placeholder-opacity-50 border-orange-red py-2.5 md:px-3 md:py-2 lg:px-3 lg:py-3.5 -mt-px",
        },
      },
      longURL: "",
      shortLink: "",
      error: false,
      message: "",
      tabKeyActive: false,
    };
  },
  methods: {
    getShortLink: function() {
      if (!this.longURL) {
        this.handleError();
        return;
      }

      const urlRegex = new RegExp(
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      );

      urlRegex.test(this.longURL)
        ? async () =>
            await axios
              .get(`https://api.shrtco.de/v2/shorten?url=${this.longURL}`)
              .then((res) => (this.shortLink = res.data.result.full_short_link))
              .catch(() => this.handleError())
        : this.handleError();
    },

    handleError: function() {
      this.error = true;
      this.message = "Please add a valid link";
    },

    handleSubmit: function(e) {
      e.preventDefault();

      this.getShortLink();
    },

    userIsTabbing: function() {
      this.tabKeyActive = true;
      window.addEventListener("mousedown", () => (this.tabKeyActive = false));
    },
  },
};
</script>

<style scoped>
input {
  box-sizing: border-box;
}

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
