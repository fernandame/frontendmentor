<template>
  <div
    id="boost"
    class="bg-violet-default w-full flex justify-center py-20 lg:py-16"
  >
    <div class="flex flex-col items-center text-center px-4">
      <h3 class="text-white font-bold text-2xl lg:text-4xl">
        Boost your links today
      </h3>
      <div class="mt-7 lg:mt-12">
        <GetStartedButton />
      </div>
    </div>
  </div>
</template>

<script>
import GetStartedButton from "@/components/GetStartedButton.vue";

export default {
  name: "BoostLinks",
  components: { GetStartedButton },
};
</script>

<style scoped>
#boost {
  background: #3a3054 url("../assets/images/BgBoostMobile.svg") center/cover;
}

@screen lg {
  #boost {
    background: #3a3054 url("../assets/images/BgBoostDesktop.svg") center/cover;
  }
}
</style>
