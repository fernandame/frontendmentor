<template>
  <div
    class="bg-neutral-light-magenta rounded-lg p-2 w-full lg:max-w-[32rem] lg:p-5 m-4"
  >
    <div
      class="w-full h-full flex flex-col items-center justify-center lg:flex-row lg:justify-start"
    >
      <ul class="flex space-x-2 mt-1 lg:ml-4 lg:mr-12">
        <li v-for="i in Number(stars)" :key="i">
          <img src="../assets/images/icon-star.svg" />
        </li>
      </ul>
      <p class="text-primary-magenta font-bold mt-4 lg:mt-0">
        Rated {{ stars }} stars in {{ place }}
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
