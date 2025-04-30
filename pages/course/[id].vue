<script setup>
const {params} = useRoute()
const config = useRuntimeConfig()
const { data: courses } = await useAsyncData("courses", () =>
  $fetch(`${config.public.API_URL}/ignite-courses`)
);

const course = computed(()=>{
    return courses.value.items.find(item => item.slug === params.id)
})
</script>
<template>
    <div class="w-full border-b border-slate-800">
        <CourseHero v-bind="{course}" />
        <CourseBody v-bind="{course}" />
    </div>
</template>