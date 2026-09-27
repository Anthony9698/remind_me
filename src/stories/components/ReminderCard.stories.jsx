import ReminderCard from "../../components/ReminderCard/ReminderCard";
import { FaRegTrashAlt } from "react-icons/fa";

export default {
  title: "Components/ReminderCard",
  component: ReminderCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Take out the trash",
    dueText: "Tomorrow at 7:00 PM",
    imageSymbol: <FaRegTrashAlt size={64} />,
    color: "green.8",
  },
};
