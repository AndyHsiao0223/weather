export const unixToDate = (unixStamp: number) => {
  const time = new Date(unixStamp * 1000);

  const month = time.getMonth() + 1;
  const date = time.getDate();

  const formattedDate = `${month}/${date}`;
  return formattedDate;
};
