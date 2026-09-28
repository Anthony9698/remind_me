import classes from "./HomeView.module.scss";
import { Container, Typography, Box, ScrollArea } from "@mantine/core";
import BottomNav from "../../components/BottomNav/BottomNav";
import Clock from "../../components/Clock/Clock";
import ReminderCard from "../../components/ReminderCard/ReminderCard";

export default function HomeView({ reminders }) {
  return (
    <Container fluid className={classes.home_view__container}>
      <Box className={classes.home_view__header}>
        <Typography className={classes.title}>Remind Me</Typography>
        <Clock />
      </Box>
      <ScrollArea>
        <Box w="100%" h={400} className={classes.reminders__container}>
          {reminders.map((reminder, index) => (
            <ReminderCard
              key={index}
              title={reminder.title}
              due={reminder.due}
              imageSymbol={reminder.imageSymbol}
              color={reminder.color}
              recurrence={reminder.recurrence}
            />
          ))}
        </Box>
      </ScrollArea>
      <BottomNav />
    </Container>
  );
}
