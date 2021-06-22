<template>
  <div class="mt-12 lg:mt-0">
    <a href="#!" class="font-bold text-white">{{ title }}</a>
    <ul class="text-gray-footer text-s flex flex-col pt-6 gap-y-3">
      <li v-for="item in items" :key="item">
        <a href="#!" class="hover:text-blue-default">
          {{ item }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    title: String,
    items: Array,
  },
};
</script>
