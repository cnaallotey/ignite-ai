<script setup>
const route = useRoute()
</script>

<template>
  <div class="sticky top-0 z-50 border-b border-slate-800 bg-black px-4">
    <div class="max-w-screen-2xl mx-auto">
      <div class="flex justify-between items-center w-full">
        <NuxtLink to="/#" class="border-x border-slate-800 px-6 py-4"
          ><img src="/images/top-logo.svg" class="h-10 md:h-16 w-auto" alt="logo"
        /></NuxtLink>

        <div class="border-x-0 border-slate-800 flex items-center h-full">
          <UButton
          v-if="route.path === '/'"
            to="/#courses"
            external
            class="hidden md:inline-flex items-center rounded-none justify-center bg-pink-600 relative h-fit py-3 px-8 text-white text-lg font-semibold"
            >Enroll for Free</UButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
