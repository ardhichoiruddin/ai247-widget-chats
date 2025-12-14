<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";

  interface Props {
    onSelect?: (value: string) => void;
  }

  let { onSelect }: Props = $props();
  let emojiValue = $state("smileys");

  const emojiSets = $state.raw<Record<string, string[]>>({
    smileys: ["😀", "😃", "😄", "😁", "😅", "😂", "🤣", "😊"],
    gestures: ["👍", "👎", "👌", "✌️", "🤞", "🤝", "👏", "🙌"],
    hearts: ["❤️", "💕", "💖", "💗", "💙", "💚", "💛", "🧡"],
  });
</script>

<div class="bg-white p-2.5 shadow-lg">
  <Tabs.Root bind:value={emojiValue} class="w-full h-full gap-0">
    <Tabs.List class="gap-2 bg-transparent">
      {#each Object.keys(emojiSets) as emj}
        <Tabs.Trigger
          class="text-gray-700  bg-transparent data-[state=active]:bg-blue-300/40 shadow-none text-sm"
          value={emj}
        >
          {emj}</Tabs.Trigger
        >
      {/each}
    </Tabs.List>
  </Tabs.Root>
  {#if emojiSets[emojiValue]}
    <div class="grid grid-cols-5">
      {#each emojiSets[emojiValue] as emj, i (i)}
        <div>
          <button
            onclick={() => onSelect?.(emj)}
            aria-label={emj}
            class="text-2xl cursor-pointer">{emj}</button
          >
        </div>
      {/each}
    </div>
  {/if}
</div>
