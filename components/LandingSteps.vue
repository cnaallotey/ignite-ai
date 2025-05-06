<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const stepsSection = ref(null)
const stepsHeading = ref(null)
const stepItems = ref([])

const points = ref([
 {
  img: "course",
  title: "Choose a Free Course",
  description: "Select from our easy-to-follow AI courses, available tuition-free.",
 },
 {
  img: "steps",
  title: "Pick Your Level",
  description: "Start with the essentials or dive deeper with Advanced Generative AI courses.",
 },
 {
  img: "start",
  title: "Start your course",
  description: "Each course lasts just 3 months with extra 2-months as internships, including assignments, real-world projects, and a certificate to showcase your skills.",
 },
 {
  img: "network",
  title: "Get Connected to Opportunities",
  description: "Through Werkbuddy, graduates get access to job placements, internships, and trainee roles.",
 },
]);

onMounted(() => {
  // Animate the heading
  gsap.fromTo(stepsHeading.value, 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: stepsHeading.value,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animate each step item with a stagger
  gsap.fromTo(stepItems.value, 
    { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    { 
      opacity: 1, 
      y: 0,
      scale: 1,
      stagger: 0.15, // Each item animates 0.15s after the previous one
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: stepsSection.value,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    }
  );

  // Number count animation
  stepItems.value.forEach((item, index) => {
    const numberElement = item.querySelector('.number-indicator');
    gsap.fromTo(numberElement,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 0.1,
        scale: 1,
        duration: 1,
        delay: 0.1 * (index + 1),
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    // Icon animation
    const iconContainer = item.querySelector('[data-icon-container]');
    const iconImage = item.querySelector('[data-icon-image]');
    
    gsap.fromTo(iconContainer,
      { backgroundColor: "rgba(255, 255, 255, 0.1)" },
      {
        backgroundColor: "rgba(255, 255, 255, 1)",
        duration: 0.8,
        delay: 0.2 * (index + 1),
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );
    
    gsap.fromTo(iconImage,
      { opacity: 0, rotate: -30 },
      {
        opacity: 0.7,
        rotate: 0,
        duration: 0.8,
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );
  });
});

// Clean up ScrollTrigger when component is unmounted
onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
});

// Function to add each step item to our ref array
const addStepItemRef = (el) => {
  if (el) {
    stepItems.value.push(el);
  }
};
</script>

<template>
<section ref="stepsSection" class="px-4">
  <div class="max-w-5xl mx-auto w-full border-x pt-20 border-slate-800">
    <h2 ref="stepsHeading" class="text-3xl md:text-4xl text-white tracking-tight mx-5 md:mx-10 pb-5 opacity-0">
      Build Your AI Skills in 4 Simple Steps
    </h2>
  </div>
  <div class="border-y border-slate-800">
    <div class="container max-w-5xl border-x border-slate-800 mx-auto">
      <div class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 sm:px-8 xl:px-0">
        <div
          v-for="(point, index) in points"
          :key="point.img"
          :ref="addStepItemRef"
          class="relative flex border border-slate-800 flex-col items-start col-span-6 px-6 py-8 space-y-4 overflow-hidden opacity-0"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <p class="text-[140px] number-indicator absolute -top-16 -right-0 font-black text-pink-500/10 opacity-0">
            {{ index + 1 }}
          </p>
          <div
            data-icon-container
            class="p-3 text-white bg-white"
            data-primary="pink-500"
            data-rounded="rounded-full"
          >
            <img data-icon-image :src="`/images/icon-${point.img}.svg`" class="size-8 opacity-0" />
          </div>
          <h4 class="text-lg md:text-2xl font-medium text-white">{{ point.title }}</h4>
          <p class="text-base text-white">
            {{ point.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>