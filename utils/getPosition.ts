const options = {
  enableHighAccuracy: false,
  timeout: 500,
};

export const getPosition = (): Promise<any> => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
};
