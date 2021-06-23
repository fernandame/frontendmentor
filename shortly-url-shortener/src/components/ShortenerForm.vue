<template>
  <div
    class="flex flex-col items-center mx-auto relative -mt-20 w-10/12 max-w-xl lg:max-w-3xl xl:max-w-5xl"
  >
    <div
      class="bg-violet-default w-full flex items-center justify-center rounded-xl"
      id="form"
      @keydown.tab="tabHandler"
    >
      <form
        class="flex items-center justify-center w-10/12"
        @submit="submitHandler"
      >
        <div
          class="flex flex-col lg:flex-row items-start justify-center w-full gap-y-4 lg:gap-y-0 lg:gap-x-4 py-6 lg:py-12"
        >
          <div
            class="flex flex-col w-full lg:w-3/4 xl:w-10/12 gap-y-1 lg:gap-y-2"
          >
            <input
              id="input"
              :class="[
                'h-full lg:text-lg w-full rounded-md lg:rounded-lg py-3 lg:py-4 px-4 focus:outline-none',
                error &&
                  'ring-4 ring-orange-red text-orange-red placeholder-orange-red placeholder-opacity-50',
              ]"
              type="text"
              placeholder="Shorten a link here..."
              v-model="currentLongURL"
              @keypress="() => (error = false)"
            />
            <div
              v-if="error"
              class="text-orange-red text-xs italic tracking-tight lg:text-sm lg:absolute mt-1 lg:mt-16"
            >
              {{ message }}
            </div>
          </div>
          <button
            :class="[
              'bg-blue-default hover:bg-blue-light text-white text-lg font-bold w-full lg:w-1/4 xl:w-3/12 py-3 lg:py-4 rounded-md lg:rounded-lg disabled:bg-blue-light focus:outline-none',
              tabKeyActive && 'focus:ring focus:ring-blue-light',
            ]"
            type="submit"
            :disabled="isLoading"
          >
            <font-awesome-icon
              v-if="isLoading"
              :icon="['far', 'spinner-third']"
              class="text-white animate-spin"
            />
            <span v-else>Shorten It!</span>
          </button>
        </div>
      </form>
    </div>
    <div class="w-full">
      <ResultContainer
        v-for="(result, i) in results"
        :key="i"
        :result="result"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ResultContainer from "@/components/ResultContainer.vue";

export default {
  name: "ShortenerForm",
  components: { ResultContainer },
  data: function() {
    return {
      currentLongURL: "",
      currentShortLink: null,
      results: [],
      error: false,
      message: "",
      isLoading: false,
      existingURL: false,
      tabKeyActive: false,
    };
  },
  methods: {
    getShortLink: async function() {
      await axios
        .get(`https://api.shrtco.de/v2/shorten?url=${this.currentLongURL}`)
        .then((res) => (this.currentShortLink = res.data.result.short_link2))
        .catch(() => this.errorHandler());

      if (this.currentShortLink) {
        this.results.push({
          longURL: this.currentLongURL,
          shortURL: this.currentShortLink,
        });

        this.currentLongURL = "";
        this.currentShortLink = "";
        this.isLoading = false;
      }
    },

    errorHandler: function() {
      this.error = true;
      this.message = "Please add a valid link";
    },

    repetitionHandler: function() {
      this.error = true;
      this.message = "This URL has already been used. Please add a new one";
    },

    submitHandler: async function(e) {
      e.preventDefault();

      if (!this.currentLongURL) {
        this.errorHandler();
        return;
      }

      const urlRegex = new RegExp(
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      );

      if (urlRegex.test(this.currentLongURL)) {
        this.error = false;
      } else {
        this.errorHandler();
        return;
      }

      for (let i in this.results) {
        if (this.results[i].longURL === this.currentLongURL) {
          this.existingURL = true;
        }
      }

      if (this.results.length && this.existingURL) {
        this.repetitionHandler();
        this.existingURL = false;
        return;
      }

      this.isLoading = true;
      await this.getShortLink();
      this.isLoading = false;
    },

    tabHandler: function() {
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
