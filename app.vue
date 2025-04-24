<script setup>
  useSeoMeta({
    title: 'Ignite AI - Equipping 1 Million Africans with Standardized, Essential AI Skills',
    ogTitle: 'Ignite AI - Equipping 1 Million Africans with Standardized, Essential AI Skills',
    description: 'Ignite AI provides tuition-free AI education and skills training for Africans and people of African descent, with the mission to unlock 1 million digital skills and jobs across Africa.',
    ogDescription: 'Join Ignite AI to acquire standardized, essential AI skills. Tuition-free training with world-class facilitators and job placement support.',
    ogImage: '/images/ignite-ai-og-image.jpg',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Ignite AI - Essential AI Skills for Africans',
    twitterDescription: 'Tuition-free AI education with job placement support, career readiness programs, and certification options.',
    twitterImage: '/images/ignite-ai-twitter-card.jpg',
    keywords: 'AI education, Africa, tuition-free, artificial intelligence training, digital skills, job placement, career development, tech education, African tech talent',
    author: 'Ignite AI',
    ogUrl: 'https://ignite-ai.thriveafrica.co',
    ogType: 'website',
    ogSiteName: 'Ignite AI',
    themeColor: '#4285F4',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    charset: 'utf-8',
    language: 'en',
  })

  useHead({
  link: [
    { 
      rel: 'icon', 
      type: 'image/png', 
      href: '/favicon.png'  
    }
  ]
})
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppNav />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
