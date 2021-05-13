<template>
  <div id="app" class="p-4 lg:px-36 lg:py-32 text-[15px] desktop:h-full">
    <div
      class="text-base text-center m-3 lg:mt-6 lg:flex lg:flex-col lg:text-left 2xl:text-base"
    >
      <div class="desktop:flex desktop:flex-row">
        <section>
          <div
            class="flex flex-col justify-center items-center desktop:items-start"
          >
            <h1
              class="text-primary-magenta text-4xl font-bold leading-9 mt-16 lg:m-0 lg:text-5xl lg:tracking-tight lg:max-w-md desktop:max-w-lg"
            >
              10,000+ of our users love our products.
            </h1>
            <p
              class="text-neutral-dark-magenta mt-6 font-medium lg:mt-3 lg:max-w-md lg:tracking-tighter"
            >
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
        </section>
        <section class="mt-5 transform lg:m-0 desktop:translate-x-16">
          <ul
            class="flex flex-col items-center space-y-5 transform lg:mt-12 desktop:m-0"
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
      <section class="mt-10 lg:mt-14">
        <div class="lg:flex space-y-4 lg:space-y-0 lg:space-x-8">
          <Review
            imageUrl="@/assets/images/image-colton.jpg"
            name="Colton
            Smith"
            verified="true"
            description='"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
          />
          <Review
            class="transform lg:translate-y-6"
            imageUrl="@/assets/images/image-irene.jpg"
            name="Irene Roberts"
            verified="true"
            description='"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
          />
          <Review
            class="transform lg:translate-y-12"
            imageUrl="@/assets/images/image-anne.jpg"
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
