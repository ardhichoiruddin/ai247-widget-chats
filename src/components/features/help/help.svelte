<script lang="ts">
  import * as Item from "$lib/components/ui/item/index.js";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import type { HelpDataType } from "./types";

  const helpLists = getContext<Writable<HelpDataType[]>>("helpLists");
</script>

<div class="h-full pb-2">
  <div class="overflow-x-auto flex flex-col min-h-0 h-full scroll-smooth">
    {#each $helpLists as hlp (hlp.id)}
      <Item.Root variant="outline">
        <Item.Content>
          <Item.Title
            ><span class="icon-book-fill text-blue-600"></span>
            <button aria-label={hlp.title} class="hover:underline text-start"
              >{hlp.title}</button
            ></Item.Title
          >
          <Item.Description>{hlp.sub_title}</Item.Description>
        </Item.Content>
        <Item.Actions>
          <button aria-label="action"
            ><span class="icon-chevron-right"></span></button
          >
        </Item.Actions>
      </Item.Root>
    {/each}
  </div>
</div>
