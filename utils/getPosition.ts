const options = {
  enableHighAccuracy: true,
  timeout: 5000,
};

export const getPosition = (): Promise<any> => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
};
