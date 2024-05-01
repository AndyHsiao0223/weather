"use client";

import { fetchApi } from "@/api/fetchApi";
import { getPosition } from "@/utils/getPosition";
import { unixToDate } from "@/utils/unixToDate";
import { useEffect, useState } from "react";
import DaysDetails from "@/components/DaysDetails";

const WeekPage = () => {
  const loop = [];
  for (let i = 0; i < 8; i++) {
    loop.push(i);
  }

  const [date, setDate] = useState<string[]>(["", "", "", "", "", "", "", ""]);
  const [desc, setDesc] = useState<string[]>(["", "", "", "", "", "", "", ""]);
  const [dayFeel, setDayFeel] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);
  const [eveFeel, setEveFeel] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);
  const [rain, setRain] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    getPosition()
      .then((position) => {
        fetchApi(position.coords.latitude, position.coords.longitude, "metric")
          .then((data: any) => {
            const dateData: string[] = [];
            const descData: string[] = [];
            const rainData: number[] = [];
            const eveFeelData: number[] = [];
            const dayFeelData: number[] = [];

            for (let i = 0; i < 8; i++) {
              dateData.push(unixToDate(data.daily[i].dt));
              setDate(dateData);

              descData.push(data.daily[i].weather[0].description);
              setDesc(descData);

              dayFeelData.push(Math.round(data.daily[i].feels_like.day));
              setDayFeel(dayFeelData);

              eveFeelData.push(Math.round(data.daily[i].feels_like.eve));
              setEveFeel(eveFeelData);

              rainData.push(Math.round(data.daily[i].pop * 100));
              setRain(rainData);
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
    <div className="flex h-[43.75rem] flex-col items-center justify-evenly">
      {loop.map((i) => (
        <DaysDetails
          key={i}
          date={date[i]}
          desc={desc[i]}
          rain={`${rain[i]}%`}
          dayFeel={`${dayFeel[i]}℃`}
          eveFeel={`${eveFeel[i]}℃`}
        />
      ))}
    </div>
  );
};

export default WeekPage;
