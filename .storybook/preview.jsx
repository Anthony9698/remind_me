import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./preview.scss";
import { MantineProvider } from "@mantine/core";

export const decorators = [
  (Story) => (
    <MantineProvider>
      <Story />
    </MantineProvider>
  ),
];

const preview = {
  parameters: {
    backgrounds: {
      options: {
        appDark: {
          name: "App Dark",
          value: "#0f1115",
        },
        appLight: {
          name: "App Light",
          value: "#f5f7fa",
        },
      },
    },
    layout: "fullscreen",
    viewport: {
      options: {
        reminderDisplay: {
          name: "7-inch Reminder Display",
          styles: {
            width: "1024px",
            height: "600px",
          },
          type: "other",
        },

        reminderDisplayPortrait: {
          name: "7-inch Reminder Display — Portrait",
          styles: {
            width: "600px",
            height: "1024px",
          },
          type: "other",
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "appDark",
    },
  },
};

export default preview;
