<script setup>
const { query } = useRoute();
const loading = ref(false)
const config = useRuntimeConfig()
const success = ref(false)

const userData = ref({})

const { data: payload } = await useAsyncData("courses", async () => {
  // Fetch data from both endpoints
  const [localCourses, countriesData] = await Promise.all([
    $fetch(`${config.public.API_URL}/ignite-courses`),
    $fetch("http://api.first.org/data/v1/countries")
  ]);
  
  // Return combined or processed data as needed
  return {
    localCourses,
    countriesData
  };
});

const course = computed(()=>{
    return payload.value.localCourses.items.find(item => item.slug === query.id)
})

const submit = async () => {
  // Check if the course exists and has a valid endpoint
  loading.value = true
  if (!course.value?.endpoint) {
    console.warn('Cannot submit: course or endpoint is missing');
    loading.value = false
    return;
  }
  
  
  try {
    const response = await $fetch(course.value.endpoint, {
      method: 'POST',
      body: {
        ...userData.value
      }
    });
    success.value = true
    if (response && userData.value.country === "Ghana") {
      const sms = await $fetch("https://txtconnect.net/dev/api/sms/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer jXR4JAWebtIVgGupKv7kQNPrdm96hSyTzqDiY0nMC1a3wB2HEc",
        },
        body: {
          to: userData.value.contact.trim(),
          from: "IgniteAI",
          unicode: 0,
          sms: `Hello ${userData.value.name.split(" ")[0]}. ${course.value.sms}`,
        },
      });
    }
  } catch (error) {
    console.error('Error submitting user data:', error);
    throw error; // Re-throw or handle as needed
  } finally {
    loading.value = false
  }
};
</script>

<template>
  <div class="w-full">
    <div class="max-w-4xl mx-auto border-x border-slate-800 px-10">
      <h1 class="text-white pt-10 lg:pt-40 font-mendium text-3xl sm:text-5xl pb-5">
        {{success ? 'Thank you for registering':'Register'}} for {{ course?.name }}
      </h1>
    </div>
    <div class="border-y border-slate-800">
      <div class="max-w-4xl mx-auto border-x border-slate-800 p-10">
        <div v-if="success">
            <p
              class="text-xs mb-2 font-light text-gray-500 bg-slate-50 p-2 rounded-sm"
            >
              Please ensure whatsapp number is active. Thrive will contact you to provide
              further information via whatsapp
            </p>
            
        </div>
        <form v-else @submit.prevent="submit" class="grid gap-5">
          <div class="">
            <label for="name" class="block text-sm font-medium mb-2 text-white"
              >Full name</label
            >
            <input
              type="text"
              id="name"
              required
              v-model="userData.name"
              class="py-2.5 sm:py-4 px-4 text-white block w-full border border-slate-800  sm:text-sm focus:ouline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Jane Doe"
            />
          </div>
          <div class="">
            <label
              for="Email"
              class="block text-sm font-medium mb-2 text-white"
              >Email</label
            >
            <input
              type="email"
              id="email"
               v-model="userData.email"
              required
              class="py-2.5 sm:py-4 px-4 text-white block w-full border border-slate-800  sm:text-sm disabled:opacity-50 focus:ouline-none  disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="you@email.com"
            />
          </div>
          <div class="">
            <label
              for="phone-number"
              class="block text-sm font-medium mb-2 text-white"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phone-number"
               v-model="userData.contact"
              required
              class="py-2.5 sm:py-4 px-4 text-white block w-full border border-slate-800  sm:text-sm disabled:opacity-50 focus:ouline-none  disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="+233 xxx xxx xxx"
            />
          </div>
          <div class="">
            <label
              for="whatsapp-number"
              class="block text-sm font-medium mb-2 text-white"
              >Whatsapp Number</label
            >
            <input
              type="tel"
              id="whatsapp-number"
               v-model="userData.whatsapp"
              required
              class="py-2.5 sm:py-4 px-4 text-white block w-full border border-slate-800  sm:text-sm disabled:opacity-50 focus:ouline-none  disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="+233 xxx xxx xxx"
            />
          </div>
          <div id="country" class="relative">
            <label
              for="country"
              class="block text-sm font-medium mb-2 text-white"
              >Country</label
            >
            <input
              list="country"
              id="country"
               v-model="userData.country"
              required
              class="py-2.5 sm:py-4 px-4 text-white block w-full border border-slate-800  sm:text-sm disabled:opacity-50 focus:ouline-none  disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            />
            <datalist id="country">
                  <option
                    v-for="item in payload.countriesData.data"
                    :value="item.country"
                    :key="item.country"
                  ></option>
             </datalist>
          </div>
          <button type="submit" class="bg-pink-600 relative text-lg px-8 py-3 md:py-3 font-medium text-white">{{ loading ? 'Loading...' : 'Submit Form' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>
