<template>
  <div
    id="app"
    class="p-4 lg:px-36 lg:py-24 text-[15px] desktop:h-full large:p-52"
  >
    <div
      class="text-base text-center m-3 lg:flex lg:flex-col lg:text-left desktop:mt-6 xg:mt-16 large:m-0 large:items-center"
    >
      <div class="desktop:flex desktop:flex-row">
        <section>
          <div
            class="flex flex-col justify-center items-center lg:text-center desktop:text-left desktop:items-start large:transform large:-translate-x-44"
          >
            <h1
              class="text-primary-magenta text-4xl font-bold leading-9 mt-16 md:max-w-lg lg:m-0 lg:text-5xl lg:tracking-tight lg:max-w-screen-sm desktop:max-w-lg large:text-7xl"
            >
              10,000+ of our users love our products.
            </h1>
            <p
              class="text-neutral-dark-magenta mt-6 font-medium md:max-w-xl lg:mt-5 lg:tracking-tighter desktop:mt-4 desktop:max-w-md large:mt-6 large:text-xl large:max-w-xl"
            >
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
        </section>
        <section
          class="mt-5 transform desktop:translate-x-16 xg:translate-x-36"
        >
          <ul
            class="flex flex-col items-center space-y-5 transform lg:mt-4 desktop:m-0 large:space-y-8"
          >
            <Rating stars="5" place="Reviews" />
            <Rating
              class="transform desktop:translate-x-12"
              stars="5"
              place="Report Guru"
            />
            <Rating
              class="transform desktop:translate-x-24"
              stars="5"
              place="BestTech"
            />
          </ul>
        </section>
      </div>
      <section
        class="mt-10 md:max-w-xl lg:max-w-full lg:mt-14 large:max-w-screen-large md:mx-auto"
      >
        <div
          class="lg:flex space-y-4 lg:space-y-0 lg:space-x-8 large:space-x-12"
        >
          <Review
            imageUrl="image-colton.jpg"
            name="Colton
            Smith"
            verified="true"
            description='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
          />
          <Review
            class="transform lg:translate-y-6"
            imageUrl="image-irene.jpg"
            name="Irene Roberts"
            verified="true"
            description='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
          />
          <Review
            class="transform lg:translate-y-12"
            imageUrl="image-anne.jpg"
            name="Anne Wallace"
            verified="true"
            description='"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating.vue";
import Review from "@/components/Review.vue";

export default {
  name: "App",
  components: {
    Rating,
    Review,
  },
};
</script>

<style>
@media screen and (max-width: 1024px) {
  #app {
    background-image: url(./assets/images/bg-pattern-top-mobile.svg),
      url(./assets/images/bg-pattern-bottom-mobile.svg);
    background-position: left top, right bottom;
    background-repeat: no-repeat, no-repeat;
  }
}

@media screen and (min-width: 1024px) {
  #app {
    background-image: url(./assets/images/bg-pattern-top-desktop.svg),
      url(./assets/images/bg-pattern-bottom-desktop.svg);
    background-position: left top, right bottom;
    background-repeat: no-repeat, no-repeat;
  }

  html,
  body {
    height: 100%;
  }
}

#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
