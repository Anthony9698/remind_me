import classes from "./Clock.module.scss";
import { Typography, Box } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  const date = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(now);

  return (
    <Box className={classes.clock__container}>
      <Typography className={classes.time}>{time}</Typography>
      <Typography className={classes.date}>{date}</Typography>
    </Box>
  );
}
