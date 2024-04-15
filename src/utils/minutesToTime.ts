export const minutesToTime = (minutes: number): string => {
  const hours: number = Math.floor(minutes / 60);
  let mins: number | string = minutes % 60;

  mins = mins < 10 ? `0${mins}` : mins;

  const formattedHours: string = hours < 10 ? `0${hours}` : `${hours}`;

  return `${formattedHours}:${mins}`;
};
