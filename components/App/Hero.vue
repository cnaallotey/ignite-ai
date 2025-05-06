<template>
    <div class="w-full border-b border-slate-800 px-4">
      <div class="max-w-screen-2xl flex flex-col justify-center items-center relative mx-auto w-full border-x border-slate-800 min-h-[600px] px-4">
        <AppGridContainer class="z-0 !hidden md:!grid" :canHover="true" />
        <img ref="logo" src="/images/logo-white.svg" class="h-14 mb-5 opacity-0" alt="logo">
        <h1 ref="headline" class="text-4xl md:text-6xl relative text-white max-w-4xl text-center font-medium opacity-0">
          Equipping 1 Million Africans with Standardized, Essential <br> 
          <span ref="highlight" class="text-pink-600 rounded-lg opacity-0"><code>[AI Skills]</code></span>
        </h1>
        <p ref="description" class="text-lg text-white mt-5 max-w-4xl text-center opacity-0">
          AI is not just for tech experts. They are now a universal skill set for anyone who wants to drive business success and advance their career. No coding required
        </p>
        <NuxtLink 
          ref="cta" 
          to="/#courses" 
          class="bg-pink-600 z-10 text-lg px-8 py-3 md:py-3 font-bold text-white mt-10 relative opacity-0 scale-95"
          @mouseenter="hoverIn"
          @mouseleave="hoverOut"
        >
          Enroll For Free
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useNuxtApp } from '#app'

const { $gsap } = useNuxtApp()

  
  // References for animation targets
  const logo = ref(null)
  const headline = ref(null)
  const highlight = ref(null)
  const description = ref(null)
  const cta = ref(null)
  
  // Animation sequence
  onMounted(() => {
    // Create a timeline for sequenced animations
    const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    // Animation sequence
    tl.fromTo(logo.value, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(headline.value,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }, 
      '-=0.5' // Start slightly before previous animation ends
    )
    .fromTo(highlight.value,
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8,
        background: 'rgba(219, 39, 119, 0.1)',
        padding: '2px 10px',
        borderRadius: '6px'
      }, 
      '-=0.3'
    )
    .fromTo(description.value,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(cta.value,
      { y: 20, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8,
        boxShadow: '0 10px 25px -5px rgba(219, 39, 119, 0.4)',
      },
      '-=0.4'
    )
    .to(cta.value, {
      y: -5,
      boxShadow: '0 15px 30px -5px rgba(219, 39, 119, 0.5)',
      duration: 0.4,
      repeat: 1,
      yoyo: true,
      delay: 0.5
    })
    
    // Define hover animation functions
    const hoverIn = () => {
      $gsap.to(cta.value, {
        y: -5,
        boxShadow: '0 15px 30px -5px rgba(219, 39, 119, 0.6)',
        scale: 1.05,
        duration: 0.3
      })
    }
    
    const hoverOut = () => {
      $gsap.to(cta.value, {
        y: 0,
        boxShadow: '0 10px 25px -5px rgba(219, 39, 119, 0.4)',
        scale: 1,
        duration: 0.3
      })
    }
    })
  </script>