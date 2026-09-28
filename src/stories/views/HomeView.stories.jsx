import HomeView from "../../views/HomeView/HomeView";
import { MdFastfood } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

export default {
  title: "Views/HomeView",
  component: HomeView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    reminders: [
      {
        id: 1,
        title: "Buy groceries",
        due: new Date().toDateString(),
        recurrence: "daily",
        imageSymbol: <MdFastfood size={32} />,
        color: "red.8",
      },
      {
        id: 2,
        title: "Call mom",
        due: new Date().toDateString(),
        recurrence: "weekly",
        imageSymbol: <IoMdCall size={32} />,
        color: "blue.8",
      },
      {
        id: 3,
        title: "Buy groceries",
        due: new Date().toDateString(),
        recurrence: "daily",
        imageSymbol: <MdFastfood size={32} />,
        color: "red.8",
      },
      {
        id: 4,
        title: "Call mom",
        due: new Date().toDateString(),
        recurrence: "weekly",
        imageSymbol: <IoMdCall size={32} />,
        color: "blue.8",
      },
    ],
  },
};
