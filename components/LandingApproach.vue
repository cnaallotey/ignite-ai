<script setup>
const benefits = [
  {
    title: "Prompt Effectively",
    description: "Develop the skill to articulate your needs precisely, empowering you to communicate clearly with AI tools."
  },
  {
    title: "Automate Professionally",
    description: "Use prompting techniques to drive professional AI workflows that automate tasks, saving you time and money."
  },
  {
    title: "Achieve Better Results",
    description: "Harness the power of clear, strategic prompting to enhance your daily work performance and advance your career."
  }
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
                            Our Approach – Beyond Just AI Tools 
      </h2>
      <p class="text-white"><strong>Prompting:</strong> At its core, effective AI usage is about clearly telling the AI exactly what you need. It's not about complicated tools or coding—it's about mastering the art of prompting: communicating clearly to achieve your goals.</p>
                    </div>

                    <div class="w-full min-h-[500px] border-l border-slate-800 p-4 md:p-10 flex flex-col gap-4 md:gap-6">
                        <p class="text-white">
                            With our program, you’ll learn step-by-step how to:
                        </p>
                        <div v-for="item in benefits" :key="item.title" class="border border-slate-800 min-h-20 p-4 text-left flex items-center justify-center">
                            <h3 class="font-medium text-lg text-white"><strong class="text-pink-500 text-lg">{{ item.title }}: </strong><br>{{ item.description }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-5xl mx-auto w-full h-20 md:h-40 border-x border-gray-800"></div>
    </div>
</template>