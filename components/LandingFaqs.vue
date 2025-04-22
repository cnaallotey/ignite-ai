<script setup>
const faq = {
  questions: [
    {
      question: "What does it mean by Tuition-free?",
      answer: "Tuition-free means we don't charge tuition fees or school fees as commonly known in Africa."
    },
    {
      question: "Why are there administrative fees to be paid if you are tuition-free?",
      answer: "Our mission is to unlock AI skills and jobs for 1 million Africans. We do not charge tuition fees and provide live classes with dedicated world-class facilitators, learning materials, and free coaching. To help sustain our operation, we charge a token as administrative fees. Read more about why we take administrative fees here: Administrative Fees | Thrive Africa"
    },
    {
      question: "Does Ignite.AI offer job placement support and internships after training?",
      answer: "We offer job placement support and mandatory career readiness programs at the end of each course through our partnership with Werkbuddy. Students also enjoy a free LinkedIn account and CV review, as well as other forms of job placement support."
    },
    {
      question: "Does Ignite.AI offer certificates from accredited Universities after training?",
      answer: "Yes, we issue certificates through our partnership with some public universities across Africa. Certificates from our partner universities are optional and come at a cost. Ignite.AI also issues its own certificate and transcripts at no cost to the students."
    },
    {
      question: "Are Ignite.AI programs open to only Africans?",
      answer: "For now, Thrive Africa programs are open to Africans or people of African descent, as part of our mission to unlock 1 million digital skills and jobs for Africans."
    },
    {
      question: "Can Ignite.AI programs be accessed across Africa?",
      answer: "Yes, Ignite.AI programs can be accessed across all English-speaking African countries. We hope to launch soon in all Francophone African countries."
    },
    {
      question: "Are the course mentors and facilitators at Ignite.AI highly skilled?",
      answer: "Thrive researches and scouts mission-driven, highly established professionals across the world to teach and mentor students. Our course mentors work for some of the biggest AI companies across Africa and the world."
    }
  ]
};
</script>

<template>
    <div class="w-full border-y border-slate-800 px-4">
    <!-- FAQ -->
<div class="max-w-5xl py-10 lg:py-14 mx-auto border-x border-slate-800">
  <!-- Title -->
  <div class="max-w-2xl mx-auto mb-10 lg:mb-14">
    <h2 class="text-3xl md:text-4xl px-4 md:px-0 md:leading-tight text-white">Frequently Asked Questions</h2>
  </div>
  <!-- End Title -->

  <div class="max-w-2xl mx-auto divide-y divide-slate-800">
    <div v-for="item in faq.questions" :key="item.question" class="py-8 first:pt-0 last:pb-0 px-4">
      <div class="flex gap-x-5">
        <svg class="shrink-0 mt-1 size-6 text-white/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

        <div class="grow">
          <h3 class="md:text-lg font-normal text-white">
            {{ item.question }}
          </h3>
          <p class="mt-1 text-white/70">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End FAQ -->
    </div>
</template>