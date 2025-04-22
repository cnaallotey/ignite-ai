<script setup>
const content = [
    {
        id: 'lawyer',
        title: 'Lawyers',
        text: 'With AI, a single lawyer can quickly review thousands of legal documents, draft accurate contracts, and prepare court strategies. Tasks once needing an entire team now take just one person—saving time and cutting costs.'
    },
    {
        id: 'doctors',
        title: 'Doctors',
        text: 'Doctors use AI to match patient histories with the newest medical findings, allowing faster diagnoses and better treatment plans. This reduces mistakes and improves patient care.'
    },
    {
        id: 'marketers',
        title: 'Marketers',
        text: 'Marketing professionals use AI to understand what customers want, create exciting advertisements, and launch campaigns that boost sales and customer satisfaction'
    },
    {
        id: 'teachers',
        title: 'Teachers and Researchers:',
        text: 'Educators use AI to customize lessons to each student\'s needs, helping them learn better. Researchers use AI to quickly review large amounts of academic data, speeding up important discoveries.'
    }
]
</script>

<template>
     <div class="max-w-5xl mx-auto w-full h-20 md:h-40 border-x border-gray-800"></div>
  <div class="w-full bg-white">
    <div class="max-w-5xl mx-auto py-20 border-x border-black/20">
        <div class="max-w-2xl mb-5 mx-6 md:mx-10">
    <h2 class="text-3xl md:text-4xl md:leading-tight text-black">How AI is Changing Every Career</h2>
    <p class="mt-2">AI is transforming jobs everywhere by making complex tasks simpler, faster, and more affordable. Here are some easy-to-understand examples:
    </p>
  </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-2 items-center border-y divide  border-black/20">
        <!-- Card -->
        <div v-for="item in content" :key="item.id" class="size-full bg-white p-6 md:p-10 ">
          <div class="flex items-center gap-x-4 mb-3">
            <div
              class=" hidden justify-center items-center size-15.5 border-4 border-gray-50 bg-gray-100 dark:border-gray-900 dark:bg-gray-800"
            >
              <svg
                class="shrink-0 size-6 text-blue-600 dark:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" />
                <circle cx="17.5" cy="10.5" r=".5" />
                <circle cx="8.5" cy="7.5" r=".5" />
                <circle cx="6.5" cy="12.5" r=".5" />
                <path
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                />
              </svg>
            </div>
            <div class="shrink-0">
              <h3 class="block text-lg md:text-2xl font-semibold text-gray-800 dark:text-white">
                {{ item.title }}
              </h3>
            </div>
          </div>
          <p class="text-gray-600 dark:text-neutral-400">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
    <!-- End Icon Blocks -->
  </div>
</template>
