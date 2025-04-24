<script setup>
const { data: courses } = await useAsyncData("courses", () =>
  $fetch("https://webinar-api.eazzysocial.blog/thrive-courses")
);
</script>

<template>
  <section class="px-4" id="courses">
   <div class="max-w-5xl mx-auto w-full border-x pt-20 border-slate-800">
    <h2 class="text-3xl md:text-4xl text-white tracking-tight mx-5 md:mx-10 pb-5">
        Access 100% Tuition-Free, Standardized, and High-Quality Generative AI Courses
      </h2>
   </div>
   <div class="border-y border-slate-800">
    <div class="container max-w-5xl border-x border-slate-800 mx-auto">

      <div
        class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0"
      >
        <div
          v-for="(item, index) in courses.items"
          :key="index"
          class="relative flex border h-full border-slate-800 flex-col items-start col-span-3 px-4 py-4 space-y-4 overflow-hidden"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            class="p-1 text-white w-full h-40 overflow-hidden "
            data-primary="pink-500"
          >
            <img :src="item.image.url" class="w-full" />
          </div>
          <div class="flex gap-2 items-center text-orange-500 text-sm">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span>{{ item.duration || "TBA" }}</span>
        </div>
          <h4 class="text-;g md:text-2xl font-medium text-white">{{ item.name }}</h4>
          <p class="text-base text-white">
            {{item.description}}
          </p>
          <div class="flex-1 flex w-full items-end">
            <NuxtLink :to="`/course/${item.slug}`" class="bg-pink-600 z-10 text-sm font-bold w-full px-8 py-2 md:py-3 text-center text-white relative">Enroll Now</NuxtLink>
          </div>
        </div>
      </div>
    </div>
   </div>
  </section>
</template>