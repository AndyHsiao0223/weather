export const unixToLocalTime = (unixTime: number) => {
  const time = new Date(unixTime * 1000);

  const month = time.getMonth() + 1;
  const date = time.getDate();

  const hours = time.getHours();
  const minutes = time.getMinutes();

  const formattedTime = `${month}月${date}日 ${hours}點${minutes}分`;
  return formattedTime;
};
