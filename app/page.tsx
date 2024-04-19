"use client";

import { fetchApi } from "@/api/fetchApi";
import { getPosition } from "@/utils/getPosition";
import { unixToLocalTime } from "@/utils/unixToLocalTime";
import { useEffect, useState } from "react";

export default function Home() {
  // const [time, setTime] = useState("123");

  // useEffect(() => {
  //   getPosition()
  //     .then((position) => {
  //       console.log(position);
  //       fetchApi(position.coords.latitude, position.coords.longitude, "metric")
  //         .then((data: any) => {
  //           setTime(unixToLocalTime(data.current.dt));
  //           console.log(data);
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // return (
  //   <main>
  //     <div>{time}</div>
  //   </main>
  // );
  return (
    <main>
      <div>123</div>
    </main>
  );
}
