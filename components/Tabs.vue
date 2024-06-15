<script setup lang="ts">
const { items } = defineProps<{
  items: any[];
}>();

const tabItems = computed(() =>
  items.map((item) => {
    return {
      key: item.dayOfWeek,
      label: item.dayOfWeek,
      ...item,
    };
  })
);
</script>

<template>
  <UTabs :items="tabItems" class="w-full max-h-[30rem] h-full">
    <!-- :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }" -->
    <template #default="{ item }">
      <span class="truncate"> {{ item.label }}</span>
    </template>

    <template #item="{ item }">
      <UCard
        class="min-w-[20rem] max-w-[20rem] mx-auto px-8 py-2"
        :ui="{ background: 'bg-gray-900', rounded: 'rounded-xl', body: { padding: '' } }"
      >
        <!-- <img :src="background" class="absolute w-full h-full object-cover inset-0 rounded-xl z-0" /> -->
        <section>
          <h3 class="text-3xl text-center font-bold text-white">{{ item.dayOfWeek }}</h3>
          <section class="flex flex-col gap-2">
            <Course label="Desayuno" :item="item.breakfast" />
            <Course label="Comida" :item="item.lunch" />
            <Course label="Cena" :item="item.dinner" />
          </section>
        </section>
      </UCard>
    </template>
  </UTabs>
</template>
