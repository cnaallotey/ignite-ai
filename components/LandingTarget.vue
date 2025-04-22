<script setup>
const audience = [
  "Students",
  "Graduates",
  "Professionals",
  "Business Owners",
  "Anyone looking to step into advanced AI roles."
];
</script>
<template>
    <div class="w-full">
        <div class="max-w-5xl mx-auto w-full h-20 md:h-40 border-x border-gray-800"></div>
        <div class="w-full border-y border-gray-800 px-4">
            <div class="max-w-5xl mx-auto w-full border-x border-gray-800">
                <div class="grid w-full md:grid-cols-2">
                    <div class="w-full h-full flex flex-col justify-center p-4 md:p-10">
                        <h2 class="text-3xl md:text-4xl text-left text-white tracking-tight pb-5">
                            AI Skills for Everyone:
      </h2>
      <p class="text-white">Our courses are open to all:</p>
                    </div>

                    <div class="w-full h-[500px] border-l border-slate-800 p-4 md:p-10 flex flex-col gap-4 md:gap-6">
                        <div v-for="item in audience" :key="item" class="border border-slate-800 min-h-20 p-4 md:text-center flex items-center md:justify-center">
                            <h3 class="font-medium text-lg text-white">{{ item }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-5xl mx-auto w-full h-20 md:h-40 border-x border-gray-800"></div>
    </div>
</template>