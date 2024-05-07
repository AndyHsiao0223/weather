"use client";

import Link from "next/link";
import { createContext, useState } from "react";

export const PageContext = createContext("");

export const PageSwitcher = ({ children }: any) => {
  const [page, setPage] = useState("now");

  return (
    <div>
      <PageContext.Provider value={page}>
        <div className="flex justify-center">
          <Link
            href="/"
            onClick={() => setPage("now")}
            className={`flex h-14 w-[11.5rem] items-center justify-center ${page === "now" ? "bg-slate-300" : "bg-inherit"}`}
          >
            NOW
          </Link>
          <Link
            href="/week"
            onClick={() => setPage("7days")}
            className={`flex h-14 w-[11.5rem] items-center justify-center ${page === "7days" ? "bg-slate-300" : "bg-inherit"}`}
          >
            7 DAYS
          </Link>
        </div>
        {children}
      </PageContext.Provider>
    </div>
  );
};
