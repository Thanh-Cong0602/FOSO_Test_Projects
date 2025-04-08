/**
 * Generates a list of months from a given start month up to the current month.
 *
 * Each month is formatted as "MM/YYYY".
 *
 * @param {string} startMonth - The starting month in "MM/YYYY" format (e.g. "01/2025").
 * @returns {string[]} An array of month strings from the start month to the current month.
 *
 * @example
 * generateMonthsFromTo("01/2025");
 * // Output (if current date is April 2025):
 * // ["01/2025", "02/2025", "03/2025", "04/2025"]
 */
export const generateMonthsFromTo = (startMonth: string): string[] => {
  const result: string[] = [];

  const [startMM, startYYYY] = startMonth.split("/").map(Number);
  const now = new Date();
  const currentMonth = now.getMonth() + 1; // getMonth returns 0-11
  const currentYear = now.getFullYear();

  let year = startYYYY;
  let month = startMM;

  while (year < currentYear || (year === currentYear && month <= currentMonth)) {
    const paddedMonth = String(month).padStart(2, "0");
    result.push(`${paddedMonth}/${year}`);

    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }

  return result;
};


/**
 * Generate an array of quarters from a starting quarter up to the current quarter.
 *
 * @param startQuarter - The starting quarter in the format "Q<number>/<year>", e.g. "Q1/2023"
 * @returns An array of quarter strings up to the current quarter, e.g. ["Q1/2023", "Q2/2023", ...]
 */
export const generateQuartersFromTo = (startQuarter: string): string[] => {
  const result: string[] = [];

  const [, startQStr, startYStr] = startQuarter.match(/Q(\d)\/(\d{4})/) || [];
  let quarter = Number(startQStr);
  let year = Number(startYStr);

  const now = new Date();
  const currentMonth = now.getMonth(); // 0-indexed
  const currentQuarter = Math.floor(currentMonth / 3) + 1;
  const currentYear = now.getFullYear();

  while (year < currentYear || (year === currentYear && quarter <= currentQuarter)) {
    result.push(`Q${quarter}/${year}`);

    quarter++;
    if (quarter > 4) {
      quarter = 1;
      year++;
    }
  }

  return result;
};

/**
 * Generate an array of years from a starting year up to the current year.
 *
 * @param startYear - The starting year (e.g. 2020)
 * @returns An array of years from the start year to the current year (e.g. ["2020", "2021", ..., "2025"])
 */
export const generateYearsFromTo = (startYear: number): string[] => {
  const currentYear = new Date().getFullYear();
  const result: string[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    result.push(String(year));
  }

  return result;
};

/**
 * Generate an array of week labels from a start date up to the current week.
 *
 * @param startDate - The starting date in format "MM/YYYY" (e.g. "01/2024")
 * @returns An array of week strings in format "Tuần XX/YYYY"
 */
export const generateWeeksFromTo = (startDate: string): string[] => {
  const [startMonth, startYear] = startDate.split("/").map(Number);
  const start = new Date(startYear, startMonth - 1, 1);
  const now = new Date();

  const result: string[] = [];

  while (start <= now) {
    const year = start.getFullYear();
    const firstDayOfYear = new Date(year, 0, 1);
    const pastDaysOfYear = Math.floor((+start - +firstDayOfYear) / 86400000);
    const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);

    const label = `Tuần ${String(weekNumber).padStart(2, "0")}/${year}`;
    if (!result.includes(label)) {
      result.push(label);
    }

    start.setDate(start.getDate() + 7);
  }

  return result;
};

/**
 * Generates an array of dates from the start date to the current date.
 *
 * @param startDate - The start date string in format "dd/mm/yyyy"
 * @returns An array of date strings in "dd/mm/yyyy" format
 */
export const generateDatesFromTo = (startDate: string): string[] => {
  const result: string[] = [];

  const [startDD, startMM, startYYYY] = startDate.split("/").map(Number);
  const start = new Date(startYYYY, startMM - 1, startDD); 

  const today = new Date();
  const current = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  while (start <= current) {
    const dd = String(start.getDate()).padStart(2, "0");
    const mm = String(start.getMonth() + 1).padStart(2, "0");
    const yyyy = start.getFullYear();

    result.push(`${dd}/${mm}/${yyyy}`);

    start.setDate(start.getDate() + 1); 
  }

  return result;
};

