<script lang="ts">
  import * as Item from "$lib/components/ui/item/index.js";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { getLastValue } from "../../../utils/objectHelpers";
  import HelpDetail from "./helpDetail.svelte";
  import HelpSearch from "./helpSearch.svelte";
  import type { HelpDataType, HelpDetailType } from "./types";

  const helpLists = getContext<Writable<HelpDataType[]>>("helpLists");
  const helpRoutes =
    getContext<Writable<Record<string, HelpDetailType>>>("helpRoutes");

  function onClickDetail(data: HelpDataType) {
    helpRoutes.update((d) => {
      if (!d) {
        return {
          [data.id]: {
            ...data,
            content: null,
          },
        };
      } else {
        d[data.id] = {
          ...data,
          content: null,
        };
        return d;
      }
    });
  }
</script>

{#if !$helpRoutes}
  <div class="flex flex-col h-full pb-2">
    <div class="flex-1 min-h-0 h-full">
      <div class="overflow-x-auto flex flex-col min-h-0 h-full scroll-smooth">
        {#each $helpLists as hlp (hlp.id)}
          <Item.Root variant="outline">
            <Item.Content>
              <Item.Title
                ><span class="icon-book-fill text-blue-600"></span>
                <button
                  onclick={() => onClickDetail(hlp)}
                  aria-label={hlp.title}
                  class="hover:underline text-start">{hlp.title}</button
                ></Item.Title
              >
              <Item.Description>{hlp.sub_title}</Item.Description>
            </Item.Content>
            <Item.Actions>
              <button onclick={() => onClickDetail(hlp)} aria-label="action"
                ><span class="icon-chevron-right"></span></button
              >
            </Item.Actions>
          </Item.Root>
        {/each}
      </div>
    </div>
    <div class="shrink-0">
      <div class="px-4">
        <HelpSearch />
      </div>
    </div>
  </div>
{:else if $helpRoutes && Object.values($helpRoutes).length > 0}
  <HelpDetail
    {...getLastValue<HelpDetailType>($helpRoutes)!}
    isLoading={false}
  />
{/if}
