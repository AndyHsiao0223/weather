export const unixToTime = (unixStamp: number) => {
  const time = new Date(unixStamp * 1000);

  const hours = time.getHours();
  const minutes = time.getMinutes();

  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};
