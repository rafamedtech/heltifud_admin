<script setup lang="ts">
const { title, description, cover } = defineProps<{
  title?: string;
  description?: string;
  cover?: string;
}>();
</script>

<template>
  <div>
    <section>
      <h2 class="text-primary w-fit text-3xl md:text-4xl pb-2">
        {{ title }}
      </h2>
      <span v-if="description">{{ description }}</span>
    </section>
  </div>
</template>
