<script setup>
const roles = [
  {
    title: 'AI Prompt Engineer',
    description: 'Design and optimize prompts for AI systems to achieve desired outcomes.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <path d="M8 10h.01"/>
      <path d="M12 10h.01"/>
      <path d="M16 10h.01"/>
    </svg>`
  },
  {
    title: 'AI Automation Specialist',
    description: 'Implement AI solutions to automate business processes and workflows.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4"/>
      <path d="M12 18v4"/>
      <path d="m4.93 4.93 2.83 2.83"/>
      <path d="m16.24 16.24 2.83 2.83"/>
      <path d="M2 12h4"/>
      <path d="M18 12h4"/>
      <path d="m4.93 19.07 2.83-2.83"/>
      <path d="m16.24 7.76 2.83-2.83"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>`
  },
  {
    title: 'Generative AI Consultant',
    description: 'Guide organizations in implementing and optimizing generative AI solutions.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 6.1H3"/>
      <path d="M21 12.1H3"/>
      <path d="M15.1 18H3"/>
      <path d="M21 6.1v12"/>
      <path d="M15.1 6.1v12"/>
    </svg>`
  },
  {
    title: 'No-Code AI Solutions Developer',
    description: 'Build AI-powered applications without traditional coding using no-code platforms.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M8 7h.01"/>
      <path d="M12 7h.01"/>
      <path d="M16 7h.01"/>
    </svg>`
  },
  {
    title: 'AI Product Assistant Developer',
    description: 'Create AI assistants and chatbots to enhance product experiences.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/>
      <path d="M8 15v1a4 4 0 0 0 8 0v-1"/>
      <path d="M12 19v4"/>
      <path d="M8 23h8"/>
    </svg>`
  }
];
</script>

<template>
  <div class="w-full">
    
    <div class="w-full border-y border-gray-800 px-4">
      <div class="max-w-5xl mx-auto w-full border-x border-gray-800">
        <div class="w-full h-full flex flex-col justify-center p-4 md:p-10">
          <h2 class="text-3xl md:text-4xl text-left text-white tracking-tight pb-5">
            AI Job Roles You Can Pursue After This Program
          </h2>
          <p class="text-white mb-8">Roles can be tailored to your specific industry or career path.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="role in roles"
              :key="role.title"
              class="border border-slate-800 p-6 hover:border-pink-500 transition-colors duration-300"
            >
              <div class="mb-4" v-html="role.icon"></div>
              <h3 class="text-xl font-medium text-white mb-2">{{ role.title }}</h3>
              <p class="text-gray-400">{{ role.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto w-full h-20 md:h-40 border-x border-gray-800"></div>
  </div>
</template> 