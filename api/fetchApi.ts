"use server";

export const fetchApi = async (lat: string, lon: string, units: string) => {
  const appid = process.env.OW_Api_key;
  const url = "https://api.openweathermap.org/data/3.0/onecall";

  try {
    const response = await fetch(
      `${url}?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${appid}&units=${units}&lang=zh_tw`
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
