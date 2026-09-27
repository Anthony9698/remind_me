import classes from "./AddEditReminder.module.scss";
import { TextInput, Button, Typography, Box, Select } from "@mantine/core";
import { IoIosArrowBack, IoIosArrowForward, IoIosList } from "react-icons/io";
import { DateTimePicker } from "@mantine/dates";
import { IoCalendarOutline, IoRepeatOutline } from "react-icons/io5";

export default function AddEditReminder({ isEditing = false }) {
  return (
    <Box className={classes.add_edit__container}>
      <Box className={classes.top_nav__container}>
        <Button className={classes.back_button}>
          <IoIosArrowBack size={32} color="white" />
        </Button>
        <Typography className={classes.nav_title}>
          {isEditing ? "Edit Reminder" : "New Reminder"}
        </Typography>
      </Box>
      <Box className={classes.form__container}>
        <TextInput
          classNames={{
            input: classes.form_input,
          }}
          placeholder="Reminder title"
          leftSection={<IoIosList size={24} />}
          leftSectionWidth={48}
        />
        <DateTimePicker
          classNames={{
            input: classes.form_input,
          }}
          placeholder="Date & time"
          leftSection={<IoCalendarOutline size={24} />}
          leftSectionWidth={48}
          valueFormat={"MMMM D, YYYY h:mm A"}
          popoverProps={{
            position: "top-start",
            offset: -64,
          }}
        />
        <Select
          placeholder="Repeat"
          leftSection={<IoRepeatOutline size={24} />}
          leftSectionWidth={48}
          classNames={{
            input: classes.form_input,
          }}
          data={[
            "Does not repeat",
            "Every day",
            "Every week",
            "Every 2 weeks",
            "Every month",
            "Every year",
            "Custom",
          ]}
        />
      </Box>
      <Button className={classes.save_button}>Save Reminder</Button>
    </Box>
  );
}
