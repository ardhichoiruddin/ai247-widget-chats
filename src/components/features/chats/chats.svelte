<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import ChatBubble from "./chatBubble.svelte";
  import ChatComposer from "./chatComposer.svelte";
  import ChatContainer from "./chatContainer.svelte";
  import ChatEditor from "./chatEditor.svelte";
  import type { ChatBubble as ChatBubbleType } from "./types";

  const messages = getContext<Writable<ChatBubbleType[]>>("messages");
  const onPreviewImage = getContext<Writable<string>>("onPreviewImage");

  function onImagePreview(imageUrl: string) {
    onPreviewImage.set(imageUrl);
  }
</script>

<div class="flex flex-col h-full">
  <div class="flex-1 min-h-0">
    <ChatContainer>
      {#each $messages as item (item.id)}
        <ChatBubble {...item} {onImagePreview} />
      {/each}
    </ChatContainer>
  </div>
  <div>
    <ChatEditor />
    <ChatComposer />
  </div>
</div>
