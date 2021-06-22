<template>
  <span>
    <a :href="`https://${title}.com/${href ? href : ''}`" target="_blank">
      <img
        :src="require(`@/assets/icons/${title}.svg`)"
        :title="title"
        class="cursor-pointer hover:text-blue-default"
      />
    </a>
  </span>
</template>

<script>
export default {
  name: "SocialFooterLink",
  props: { title: String, href: String },
};
</script>
