import type { Menu, DayMenu } from '@prisma/client';

export type Meal = {
  mainDish: {
    name: string;
    calories: number;
  };
  side1: {
    name: string;
    calories: number;
  };
  side2: {
    name: string;
    calories: number;
  };
};

enum DayOfWeek {
  LUNES = 'Lunes',
  MARTES = 'Martes',
  MIERCOLES = 'Miércoles',
  JUEVES = 'Jueves',
  VIERNES = 'Viernes',
}

export type DayMenuOutline = {
  dayOfWeek: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
};

export type MenuOutline = {
  id?: number;
  startDate: Date;
  endDate: Date;
  dayMenus: DayMenuOutline[] | null;
};

export type MenuFromDB = Menu & {
  dayMenus: DayMenu[];
};
