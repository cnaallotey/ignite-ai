<script setup>
const content = [
    {
        id: 'lawyer',
        img: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Lawyers',
        text: 'With AI, a single lawyer can quickly review thousands of legal documents, draft accurate contracts, and prepare court strategies. Tasks once needing an entire team now take just one person—saving time and cutting costs.'
    },
    {
        id: 'doctors',
        img: 'https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Doctors',
        text: 'Doctors use AI to match patient histories with the newest medical findings, allowing faster diagnoses and better treatment plans. This reduces mistakes and improves patient care.'
    },
    {
        id: 'marketers',
        title: 'Marketers',
        img: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        text: 'Marketing professionals use AI to understand what customers want, create exciting advertisements, and launch campaigns that boost sales and customer satisfaction'
    },
    {
        id: 'teachers',
        img: 'https://images.pexels.com/photos/16094040/pexels-photo-16094040/free-photo-of-man-using-laptop-wit-chat-gpt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
        <div v-for="item in content" :key="item.id" class="size-full min-h-80 bg-cover bg-center "
        :style="`background-image: url('${item.img}')`">
          <div class="bg-black/50 h-full flex flex-col justify-end p-6 md:p-10">
            <div class="flex flex-col lg:flex-row items-start lg:items-end gap-x-4 mb-3">
            <div class="">
              <h3 class="block text-lg md:text-2xl font-semibold text-white">
                {{ item.title }}
              </h3>
            </div>
          </div>
          <p class="text-white">
            {{ item.text }}
          </p>
          </div>
        </div>
      </div>
      <div class="mx-auto pt-10">
        <p class="font-medium text-2xl text-center">And Many more...</p>
      </div>
    </div>
    <!-- End Icon Blocks -->
  </div>
</template>
