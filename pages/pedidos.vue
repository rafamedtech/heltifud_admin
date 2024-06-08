<script setup lang="ts">
const isLoading = ref(false);

const searchQuery = ref('');

const selectedStatus = ref<SelectedStatus[]>([]);

const deliveryDate = [
  {
    key: 'Domingo',
    label: 'Domingo',
    value: false,
  },
  {
    key: 'Lunes',
    label: 'Lunes',
    value: false,
  },
  {
    key: 'Miércoles',
    label: 'Miércoles',
    value: true,
  },
  {
    key: 'Jueves',
    label: 'Jueves',
    value: false,
  },
  {
    key: 'Viernes',
    label: 'Viernes',
    value: false,
  },
];

const resetFilters = () => {
  searchQuery.value = '';
  selectedStatus.value = [];
};

const tableColumns = [
  {
    key: 'id',
    label: '#',
    sortable: true,
  },
  {
    key: 'name',
    label: 'Nombre',
    sortable: true,
  },

  {
    key: 'actions',
    label: '',
  },
];

const filteredOrders = ref([]);

const orders = ref([
  {
    id: 1,
    name: 'Carmen',
    deliveryDates: ['Domingo', 'Miércoles'],
    menu: [
      {
        id: 1,
        day: 'Lunes',
        breakfast: ['Pancakes de vainilla y canela', '', ''],
        lunch: ['Ensalada de quínoa con tofu', '', ''],
        dinner: ['', '', ''],
        snacks: ['Licuado de mango y nuez', 'Dátil con PB'],
      },
      {
        id: 2,
        day: 'Martes',
        breakfast: ['Huevos con papa', '', ''],
        lunch: ['Ceviche de soya', '', ''],
        dinner: ['', '', ''],
        snacks: ['Yogurt con dátil y fresa', 'Mango, pretzels y nueces'],
      },
      {
        id: 3,
        day: 'Miércoles',
        breakfast: ['Huevos revueltos', '', ''],
        lunch: ['Tacos de guisado de garbanzos', '', ''],
        dinner: ['', '', ''],
        snacks: ['Licuado de plátano', 'Pan integral con fresas'],
      },
      {
        id: 4,
        day: 'Jueves',
        breakfast: ['Tortilla con huevo', '', ''],
        lunch: ['Enfrijoladas', '', ''],
        dinner: ['', '', ''],
        snacks: ['Yogurt con melón', 'Naranja, palomitas y nueces'],
      },
      {
        id: 5,
        day: 'Viernes',
        breakfast: ['Cubitos de pan francés con frutas', '', ''],
        lunch: ['Ceviche de garbanzos', '', ''],
        dinner: ['', '', ''],
        snacks: ['Licuado de fresas y almendras', 'Melón con granola y nueces'],
      },
      {
        id: 6,
        day: 'Sábado',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 7,
        day: 'Domingo',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
    ],
  },
  {
    id: 2,
    name: 'Erik',
    deliveryDates: ['Domingo', 'Miércoles'],
    menu: [
      {
        id: 1,
        day: 'Lunes',
        breakfast: ['Burritos de huevo a la mexicana extra', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 2,
        day: 'Martes',
        breakfast: ['Pancakes verdes extra', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 3,
        day: 'Miércoles',
        breakfast: ['Omelette de champiñones', 'Papas campesinas', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 4,
        day: 'Jueves',
        breakfast: ['Tortilla con huevo extra', 'Frijol entero', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 5,
        day: 'Viernes',
        breakfast: ['Shakshuka', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 6,
        day: 'Sábado',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 7,
        day: 'Domingo',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
    ],
  },
  {
    id: 3,
    name: 'Caro',
    deliveryDates: ['Domingo', 'Miércoles'],
    menu: [
      {
        id: 1,
        day: 'Lunes',
        breakfast: ['Burritos de huevo a la mexicana', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 2,
        day: 'Martes',
        breakfast: ['Pancakes verdes', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 3,
        day: 'Miércoles',
        breakfast: ['Omelette de champiñones', 'Papas campesinas', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 4,
        day: 'Jueves',
        breakfast: ['Pan francés', 'Fruta de temporada', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 5,
        day: 'Viernes',
        breakfast: ['Shakshuka', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 6,
        day: 'Sábado',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 7,
        day: 'Domingo',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
    ],
  },
  {
    id: 4,
    name: 'Ricardo',
    deliveryDates: ['Lunes', 'Miércoles'],
    menu: [
      {
        id: 1,
        day: 'Lunes',
        breakfast: ['Burritos de huevo a la mexicana', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 2,
        day: 'Martes',
        breakfast: ['Pancakes verdes', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 3,
        day: 'Miércoles',
        breakfast: ['Omelette de champiñones', 'Papas campesinas', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 4,
        day: 'Jueves',
        breakfast: ['Pan francés', 'Fruta de temporada', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 5,
        day: 'Viernes',
        breakfast: ['Shakshuka', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 6,
        day: 'Sábado',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 7,
        day: 'Domingo',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
    ],
  },
  {
    id: 5,
    name: 'Denise',
    deliveryDates: ['Lunes', 'Jueves'],
    menu: [
      {
        id: 1,
        day: 'Lunes',
        breakfast: ['Burritos de huevo a la mexicana', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 2,
        day: 'Martes',
        breakfast: ['Pancakes verdes', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 3,
        day: 'Miércoles',
        breakfast: ['Omelette de champiñones', 'Papas campesinas', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 4,
        day: 'Jueves',
        breakfast: ['Tortilla con huevo', 'Frijol entero', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 5,
        day: 'Viernes',
        breakfast: ['Shakshuka', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 6,
        day: 'Sábado',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 7,
        day: 'Domingo',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
    ],
  },
  {
    id: 6,
    name: 'Daniel P.',
    deliveryDates: ['Domingo', 'Miércoles'],
    menu: [
      {
        id: 1,
        day: 'Lunes',
        breakfast: ['Burritos de huevo a la mexicana', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 2,
        day: 'Martes',
        breakfast: ['Pancakes verdes', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 3,
        day: 'Miércoles',
        breakfast: ['Omelette de champiñones', 'Papas campesinas', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 4,
        day: 'Jueves',
        breakfast: ['Pan francés', 'Fruta de temporada', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 5,
        day: 'Viernes',
        breakfast: ['Shakshuka', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 6,
        day: 'Sábado',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 7,
        day: 'Domingo',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
    ],
  },
  {
    id: 7,
    name: 'Ángel',
    deliveryDates: ['Domingo', 'Miércoles'],
    menu: [
      {
        id: 1,
        day: 'Lunes',
        breakfast: ['Burritos de huevo a la mexicana', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 2,
        day: 'Martes',
        breakfast: ['Pancakes verdes', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 3,
        day: 'Miércoles',
        breakfast: ['Omelette de champiñones', 'Papas campesinas', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 4,
        day: 'Jueves',
        breakfast: ['Pan francés', 'Fruta de temporada', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 5,
        day: 'Viernes',
        breakfast: ['Shakshuka', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 6,
        day: 'Sábado',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 7,
        day: 'Domingo',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
    ],
  },
  {
    id: 8,
    name: 'Vicente',
    deliveryDates: ['Miércoles', 'Viernes'],
    menu: [
      {
        id: 1,
        day: 'Lunes',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 2,
        day: 'Martes',
        breakfast: ['', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 3,
        day: 'Miércoles',
        breakfast: ['Omelette de champiñones', 'Papas campesinas', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 4,
        day: 'Jueves',
        breakfast: ['Pan francés', 'Fruta de temporada', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 5,
        day: 'Viernes',
        breakfast: ['Shakshuka', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 6,
        day: 'Sábado',
        breakfast: ['Burritos de huevo a la mexicana', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
      {
        id: 7,
        day: 'Domingo',
        breakfast: ['Pancakes verdes', '', ''],
        lunch: ['', '', ''],
        dinner: ['', '', ''],
        snacks: ['', ''],
      },
    ],
  },
]);

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const pageTotal = computed(() => orders.value.length);

const page = ref(1);
const pageCount = ref(10);

const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1);
const pageTo = computed(() => Math.min(page.value * pageCount.value, pageTotal.value));
</script>

<template>
  <main>
    <section class="py-8">
      <article>
        <h1 class="text-primary text-3xl">Pedidos</h1>
        <p class="text-lg">En esta sección se mostrarán los pedidos realizados por los clientes.</p>
      </article>
    </section>

    <section>
      <UCard class="mx-auto w-full">
        <template #header>
          <div class="flex flex-col gap-3 py-3 md:flex-row md:items-center md:px-4">
            <h3>Filtrar</h3>
            <UInput
              v-model="searchQuery"
              icon="i-heroicons-magnifying-glass-20-solid"
              placeholder="Buscar..."
              size="xl"
            />

            <section class="flex justify-between gap-3">
              <USelectMenu
                v-model="selectedStatus"
                :options="deliveryDate"
                multiple
                placeholder="Entrega"
                class="w-full md:w-40"
                size="xl"
              >
                <template #label>
                  <span v-if="selectedStatus.length" class="truncate">{{
                    `${selectedStatus.length} seleccionada${selectedStatus.length > 1 ? 's' : ''}`
                  }}</span>
                  <span v-else class="text-gray-500 truncate">Entrega</span>
                </template>
              </USelectMenu>
              <USelectMenu
                v-model="selectedStatus"
                :options="deliveryDate"
                multiple
                placeholder="Entrega"
                class="w-full md:w-40"
                size="xl"
              >
                <template #label>
                  <span v-if="selectedStatus.length" class="truncate">{{
                    `${selectedStatus.length} seleccionada${selectedStatus.length > 1 ? 's' : ''}`
                  }}</span>
                  <span v-else class="text-gray-500 truncate">Entrega</span>
                </template>
              </USelectMenu>

              <UButton
                icon="i-heroicons-funnel"
                color="gray"
                :disabled="searchQuery === '' && selectedStatus.length === 0"
                @click="resetFilters"
              >
                Reset
              </UButton>
            </section>
          </div>
        </template>

        <UTable
          :empty-state="{
            icon: 'i-heroicons-document-text',
            label: 'No hay pedidos',
          }"
          :columns="tableColumns"
          :rows="orders"
          :loading="isLoading"
          :loading-state="{
            icon: 'i-heroicons-arrow-path-20-solid',
            label: 'Cargando...',
          }"
          :sort-button="{
            color: 'primary',
            variant: 'ghost',
            square: false,
          }"
          :ui="{
            th: { color: 'text-primary' },
            default: { sortButton: { color: 'primary' } },
          }"
          class="hidden w-full md:block"
        >
          <template #invoiceDate-data="{ row }">
            {{ new Date(row.invoiceDate).toLocaleString('es-MX', dateOptions) }}
          </template>
          <template #invoiceTotal-data="{ row }">
            {{
              new Intl.NumberFormat('es-MX', {
                style: 'currency',
                currency: 'MXN',
              }).format(row.invoiceTotal)
            }}
          </template>
          <template #status-data="{ row }">
            <UBadge
              :color="
                row.status === 'Vendida'
                  ? 'green'
                  : row.status === 'Pendiente'
                  ? 'yellow'
                  : row.status === 'Borrador'
                  ? 'gray'
                  : 'red'
              "
              variant="solid"
              >{{ row.status }}</UBadge
            >
          </template>

          <template #actions-data="{ row }">
            <UButton variant="ghost" icon="i-heroicons-arrow-top-right-on-square" to="/" label="Abrir" />
          </template>
        </UTable>

        <section class="flex flex-col gap-8 md:hidden">
          <NuxtLink v-for="order in orders" to="/">
            <UCard :ui="{ background: 'dark:bg-dark-medium' }">
              <template #header>
                <section class="flex items-center justify-between">
                  <span class="text-primary"> #{{ order.id }} </span>
                  <!-- <span class="text-xs"> Date </span> -->
                </section>
              </template>
              <div class="flex items-center justify-between py-3">
                <h3>{{ order.name }}</h3>
                <!-- <UBadge
                    :color="
                      invoice.status === 'Vendida'
                        ? 'green'
                        : invoice.status === 'Pendiente'
                          ? 'yellow'
                          : invoice.status === 'Borrador'
                            ? 'gray'
                            : 'red'
                    "
                    variant="solid"
                    >{{ invoice.status }}</UBadge
                  > -->
              </div>

              <template #footer>
                <section class="flex items-center justify-end">
                  <!--<span class="text-primary font-bold">
                       {{
                        new Intl.NumberFormat("es-MX", {
                          style: "currency",
                          currency: "MXN",
                        }).format(invoice.invoiceTotal)
                      }}
                    </span> -->
                </section>
              </template>
            </UCard>
          </NuxtLink>
        </section>

        <section v-if="!orders.length" class="flex flex-col items-center gap-2 md:hidden">
          <Icon name="heroicons:document-text" size="32" color="gray" />
          <span>No hay pedidos</span>
        </section>

        <template #footer>
          <div class="flex flex-wrap items-center justify-between" v-if="pageTotal > 0">
            <div>
              <span class="text-sm leading-5">
                Mostrando
                <span class="font-medium">{{ pageFrom }}</span>
                al
                <span class="font-medium">{{ pageTo }}</span>
                de
                <span class="font-medium">{{ pageTotal }}</span>
                resultados
              </span>
            </div>

            <UPagination
              v-model="page"
              :page-count="pageCount"
              :total="pageTotal"
              :ui="{
                wrapper: 'flex items-center gap-1',
                rounded: '!rounded-full min-w-[32px] justify-center',
                default: {
                  activeButton: {
                    variant: 'outline',
                  },
                },
              }"
            />
          </div>
        </template>
      </UCard>
    </section>
  </main>
</template>
