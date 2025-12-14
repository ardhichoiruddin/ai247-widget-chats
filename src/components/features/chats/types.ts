export interface ChatBubble {
  id: string | number;
  name: string;
  role: "bot" | "customer";
  content: string;
  date: string;
  images: string[];
}
