"use client";

import Link from "next/link";
import { useState } from "react";

const PageSwitcher: React.FC = () => {
  const [page, setPage] = useState("now");

  return (
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
  );
};

export default PageSwitcher;
