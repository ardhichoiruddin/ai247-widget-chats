<script lang="ts">
  import { cn } from "$lib/utils";
  import ChatBubbleImage from "./chatBubbleImage.svelte";
  import { chatBubbleVariants } from "./tv";
  import type { ChatBubble } from "./types";

  let {
    id,
    name,
    role,
    content,
    images,
    date,
    profile,
    onImagePreview,
  }: ChatBubble & {
    onImagePreview?: (url: string) => void;
  } = $props();
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
          class="w-[30px] h-[30px] flex items-center justify-center bg-gray-300"
        >
          <img
            class="w-full h-full object-cover rounded-full"
            src={profile}
            alt={name}
          />
        </div>
      </div>
    {/if}
    <div>
      {#if role === "bot"}
        <div class="mb-1">
          <span class="text-sm">{name}</span>
        </div>
      {/if}
      <div class="{cn(chatBubbleVariants({ box: role }))} p-2.5">
        <div class="text-sm">{content}</div>
      </div>
      {#if images.length > 0}
        <ChatBubbleImage {images} {onImagePreview} />
      {/if}
    </div>
  </div>
</div>
