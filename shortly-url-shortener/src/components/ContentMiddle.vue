<template>
  <div class="flex flex-col items-center py-40 lg:py-48 px-6 lg:px-32 xl:px-40">
    <div class="flex flex-col text-center items-center">
      <p class="text-3xl lg:text-5xl font-bold">
        Advanced Statistics
      </p>
      <p
        class="text-gray-400 lg:text-lg max-w-xl pt-4 lg:pt-5 leading-7 lg:leading-8 lg:tracking-wider"
      >
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>

    <div class="flex flex-col lg:flex-row lg:gap-y-0 lg:gap-x-8">
      <div class="relative">
        <InfoCard
          text="Brand Recognition"
          imgName="BrandRecognition"
          description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        />
        <span
          class="absolute left-[49%] lg:left-full h-full lg:h-2 w-2 lg:w-full lg:top-2/3 bg-blue-default"
        ></span>
      </div>
      <div class="relative">
        <InfoCard
          class="transform translate-y-10"
          text="Detailed Records"
          imgName="DetailedRecords"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <span
          class="absolute left-[49%] lg:left-full h-full lg:h-2 w-2 lg:w-full lg:top-2/3 bg-blue-default"
        ></span>
      </div>
      <div>
        <InfoCard
          class="transform translate-y-20"
          text="Fully Customizable"
          imgName="FullyCustomizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";

export default {
  name: "ContentMiddle",
  components: {
    InfoCard,
  },
};
</script>
