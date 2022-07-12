export const setCommaInNumber = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dayToMonth = (day: number): number => Math.round(day / 20);
