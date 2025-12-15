import { tv } from "tailwind-variants";

export const chatBubbleVariants = tv({
  variants: {
    position: {
      bot: "mr-auto justify-start",
      customer: "ml-auto justify-end",
    },
    box: {
      bot: "bg-blue-600 text-white rounded-b-[10px] rounded-tr-[10px]",
      customer: "bg-gray-300 text-gray-700 rounded-t-[10px] rounded-bl-[10px]",
    },
  },
});
