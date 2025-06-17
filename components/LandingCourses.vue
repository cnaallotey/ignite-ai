<script setup>
const config = useRuntimeConfig()

const { data: courses, pending, error } = await useFetch(`${config.public.API_URL}/ignite-courses`, {
  key: 'courses',
  server: true,
  lazy: false,
  transform: (response) => {
    return response || { items: [] }
  }
})
</script>

<template>
  <section class="px-4 bg-white" id="courses">
   <div class="max-w-5xl mx-auto w-full border-x text-slate-900 pt-20 bg-white border-slate-300">
    <h2 class="text-3xl md:text-4xl text-slate-900 tracking-tight mx-5 md:mx-10 pb-5">
        Access 100% Tuition-Free, Standardized, and High-Quality Generative AI Courses
    </h2>
   </div>
   <div class="border-y border-slate-300">
    <div class="container max-w-5xl border-x border-slate-300 mx-auto">
      <div v-if="pending" class="flex justify-center items-center min-h-[400px]">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
      
      <div v-else-if="error" class="flex justify-center items-center min-h-[400px]">
        <p class="text-red-500">Failed to load courses. Please try again later.</p>
      </div>

      <div v-else
        class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 sm:px-8 xl:px-0"
      >
        <div
          v-for="(item, index) in courses?.items || []"
          :key="index"
          class="relative flex border h-full border-slate-300 flex-col items-start col-span-3 px-4 py-4 space-y-4 overflow-hidden"
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
          <h4 class="text-;g md:text-2xl font-medium text-gray-900">{{ item.name }}</h4>
          <p class="text-base text-gray-500">
            {{item.description}}
          </p>
          <div class="flex-1 flex w-full items-end">
            <NuxtLink external :to="`/course/${item.slug}`" class="bg-pink-600 z-10 text-sm font-bold w-full px-8 py-3 md:py-3 text-center text-white relative">View Course</NuxtLink>
          </div>
        </div>
      </div>
    </div>
   </div>
   <div class="max-w-5xl mx-auto w-full h-20 md:h-40 border-x border-gray-300"></div>
  </section>
</template>