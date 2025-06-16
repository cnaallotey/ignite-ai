<template>
    <div>
      <div class="w-full px-4 relative">
        <div
          class="max-w-6xl px-4 md:px-10 border-x border-slate-800 mx-auto z-10 flex flex-col gap-10 md:gap-14"
        >
        <div class="flex flex-col justify-between sticky top-20 bg-black z-[1000] sm:flex-row sm:items-center gap-5 py-8 md:py-10 border-b border-slate-800">
            <div class="grid">
            <p class="text-sm font-normal text-white">Just pay Admin Fee</p>
            <h3 class="text-3xl md:text-5xl font-semibold text-white mt-4">Gh₵ {{course.price}}</h3>
            <h3 class="text-lg md:text-2xl font-semibold text-pink-600/80 line-through">Ghc 30,000</h3>
          </div>
         <div class="relative">
            <NuxtLink external :to="`/course/register?id=${course.slug}`" class="bg-pink-600 text-base px-8 py-2 md:py-2 font-bold text-white">Enroll For Free</NuxtLink>
         </div>
          </div>
          <div class="lg:w-full mx-auto mb-10 md:mb-20 lg:max-w-auto lg:mx-0 flex flex-col gap-10 order-2">
            <div v-if="splitpoints?.expectations" class="flex flex-col gap-2">
              <div class="text-pink-500 text-2xl font-semibold">What to Expect?</div>
      
              <p class="text-white inline-flex" v-for="expectation in splitpoints?.expectations"
              :key="expectation">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-green-500 mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg> </span
                ><span>{{ expectation }}</span>
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-pink-500 text-2xl font-semibold">
                Why become {{ course["career-name"] }}?
              </div>
              <p class="text-white md:text-lg">{{ course.reason }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-pink-500 text-2xl font-semibold">
                Demand for {{ course.role }} Jobs
              </div>
              <p class="text-white md:text-lg">{{ course.demand }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-pink-500 text-2xl font-semibold">Salary Range</div>
              <p class="text-white md:text-lg">{{ course.salary }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-pink-500 text-2xl font-semibold xl:whitespace-nowrap">What you will learn</div>
              <p class="text-white md:text-lg inline-flex" v-for="item in course.studentobjectives?.split('|')" :key="item">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-green-500 mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg> </span
                ><span>{{ item }}</span>
              </p>

              <div class="bg-white/5 flex flex-col items-center p-10 mt-10">
              <div class="text-white text-lg md:text-2xl text-center font-semibold">Master the latest, essential technologies and tools</div>
              <div class="flex flex-wrap justify-center gap-5 mt-6 items-baseline">
                <img v-for="item in course['tool-image']" :key="item.url" class="max-h-14 md:max-h-16 w-auto" :src="item.url" :alt="item.alt">  
              </div>
            </div>
  
              <p class="mt-5 text-white md:text-lg">Discover more about the course in our detailed brochure.</p>
              <a
  
              v-if="course.open"
                :href="`/course/register?id=${course.slug}`"
                class="inline-flex justify-center  border-2 border-pink-600 px-5 py-3 text-base font-bold text-pink-600 hover:bg-pink-600 hover:text-white w-fit"
              >
                Checkout Course Brochure
              </a>
            </div>
            <div class="p-4 md:p-6 bg-pink-500/10 flex-col gap-2">
              <div class="text-pink-500 text-2xl font-semibold">
                Go Beyond Learning – Build the Work Experience Required to Land Your First Job with Thrive Internships
              </div>
              <div class="flex flex-col gap-2 mt-4">
                <p class="text-white md:text-lg inline-flex gap-2" v-for="item in program" :key="item.name">
                  <span>
                    <Icon :name="item.icon" class="w-6 h-6 text-pink-500" /> </span
                  ><span>{{ item.name }}</span>
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-pink-500 text-2xl font-semibold">Admission Criteria</div>
              <p class="text-white md:text-lg inline-flex" v-for="item in course.studentcriteria?.split('|')" :key="item">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-green-500 mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg> </span
                ><span>{{ item }}</span>
              </p>
            </div>
          </div>
          <div
            class="w-full !hidden max-w-6xl fixed border-0 z-[1000] flex flex-col gap-5 items-center order-1"
          >
           <div class="text-pink-600 rounded-lg flex flex-col items-center text-center bg-slate-900 w-full p-6">
            <div class="px-2 rounded-md text-blue-500 uppercase">No tuition-free</div>
            <p class="text-2xl font-normal text-white">Just pay Admin Fee</p>
            <h3 class="text-5xl font-semibold text-pink-600 mt-4">Gh₵ 150</h3>
            <h3 class="text-2xl font-semibold text-pink-600/80 line-through">Ghc 5,000</h3>
            <p class="text-2xl font-semibold text-white/80">or its equivalent in your country’s currency</p>
            <p class="text-sm leading-normal text-center text-gray-200 mt-4">
              Read more about our administrative fees <span><a href="/administrative-fees" class="text-blue-500 hover:underline cursor-pointer" target="_blank" rel="noreferrer">here</a></span>.
            </p>
           </div>
            <!-- <div class="p-2 bg-slate-50 rounded-md text-blue-500">100% tuition-free</div>
            <p class="text-sm leading-normal text-center text-gray-500">
              Please note that we don’t charge school fees or tuition fees. We charge a mandatory monthly token of 70 cedis or 100cedis upfront fees for the entire 3 month duration of the course as administrative fees.
              Read more about our administrative fees <span><a href="/administrative-fees" class="text-blue-500 hover:underline cursor-pointer" target="_blank" rel="noreferrer">here</a></span>.
            </p> -->
            <a
              :href="`/campus/courses/register?code=${course._id}`"
              class="py-3 px-5 w-full hidden lg:flex items-center justify-center md:col-span-2 rounded-md text-sm font-bold bg-pink-500 hover:bg-pink-600 transition-colors ease-linear duration-150 text-white inline-flex justify-center items-center gap-2 group"
              :class="{
                  'opacity-50 cursor-not-allowed !pointer-events-none': !course.admissionopencampus,
                }"
            >
            <span>{{!course.admissionopencampus ? 'Admissions currently closed' : 'Enroll For Free'}}</span>
              <Icon
              v-if="course.admissionopencampus"
                name="material-symbols:arrow-outward"
                class="w-4 h-auto group-hover:translate-x-1 group-hover:-translate-y-1 transform transition-all duration-150 ease-linear"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    course: Object,
  });
  
  const program = [
    {
      name: "Internship Project: Solve a real-world problem.",
      icon: "ph:office-chair",
    },
    {
      name: "Work Experience: Gain hands-on mentorship.",
      icon: "ph:briefcase",
    },
    {
      name: "Career Prep: Optimize LinkedIn, CV, and interview skills.",
      icon: "ph:linkedin-logo",
    },
    {
      name: "Showcase: Present to industry experts.",
      icon: "material-symbols:account-circle-full",
    },
    {
      name: "Certification: Earn a recognized credential.",
      icon: "fluent:certificate-24-regular",
    },
  ];
  const modal = ref(false)

  const splitpoints = computed(() => {
      const objectives = props.course.objective?.split("|")
      const expectations = props.course.expectation?.split("|")
    return { expectations, objectives };
  });
  
  </script>
  
  <style scoped>
  .criteria:deep(ul) {
    @apply list-disc;
  }
  </style>