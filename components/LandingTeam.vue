<script setup>

const teamItems = ref([
  {
    image: 'annan',
    name: 'Augustine Annan (PHD) 🇺🇸',
    profession: 'Head of Data Science and AI Education <br>Msc. Mphil. PHD (Mathematical Science, Data Science)'
  },
  {
    image: 'shadrach',
    name: 'Shadrack Darku 🇬🇭',
    profession: 'Head of Cloud Computing Education Unit and Senior Data Science and AI course mentor. <br> AWS Certified Solutions Architect <br>Senior Data Scientist and Cloud- Ishango.AI'
  }
])
</script>

<template>
  <!-- Team --><div class="w-full border-t border-slate-800 bg-white">
     <div class="max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto md:text-center mb-10 lg:mb-14">
      <h2 class="text-3xl md:text-4xl md:leading-tight text-gray-900">
        Get Trained and Mentored by Experts
      </h2>
      <p class="mt-1 text-gray-900">You're never alone. Our mentors are available to guide and support you every step of the way.</p>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <div
      v-for="item in teamItems"
      :key="item.id"
        class="flex flex-col p-4 md:p-6  border border-gray-300 "
      >
        <div class="flex items-center gap-x-4">
          <img
            class="size-40"
            :src="`https://www.thriveafrica.co/images/team/${item.image}.jpeg`"
            :alt="`${item.name} - ${item.profession}`"
            loading="lazy"
            width="160"
            height="160"
            decoding="async"
          />
          <div class="grow">
            <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
            <p class="text-xs uppercase text-gray-700 " v-html="item.profession">
            </p>
          </div>
        </div>

        <p class="mt-3 text-gray-700 hidden">
          I am an ambitious workaholic, but apart from that, pretty simple person.
        </p>

      </div>
      <!-- End Col -->

    </div>
    <!-- End Grid -->
  </div>
  </div>
 
  <!-- End Team -->
</template>
