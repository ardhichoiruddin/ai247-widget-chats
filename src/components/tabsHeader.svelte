<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import type { TabOption } from "./types";
  interface Props {
    tabActions: TabOption[];
    value: string;
  }

  let { value = $bindable(), tabActions = [] }: Props = $props();
</script>

<Tabs.Root bind:value class="w-full h-full gap-0">
  <div class="min-h-[40px] bg-blue-600 rounded-t-[14px] py-2.5 px-2">
    <div class="w-full flex items-start justify-center">
      <Tabs.List class="gap-4 bg-transparent">
        {#each tabActions as tac (tac.value)}
          <Tabs.Trigger
            class="text-white  bg-transparent data-[state=active]:bg-blue-300/40 shadow-none font-medium"
            value={tac.value}
          >
            <span class={tac.icon}></span>
            {tac.label}</Tabs.Trigger
          >
        {/each}
      </Tabs.List>
    </div>
    <div class="flex justify-center items-center mt-2">
      <span class="text-white">Ai247 Chats</span>
    </div>
  </div>
  {#each tabActions as tac (tac.value)}
    {@const Component = tac.component}
    <Tabs.Content value={tac.value} class="min-h-0">
      <div class="px-2 h-full">
        <Component />
      </div>
    </Tabs.Content>
  {/each}
</Tabs.Root>
