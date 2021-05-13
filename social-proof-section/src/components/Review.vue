<template>
  <div
    class="bg-primary-magenta text-sm text-neutral-light-magenta text-left rounded-lg p-8 flex flex-col items-center justify-center tracking-tight overflow-large large:px-20 large:py-12 large:max-w-xl"
  >
    <div class="container flex flex-col justify-center">
      <div
        class="flex flex-col xs:flex-row mt-4 items-center justify-center xs:justify-start"
      >
        <img
          class="rounded-full object-cover h-14 w-14 xs:w-10 xs:h-10 large:min-h-[4rem] large:min-w-[4rem]"
          :src="require(`../assets/images/${imageUrl}`)"
          alt=""
        />
        <div
          class="flex flex-col transform xs:translate-x-4 mt-4 xs:mt-0 large:text-xl large:ml-2"
        >
          <p class="font-bold">{{ name }}</p>
          <p v-if="verified" class="text-primary-pink">Verified Buyer</p>
        </div>
      </div>
      <div class="mt-3 xs:mt-8 large:text-lg">
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: {
    imageUrl: {
      default: "",
    },
    name: {
      default: "",
    },
    verified: {
      default: false,
    },
    description: {
      default: "",
    },
  },
};
</script>

<style></style>
