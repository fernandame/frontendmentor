<template>
  <div
    class="bg-white relative px-6 lg:px-32 xl:px-40 py-10 lg:py-12 overflow-hidden"
  >
    <div class="flex flex-col items-center lg:flex-row py-24 lg:py-56">
      <div
        class="pt-96 lg:pt-0 w-full lg:w-1/2 relative lg:absolute lg:right-0 transform lg:translate-x-40 lg:order-2"
      >
        <img
          src="@/assets/images/IllustrationWorking.svg"
          alt="Illustration of a person working on their computer"
          class="w-[512px] sm:w-[600px] lg:w-full max-w-none absolute lg:relative top-0 left-0 sm:left-1/2 lg:left-0 transform sm:-translate-x-1/2 lg:translate-x-0"
        />
      </div>
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left mt-9 lg:mt-0 lg:order-1 z-10"
      >
        <h1 class="font-bold lg:max-w-3xl text-4xl lg:text-7xl 2xl:text-8xl">
          More than just shorter links
        </h1>
        <h2
          class="text-lg xl:text-xl xl:leading-9 max-w-md xl:max-w-lg text-gray-400 mt-3"
        >
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </h2>
        <div class="my-8 lg:my-10 xl:my-12">
          <GetStartedButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GetStartedButton from "@/components/GetStartedButton.vue";

export default {
  name: "ContentTop",
  components: { GetStartedButton },
};
</script>
