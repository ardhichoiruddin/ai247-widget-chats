<script lang="ts">
  import Container from "./components/container.svelte";
  import Chats from "./components/features/chats/chats.svelte";
  import Help from "./components/features/help/help.svelte";
  import TabsHeader from "./components/tabsHeader.svelte";
  import type { TabOption } from "./components/types";

  let tabValue = $state("chats");

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
      component: Chats,
    },
  ]);
</script>

<div class="ai247-chat-widget-wrapper">
  <Container>
    <TabsHeader {tabActions} bind:value={tabValue} />
  </Container>
</div>

<style>
  .ai247-chat-widget-wrapper {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }
</style>
