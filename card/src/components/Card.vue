<template>
  <figure
    class="bg-[#1c1938] w-[57.625rem] h-[23.25rem] rounded-md grid grid-cols-2 2xl:w-[69.35rem] 2xl:h-[27.85rem]"
  >
    <div
      class="text-gray-100 p-[3.75rem] text-left overflow-hidden 2xl:p-[4.5rem]"
    >
      <h1 class="text-3xl font-bold mb-[1.25rem] 2xl:text-4xl 2xl:mb-[1.75rem]">
        Get <span class="text-[#aa5adc]">insights</span> that help your business
        grow.
      </h1>
      <p
        class="text-gray-400 text-[0.85rem] sm:max-w-xs mb-14 2xl:text-[1rem] 2xl:mb-[4.75rem] 2xl:max-w-sm overflow-hidden"
      >
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <div>
        <ul class="data flex">
          <li class="flex-1" v-for="(value, key) in items" :key="key">
            <p class="text-[1.25rem] font-bold 2xl:text-2xl">
              {{ value }}
            </p>
            <p class="text-[0.7rem] text-gray-400 uppercase 2xl:text-sm">
              {{ key }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="filter flex justify-end relative">
      <img
        class="w-[97%] rounded-r-md object-cover filter grayscale contrast-75 brightness-110"
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
        alt=""
      />
    </div>
  </figure>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      items: {
        companies: "10K+",
        templates: "314",
        queries: "12M+",
      },
    };
  },
};
</script>

<style>
.filter:after {
  position: absolute;
  content: "";
  display: block;
  top: 0;
  right: 0;
  height: 100%;
  width: 97%;
  background: #aa5adc;
  mix-blend-mode: multiply;
}
</style>
