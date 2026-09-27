import classes from "./ActiveReminderCard.module.scss";
import { Container, Typography, Avatar, Box, Button } from "@mantine/core";
import { IoCloseSharp } from "react-icons/io5";
import { RiAlarmSnoozeLine } from "react-icons/ri";

export default function ActiveReminderCard({ title, due, imageSymbol, color }) {
  return (
    <Container className={classes.reminder_card__container}>
      <Box className={classes.reminder_card__main}>
        <Avatar color={color} className={classes.icon} size={128}>
          {imageSymbol}
        </Avatar>
        <Box className={classes.reminder_card__content}>
          <Typography className={classes.text}>reminder</Typography>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.due}>{due}</Typography>
        </Box>
      </Box>
      <Box className={classes.reminder_card__footer}>
        <Button
          className={classes.action_button}
          color="dark"
          classNames={{ label: classes.label }}
        >
          <IoCloseSharp size={36} />
          <Typography className={classes.text}>Dismiss</Typography>
        </Button>
        <Button
          className={classes.action_button}
          color="blue"
          classNames={{ label: classes.label }}
        >
          <RiAlarmSnoozeLine size={36} />
          <Typography className={classes.text}>Snooze</Typography>
          <Typography>1 hour</Typography>
        </Button>
      </Box>
    </Container>
  );
}
