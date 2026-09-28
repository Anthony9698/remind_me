import classes from "./BottomNav.module.scss";
import { Box, Button, Typography } from "@mantine/core";
import { IoIosHome } from "react-icons/io";
import { IoSettingsOutline, IoAddOutline } from "react-icons/io5";

export default function BottomNav() {
  return (
    <Box className={classes.bottom_nav__container}>
      <Button
        classNames={{
          root: classes.nav_button_root,
          label: classes.nav_button_label,
        }}
      >
        <IoIosHome size={32} color="white" />
        <Typography>Home</Typography>
      </Button>
      <Button
        classNames={{
          root: classes.nav_button_root,
          label: classes.nav_button_label,
        }}
      >
        <IoAddOutline size={32} color="white" />
        <Typography>Add</Typography>
      </Button>
      <Button
        classNames={{
          root: classes.nav_button_root,
          label: classes.nav_button_label,
        }}
      >
        <IoSettingsOutline size={32} color="white" />
        <Typography>Settings</Typography>
      </Button>
    </Box>
  );
}
