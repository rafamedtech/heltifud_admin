import type { DayMenuOutline, MenuFromDB } from '@/types/Menu';

export async function useMenu() {
  const downloadedMenu = await $fetch<DayMenuOutline[]>('/api/menu/new');

  const currentMenu = await $fetch<MenuFromDB>('/api/menu/current');

  return { downloadedMenu, currentMenu };
}
