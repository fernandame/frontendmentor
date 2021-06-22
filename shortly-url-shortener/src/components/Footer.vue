<template>
  <footer
    class="bg-violet-footer flex flex-col lg:flex-row text-center lg:text-left items-center lg:items-start lg:justify-between w-full py-14 px-6 lg:px-32 xl:px-40"
  >
    <logo class="text-white" />
    <div
      class="lg:flex lg:justify-between lg:gap-x-12 xl:gap-x-20 2xl:gap-x-40"
    >
      <div
        class="lg:flex justify-between whitespace-nowrap lg:gap-x-14 xl:gap-x-20 2xl:gap-x-32 mt-12 lg:mt-0"
      >
        <FooterSection
          title="Features"
          :items="['Link Shortening', 'Branded Links', 'Analytics']"
        />
        <FooterSection
          title="Resources"
          :items="['Blog', 'Developers', 'Support']"
        />
        <FooterSection
          title="Company"
          :items="['About', 'Our Team', 'Careers', 'Contact']"
        />
      </div>
      <div
        class="flex items-center justify-center gap-x-6 h-6 w-44 mt-12 lg:mt-0 lg:w-full"
      >
        <SocialFooterLink title="Facebook" />
        <SocialFooterLink title="Twitter" />
        <SocialFooterLink title="Instagram" />
        <SocialFooterLink title="Github" href="fernandame" />
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/assets/icons/Logo.vue";
import FooterSection from "@/components/FooterSection.vue";
import SocialFooterLink from "@/components/SocialFooterLink.vue";

export default {
  name: "Footer",
  components: { Logo, FooterSection, SocialFooterLink },
};
</script>
