<template>
  <div class="relative" @keydown.tab="tabHandler">
    <div
      class="bg-white flex flex-col lg:flex-row items-start lg:items-center lg:justify-between px-4 lg:pl-8 lg:pr-6 py-4 mt-6 rounded-md"
    >
      <span class="w-full truncate pb-4 lg:pb-0 max-w-xs sm:max-w-none">{{
        result.longURL
      }}</span>
      <hr class="bg-gray-dark absolute h-px w-full inset-0 top-11 lg:hidden" />
      <div
        class="w-full lg:max-w-sm flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-y-2 lg:gap-y-0 lg:gap-x-6"
      >
        <a
          :href="'https://' + result.shortURL"
          target="_blank"
          class="text-blue-default"
          >{{ result.shortURL }}</a
        >
        <button
          :class="[
            'w-full lg:w-28 rounded-md py-2 text-white focus:outline-none',
            isCopyActive ? 'bg-violet-default' : 'bg-blue-default',
            tabKeyActive && 'focus:ring focus:ring-blue-light',
          ]"
          v-clipboard:copy="result.shortURL"
          v-clipboard:success="clipboardHandler"
        >
          <span>{{ isCopyActive ? "Copied" : "Copy" }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

export default {
  name: "ResultContainer",
  data: function() {
    return {
      btnContent: "Copy",
      isCopyActive: false,
      tabKeyActive: false,
    };
  },
  props: {
    result: Object,
  },
  methods: {
    clipboardHandler: function() {
      this.isCopyActive = true;
      this.btnContent = "Copied!";

      setTimeout(() => {
        this.isCopyActive = false;
        this.btnContent = "Copy";
      }, 2500);
    },

    tabHandler: function() {
      this.tabKeyActive = true;
      window.addEventListener("mousedown", () => (this.tabKeyActive = false));
    },
  },
};
</script>
