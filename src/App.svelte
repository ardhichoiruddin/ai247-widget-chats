<script lang="ts">
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import Container from "./components/container.svelte";
  import Chats from "./components/features/chats/chats.svelte";
  import type { ChatBubble as Message } from "./components/features/chats/types";
  import Help from "./components/features/help/help.svelte";
  import type {
    HelpDataType,
    HelpDetailType,
  } from "./components/features/help/types";
  import Search from "./components/features/search/search.svelte";
  import PreviewImage from "./components/previewImage.svelte";
  import TabsHeader from "./components/tabsHeader.svelte";
  import type { TabOption } from "./components/types";
  import helpData from "./help.json";
  import messageData from "./messages.json";

  let tabValue = $state("chats");

  const chatMessages = writable<Message[]>([]);
  const helpLists = writable<HelpDataType[]>([]);
  const helpRoutes = writable<Record<string, HelpDetailType>>();
  const onPreviewImage = writable<string | null>(null);

  const tabActions = $state.raw<TabOption[]>([
    {
      value: "chats",
      label: "Chats",
      icon: "icon-chat-dots-fill",
      component: Chats,
    },
    {
      value: "help",
      label: "Help",
      icon: "icon-book-fill",
      component: Help,
    },
    {
      value: "search",
      label: "Search",
      icon: "icon-search",
      component: Search,
    },
  ]);

  setContext("chatMessages", chatMessages);
  setContext("helpLists", helpLists);
  setContext("helpRoutes", helpRoutes);
  setContext("onPreviewImage", onPreviewImage);

  onMount(() => {
    chatMessages.set(messageData as Message[]);
    helpLists.set(helpData);
  });

  $effect(() => {
    console.log("helpRoutes", $helpRoutes);
  });
</script>

<div class="fixed bottom-[20px] right-[20px] z-[1000]">
  <Container>
    <TabsHeader {tabActions} bind:value={tabValue} />
  </Container>

  <PreviewImage bind:imageUrl={$onPreviewImage} />
</div>
