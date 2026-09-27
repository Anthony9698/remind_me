import classes from "./ReminderCard.module.scss";
import { Container, Typography, Avatar, Box, Button } from "@mantine/core";
import { IoIosArrowForward } from "react-icons/io";

export default function ReminderCard({
  title,
  due,
  imageSymbol,
  color,
  recurrence,
}) {
  return (
    <Box className={classes.reminder_card__container}>
      <Box className={classes.reminder_card__inner}>
        <Avatar color={color} className={classes.icon} size={64}>
          {imageSymbol}
        </Avatar>
        <Box className={classes.reminder_card__content}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.due} c="cyan">
            {due}
          </Typography>
          <Typography className={classes.recurrence} c="gray">
            {recurrence}
          </Typography>
        </Box>
      </Box>
      <Button variant="subtle" className={classes.action_button}>
        <IoIosArrowForward size={32} color="white" />
      </Button>
    </Box>
  );
}
