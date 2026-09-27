import "./ReminderCard.scss";
import { Container, Typography, Avatar, Box, Button } from "@mantine/core";
import { IoCloseSharp } from "react-icons/io5";
import { RiAlarmSnoozeLine } from "react-icons/ri";

export default function ReminderCard({ title, dueText, imageSymbol, color }) {
  return (
    <Container className="reminder-card__container">
      <Box className="reminder-card__main">
        <Avatar color={color} className="icon">
          {imageSymbol}
        </Avatar>
        <Box className="reminder-card__content">
          <Typography className="text">reminder</Typography>
          <Typography className="title">{title}</Typography>
          <Typography className="due">{dueText}</Typography>
        </Box>
      </Box>
      <Box className="reminder-card__footer">
        <Button
          className="action-button"
          color="dark"
          classNames={{ label: "label" }}
        >
          <IoCloseSharp size={36} />
          <Typography className="text">Dismiss</Typography>
        </Button>
        <Button
          className="action-button"
          color="blue"
          classNames={{ label: "label" }}
        >
          <RiAlarmSnoozeLine size={36} />
          <Typography className="text">Snooze</Typography>
          <Typography>1 hour</Typography>
        </Button>
      </Box>
    </Container>
  );
}
