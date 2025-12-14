<script lang="ts">
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import Container from "./components/container.svelte";
  import Chats from "./components/features/chats/chats.svelte";
  import type { ChatBubble as Message } from "./components/features/chats/types";
  import Help from "./components/features/help/help.svelte";
  import Search from "./components/features/search/search.svelte";
  import PreviewImage from "./components/previewImage.svelte";
  import TabsHeader from "./components/tabsHeader.svelte";
  import type { TabOption } from "./components/types";
  import messageData from "./messages.json";

  let tabValue = $state("chats");

  const messages = writable<Message[]>([]);
  const onPreviewImage = writable<string | null>(null);

  const tabActions = $state.raw<TabOption[]>([
    {
      value: "chats",
      label: "Chats",
      icon: "icon-chat-dots",
      component: Chats,
    },
    {
      value: "help",
      label: "Help",
      icon: "icon-info-circle",
      component: Help,
    },
    {
      value: "search",
      label: "Search",
      icon: "icon-search",
      component: Search,
    },
  ]);

  setContext("messages", messages);
  setContext("onPreviewImage", onPreviewImage);

  onMount(() => {
    messages.set(messageData as Message[]);
  });
</script>

<div class="ai247-chat-widget-wrapper">
  <Container>
    <TabsHeader {tabActions} bind:value={tabValue} />
  </Container>

  <PreviewImage bind:imageUrl={$onPreviewImage} />
</div>

<style>
  .ai247-chat-widget-wrapper {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }
</style>
