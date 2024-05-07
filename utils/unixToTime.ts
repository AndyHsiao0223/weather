export const unixToTime = (unixStamp: number) => {
  const time = new Date(unixStamp * 1000);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  return formattedTime;
};
