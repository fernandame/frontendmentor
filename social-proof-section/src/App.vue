<template>
  <div class="p-[0.1rem]">
    <div id="app" class="text-[15px] text-center m-4 lg:m-[8.75rem] lg:flex">
      <section>
        <div>
          <h1
            class="text-primary-magenta text-4xl font-bold leading-9 mt-16 lg:m-0 lg:leading-[2.75rem] lg:text-5xl lg:max-w-md lg:text-left"
          >
            10,000+ of our users love our products.
          </h1>
          <p class="text-primary-magenta mt-5 lg:max-w-md lg:text-left">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
      </section>
      <section class="mt-5">
        <ul class="flex flex-col items-center">
          <Rating stars="5" place="Reviews" />
          <Rating
            class="transform lg:translate-x-16"
            stars="5"
            place="Report Guru"
          />
          <Rating
            class="transform lg:translate-x-32"
            stars="5"
            place="BestTech"
          />
        </ul>
      </section>
      <footer>
        <div></div>
      </footer>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";

export default {
  name: "App",
  components: {
    Rating,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  body {
    background-image: url(./assets/images/bg-pattern-top-mobile.svg),
      url(./assets/images/bg-pattern-bottom-mobile.svg);
    background-position: top, bottom;
    background-repeat: no-repeat, no-repeat;
  }
}

@media screen and (min-width: 1024px) {
  body {
    background-image: url(./assets/images/bg-pattern-top-desktop.svg),
      url(./assets/images/bg-pattern-bottom-desktop.svg);
    background-position: left top, right bottom;
    background-repeat: no-repeat, no-repeat;
  }
}

#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
