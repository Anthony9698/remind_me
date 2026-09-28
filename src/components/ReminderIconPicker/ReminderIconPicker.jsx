import { ActionIcon, Group, Scroller, Box, Typography } from "@mantine/core";
import classes from "./ReminderIconPicker.module.scss";
import {
  IconTrash,
  IconPill,
  IconPlant,
  IconCar,
  IconBell,
  IconHome,
} from "@tabler/icons-react";

const reminderIcons = [
  { value: "trash", icon: IconTrash, color: "green.8" },
  { value: "medicine", icon: IconPill, color: "red.8" },
  { value: "plant", icon: IconPlant, color: "green.4" },
  { value: "car", icon: IconCar, color: "orange.8" },
  { value: "bell", icon: IconBell, color: "yellow.8" },
  { value: "home", icon: IconHome, color: "blue.8" },
];

export default function ReminderIconPicker({ value, onChange }) {
  return (
    <Scroller
      draggable
      scrollAmount={220}
      controlSize="lg"
      classNames={{
        content: classes.reminder_icon_picker__content,
      }}
    >
      <Typography size="sm" color="dimmed">
        Select an icon:
      </Typography>
      <Group wrap="nowrap" gap="md">
        {reminderIcons.map(({ value: iconValue, label, icon: Icon, color }) => {
          const selected = value === iconValue;

          return (
            <button
              key={iconValue}
              type="button"
              onClick={() => onChange(iconValue)}
              style={{
                backgroundColor: "var(--mantine-color-dark-4)",
                border: 0,
                borderRadius: "var(--mantine-radius-md)",
                padding: "0.5rem",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem",
                border: selected
                  ? `2px solid var(--mantine-color-${color.replace(".", "-")})`
                  : "none",
              }}
            >
              <ActionIcon
                size={64}
                radius="xl"
                variant="filled"
                aria-label={`Select ${label} icon`}
                color={color}
              >
                <Icon size={30} />
              </ActionIcon>
            </button>
          );
        })}
      </Group>
    </Scroller>
  );
}
