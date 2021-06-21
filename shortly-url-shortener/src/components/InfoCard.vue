<template>
  <div
    class="bg-white flex flex-col text-center lg:text-left items-center lg:items-start max-w-sm rounded-md mt-24 p-8 pt-20 relative z-10"
  >
    <div class="absolute -top-12 p-6 rounded-full bg-primary-violet">
      <img
        :src="require(`../assets/icons/${imgName}.svg`)"
        class="select-none"
      />
    </div>
    <h3 class="font-bold text-xl xl:text-2xl">{{ text }}</h3>
    <p class="text-s pt-3 text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    text: String,
    description: String,
    imgName: String,
  },
};
</script>
