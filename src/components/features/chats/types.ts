export interface ChatBubble {
  id: string | number;
  profile: string;
  name: string;
  role: "bot" | "customer";
  content: string;
  date: string;
  images: string[];
}
