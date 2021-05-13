<template>
  <div
    class="bg-primary-magenta text-sm text-neutral-light-magenta text-left rounded-lg p-8 flex flex-col items-center justify-center tracking-tight overflow-hidden 2xl:px-20 2xl:py-12 2xl:max-w-xl"
  >
    <div class="container flex flex-col justify-center">
      <div
        class="flex flex-col xs:flex-row mt-2 items-center justify-center xs:justify-start"
      >
        <img
          class="rounded-full object-cover h-14 w-14 xs:w-10 xs:h-10"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <div
          class="flex flex-col transform xs:translate-x-4 mt-6 xs:mt-0 2xl:text-xl"
        >
          <p class="font-bold">{{ name }}</p>
          <p v-if="verified" class="text-primary-pink">Verified Buyer</p>
        </div>
      </div>
      <div class="mt-8 2xl:text-lg">
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
