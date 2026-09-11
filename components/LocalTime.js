"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-AU", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Australia/Adelaide",
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return <span>Local time {time}, Adelaide</span>;
}
