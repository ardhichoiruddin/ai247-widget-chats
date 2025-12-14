<script lang="ts">
  import { cn } from "$lib/utils";
  import { chatBubbleVariants } from "./tv";
  import type { ChatBubble } from "./types";

  let { id, name, role, content, images, date }: ChatBubble = $props();
</script>

<div class="w-full">
  <div
    class="flex flex-row items-start gap-2 max-w-[340px] {cn(
      chatBubbleVariants({ position: role })
    )}"
  >
    {#if role === "bot"}
      <div>
        <div
          class="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-300"
        >
          <span class="text-xs">CRS</span>
        </div>
      </div>
    {/if}
    <div>
      {#if role === "bot"}
        <div class="mb-1">
          <span class="text-sm">{name}</span>
        </div>
      {/if}
      <div class="{cn(chatBubbleVariants({ box: role }))} p-2 rounded-md">
        <div class="text-base">{content}</div>
      </div>
    </div>
  </div>
</div>
