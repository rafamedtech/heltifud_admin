<script setup lang="ts">
// import noData from '@/assets/img/no-data.svg';
const downloadedMenu = ref<WeeklyMenu>([]);
const downloadLoading = ref(false);
const saveLoading = ref(false);

const { data: currentMenu } = await useFetch<Menu>('https://heltifud.com/api/current-menu');

const toast = useToast();
async function downloadMenu() {
  downloadLoading.value = true;
  // setTimeout(() => {
  //   downloadLoading.value = false;
  // }, 2000);

  try {
    const data = await $fetch<WeeklyMenu>('/api/menu/new');
    downloadedMenu.value = data;

    toast.add({ title: 'El menú se ha descargado correctamente' });
  } catch (error) {
    toast.add({ title: 'Error', description: 'No se pudo descargar el menú' });
  } finally {
    downloadLoading.value = false;
  }
}

async function saveMenu() {
  saveLoading.value = true;
  setTimeout(() => {
    saveLoading.value = false;
  }, 2000);

  console.log('save menu', downloadedMenu.value);

  // try {
  //   await $fetch('/api/save-menu', {
  //     method: 'POST',
  //     body: JSON.stringify(downloadedMenu.value),
  //   });

  toast.add({ title: 'El menú se ha guardado correctamente' });
  // } catch (error) {
  //   toast.add({ title: 'Error', description: 'No se pudo guardar el menú' });
  // }
}
</script>

<template>
  <main>
    <UContainer as="section" :ui="{ base: 'py-8', constrained: 'max-w-6xl' }">
      <Heading title="Actualizar menú" />

      <section class="flex gap-2">
        <UButton
          label="Descargar"
          size="lg"
          icon="i-heroicons-arrow-down-tray"
          :loading="downloadLoading"
          @click="downloadMenu"
        />
        <UButton label="Guardar" size="lg" icon="i-heroicons-cloud-arrow-up" :loading="saveLoading" @click="saveMenu" />
      </section>

      <section class="flex w-full justify-between">
        <section class="mt-8">
          <h3 class="text-2xl font-bold">Nuevo menu</h3>

          <section class="pb-8 pt-4 px-4 flex justify-center gap-4 min-w-80 max-w-5xl h-full overflow-x-scroll">
            <UCard class="w-full">
              <section class="grid place-content-center h-[30rem] gap-4">
                <section v-if="downloadLoading">
                  <Icon name="svg-spinners:3-dots-bounce" size="34" class="text-primary" />
                </section>

                <section v-if="!downloadLoading && !downloadedMenu.length">
                  <h4>Descarga el menú para poder verlo aquí</h4>
                </section>

                <Tabs :items="downloadedMenu" v-if="downloadedMenu.length && !downloadLoading" />
              </section>
            </UCard>
          </section>
        </section>
        <section class="mt-8">
          <h3 class="text-2xl font-bold">Menu actual</h3>

          <section class="pb-8 pt-4 px-4 flex justify-center gap-4 min-w-80 max-w-5xl h-full overflow-x-scroll">
            <UCard class="w-full">
              <section class="grid place-content-center h-[30rem] gap-4">
                <Tabs :items="downloadedMenu" v-if="downloadedMenu.length && !downloadLoading" />
                <section v-if="downloadLoading">
                  <Icon name="svg-spinners:3-dots-bounce" size="32" class="text-primary" />
                </section>
                <section v-if="!downloadLoading && !downloadedMenu.length">
                  <h4>Descarga el menú para poder verlo aquí</h4>
                </section>
              </section>
            </UCard>
          </section>
        </section>
      </section>

      <!-- <section class="mt-8">
        <h3 class="text-2xl text-primary">Menu actual</h3>

        <section class="pb-8 pt-4 flex gap-4 place-items-center max-w-6xl overflow-x-scroll">
          <UCard
            v-for="item in currentMenu?.weekMenus"
            class="py-4 relative min-w-[20rem]"
            :ui="{ background: 'bg-gray-900', rounded: 'rounded-xl' }"
          >
            <img :src="background" class="absolute w-full h-full object-cover inset-0 rounded-xl z-0" />
            <section class="relative z-10">
              <h3 class="text-3xl text-center font-bold text-white">{{ item.dayOfWeek }}</h3>
              <section class="flex flex-col gap-2">
                <Course label="Desayuno" :item="item.breakfast" />
                <Course label="Comida" :item="item.lunch" />
                <Course label="Cena" :item="item.dinner" />
              </section>
            </section>
          </UCard>
        </section>
      </section> -->
    </UContainer>
  </main>
</template>
