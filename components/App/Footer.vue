<template>
    <div class="w-full px-4">
        <footer class="mt-auto w-full max-w-5xl border-x border-slate-800 py-20 px-4 sm:px-6 lg:px-8 mx-auto">
  <!-- Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
    <div>
      <NuxtLink class="flex-none text-xl font-semibold text-black focus:outline-hidden dark:text-white" to="/" aria-label="Brand">
        <img src="/images/top-logo.svg" class="h-10 lg:h-16 mx-auto md:mx-0" alt="">
      </NuxtLink>
    </div>
    <!-- End Col -->


    <!-- Social Brands -->
    <div class="md:text-end space-x-2">
      
      <NuxtLink class="size-8 hidden justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" to="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      </NuxtLink>
    </div>
    <!-- End Social Brands -->


    <ul class="text-center">
      <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
        <NuxtLink external to="/#" class="inline-flex gap-x-2 text-sm text-white hover:text-gray-300 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
          About
        </NuxtLink>
      </li>
      <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
        <NuxtLink external to="/#courses" class="inline-flex gap-x-2 text-sm text-white hover:text-gray-300 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">
          Courses
        </NuxtLink>
      </li>
    </ul>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</footer>
    </div>
</template>