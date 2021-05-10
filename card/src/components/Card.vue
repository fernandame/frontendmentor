<template>
  <div
    class="bg-[hsl(244,38%,16%)] max-w-[22rem] max-h-[52rem] m-4 xl:m-0 font-inter rounded-xl grid grid-cols-1 xl:grid-cols-2 xl:max-w-[75rem] xl:max-h-[30rem] overflow-hidden xl:tracking-wide"
  >
    <div
      class="text-[hsl(0,0%,100%)] p-8 text-center xl:text-left xl:p-[4.75rem] order-2 xl:order-1"
    >
      <h1
        class="text-3xl font-bold mb-5 xl:text-4xl xl:mb-7 xl:leading-[3rem] xl:tracking-[0.075rem]"
      >
        Get <span class="text-[hsl(277,64%,61%)]">insights</span> that help your
        business grow.
      </h1>
      <p
        class="text-[hsla(0,0%,100%,0.75)] leading-7 xl:leading-[1.75rem] max-w-sm xl:font-thin overflow-hidden"
      >
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <div id="data">
        <ul
          class="font-lexend flex flex-col xl:flex-row tracking-wide mt-4 xl:mt-20"
        >
          <li
            class="flex-1 mt-7 xl:mt-0"
            v-for="(value, key) in items"
            :key="key"
          >
            <p class="text-2xl font-bold mb-1">
              {{ value }}
            </p>
            <p class="text-sm text-[hsla(0,0%,100%,0.6)] uppercase">
              {{ key }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="div-filter flex relative order-1 xl:order-2">
      <picture class="w-full">
        <source
          media="(min-width:1440px)"
          srcset="../assets/image-header-desktop.jpg"
        />
        <img
          class="w-full h-full object-cover filter contrast-50 brightness-110"
          src="../assets/image-header-mobile.jpg"
          alt=""
        />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      items: {
        companies: "10K+",
        templates: "314",
        queries: "12M+",
      },
    };
  },
};
</script>

<style>
.div-filter:after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: hsl(277, 70%, 61%);
  mix-blend-mode: multiply;
}

@media screen and (max-width: 300px) {
  #data {
    display: none;
  }
}
</style>
