<script setup>
const { params } = useRoute()
const config = useRuntimeConfig()
const { data: courses, pending, error } = await useFetch(`${config.public.API_URL}/ignite-courses`, {
  key: 'courses',
  server: true,
  lazy: false,
  transform: (response) => {
    return response || { items: [] }
  }
})

const course = computed(() => {
  return courses.value?.items?.find(item => item.slug === params.id)
})

// Handle case when course is not found
const courseNotFound = computed(() => {
  return !pending.value && !error.value && !course.value
})
</script>

<template>
  <div class="w-full border-b border-slate-800">
    <div v-if="pending" class="flex justify-center items-center min-h-[400px]">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
    </div>
    
    <div v-else-if="error" class="flex justify-center items-center min-h-[400px]">
      <p class="text-red-500">Failed to load course. Please try again later.</p>
    </div>

    <div v-else-if="courseNotFound" class="flex justify-center items-center min-h-[400px]">
      <p class="text-red-500">Course not found.</p>
    </div>

    <template v-else>
      <CourseHero v-bind="{ course }" />
      <CourseBody v-bind="{ course }" />
    </template>
  </div>
</template>