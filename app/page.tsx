"use client";

import { fetchApi } from "@/api/fetchApi";
import InfoBox from "@/components/InfoBox";
import RainChart from "@/components/RainChart";
import TempChart from "@/components/TempChart";
import { getPosition } from "@/utils/getPosition";
import { unixToDate } from "@/utils/unixToDate";
import { unixToTime } from "@/utils/unixToTime";
import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [feel, setFeel] = useState<number>(0);
  const [hourFeel, setHourFeel] = useState<number[]>([]);
  const [hourRain, setHourRain] = useState<number[]>([]);

  useEffect(() => {
    getPosition()
      .then((position) => {
        fetchApi(position.coords.latitude, position.coords.longitude, "metric")
          .then((data: any) => {
            setTime(unixToTime(data.current.dt));
            setDate(unixToDate(data.current.dt));
            setDesc(data.current.weather[0].description);
            setFeel(Math.round(data.current.feels_like));

            const hourFeelData: number[] = [];
            const hourRainData: number[] = [];

            for (let i = 0; i < 24; i++) {
              hourFeelData.push(Math.round(data.hourly[i].feels_like));
              setHourFeel(hourFeelData);

              hourRainData.push(Math.round(data.hourly[i].pop * 100));
              setHourRain(hourRainData);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  return (
    <main>
      <div className="mt-5 flex justify-evenly">
        <InfoBox date={date} time={time} content={desc} />
        <InfoBox label="現在體感" content={`${feel}℃`} />
      </div>
      <TempChart data={hourFeel} />
      <RainChart data={hourRain} />
    </main>
  );
}
