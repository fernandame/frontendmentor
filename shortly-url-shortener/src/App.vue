<template>
  <div id="app" class="bg-background-gray font-sans cursor-default min-w-min">
    <div class="bg-white px-6 lg:px-32 xl:px-40 py-10 lg:py-12">
      <Header />
      <div class="flex flex-col items-center lg:flex-row mt-20">
        <div class="w-full lg:w-1/2 lg:order-2">
          <img src="./assets/images/IllustrationWorking.svg" />
        </div>
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left mt-9 lg:mt-0 lg:order-1"
        >
          <h1 class="text-4xl lg:text-7xl xl:text-8xl font-bold">
            More than just shorter links
          </h1>
          <h2
            class="text-lg xl:text-xl xl:leading-9 max-w-md xl:max-w-lg text-gray-400 mt-3"
          >
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h2>
          <button
            class="text-lg xl:text-xl rounded-full bg-primary-blue hover:bg-active-blue text-white px-10 py-3 mt-10"
          >
            <a href="#!">Get Started</a>
          </button>
        </div>
      </div>
    </div>
    <div></div>
    <footer></footer>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header },
};
</script>

<style>
#app,
html,
body {
  height: 100%;
}
</style>
