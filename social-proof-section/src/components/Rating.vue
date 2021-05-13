<template>
  <div
    class="bg-neutral-light-magenta rounded-lg p-2 w-full flex items-center justify-center lg:justify-start lg:px-8 lg:py-4 lg:max-w-md desktop:max-w-prose 2xl:py-8 2xl:px-16 2xl:text-xl"
  >
    <div class="flex flex-col items-center justify-center lg:flex-row">
      <ul class="flex space-x-2 mt-1">
        <li v-for="i in Number(stars)" :key="i">
          <img class="2xl:w-6" src="../assets/images/icon-star.svg" />
        </li>
      </ul>
      <p
        class="text-primary-magenta tracking-tight font-bold mt-4 lg:mt-0 lg:ml-8"
      >
        Rated {{ stars }} Stars in {{ place }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: {
    stars: {
      default: 0,
    },
    place: {
      default: "",
    },
  },
};
</script>

<style></style>
