<script setup>
const points = ref([
  {
    img: "course",
    title: "Choose a Free Course",
    description: "Select from our easy-to-follow AI courses, available tuition-free.",
  },
  {
    img: "steps",
    title: "Pick Your Level",
    description: "Start with the essentials or dive deeper with Advanced Generative AI courses.",
  },
  {
    img: "start",
    title: "Start your course",
    description:"Each course lasts just 3 months with extra 2-months as internships, including assignments, real-world projects, and a certificate to showcase your skills.",
  },
  {
    img: "network",
    title: "Get Connected to Opportunities",
    description:"Through Werkbuddy, graduates get access to job placements, internships, and trainee roles.",
  },
]);
</script>

<template>
  <section class="px-4">
   <div class="max-w-5xl mx-auto w-full border-x pt-20 border-slate-800">
    <h2 class="text-3xl md:text-4xl text-white tracking-tight mx-5 md:mx-10 pb-5">
        Build Your AI Skills in 4 Simple Steps
      </h2>
   </div>
   <div class="border-y border-slate-800">
    <div class="container max-w-5xl border-x border-slate-800 mx-auto">
      
      <div
        class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 sm:px-8 xl:px-0"
      >
        <div
          v-for="(point, index) in points"
          :key="point.img"
          class="relative flex border border-slate-800 flex-col items-start col-span-6 px-6 py-8 space-y-4 overflow-hidden"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <p class="text-[140px] absolute -top-16 -right-0 font-black text-pink-500/10">
            {{ index + 1 }}
          </p>
          <div
            class="p-3 text-white bg-white"
            data-primary="pink-500"
            data-rounded="rounded-full"
          >
            <img :src="`/images/icon-${point.img}.svg`" class="size-8 opacity-70" />
          </div>
          <h4 class="text-;g md:text-2xl font-medium text-white">{{ point.title }}</h4>
          <p class="text-base text-white">
            {{ point.description }}
          </p>
        </div>
      </div>
    </div>
   </div>
  </section>
</template>