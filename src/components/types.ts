import type { Component } from "svelte";

export interface TabOption {
  value: string;
  label: string;
  icon: string;
  component: Component;
}
