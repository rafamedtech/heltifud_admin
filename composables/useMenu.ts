import type { MenuOutline, DayMenuOutline, MenuFromDB } from '@/types/Menu';

export async function useMenu() {
  const downloadedMenu = await $fetch<DayMenuOutline[]>('/api/menu/new');

  const newMenu = reactive<MenuOutline>({
    startDate: new Date(),
    endDate: new Date(),
    dayMenus: downloadedMenu,
  });

  const currentMenu = await $fetch<MenuFromDB>('/api/menu/current');

  return { newMenu, currentMenu };
}
