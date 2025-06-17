<template>
   <AppHero />
   <AppCaption />
   <LandingVideo />
   <LandingWhy />
   <LandingSteps />
   <LandingApproach />
   <LandingRoles />
   <LandingTeam />
   <AppPromo />
   <LandingTarget />
   <LandingCourses />
   <LandingFaqs />
</template>

<script setup>
definePageMeta({
  swr: true,
  cache: {
    maxAge: 60 * 60 * 24, // 24 hours
    staleWhileRevalidate: 60 * 60 * 24 * 7 // 7 days
  }
})
</script>