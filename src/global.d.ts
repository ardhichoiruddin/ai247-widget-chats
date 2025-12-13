import type { Ai247Config } from "./embed";

declare global {
  interface Window {
    AI247_CONFIG?: Ai247Config;
    Ai247Chat: {
      init: (config: Ai247Config) => Promise<void>;
      version: string;
    };
  }
}