type Meal = {
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

type DayMenu = {
  dayOfWeek: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
};

type WeeklyMenu = DayMenu[];

type Menu = {
  id: number;
  startDate: string;
  endDate: string;
  weekMenus: WeeklyMenu;
};
