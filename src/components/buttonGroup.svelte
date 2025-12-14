<script lang="ts">
  import {
    computePosition,
    flip,
    limitShift,
    offset,
    shift,
  } from "@floating-ui/dom";
  import { onClickOutside } from "runed";
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet<
      [
        {
          open: () => void;
          toggle: () => void;
        },
      ]
    >;
    content?: Snippet;
    placement?: "bottom" | "bottom-start" | "bottom-end";
  }

  let buttonContainer = $state<HTMLElement>()!;
  let container = $state<HTMLElement>()!;
  let { children, content, placement = "bottom" }: Props = $props();
  let isOpen = $state(false);

  function open() {
    isOpen = true;
  }

  function toggle() {
    isOpen = !isOpen;
  }

  async function updatePosition() {
    const { x, y } = await computePosition(buttonContainer, container, {
      placement,
      middleware: [
        offset(8),
        flip(),
        shift({
          limiter: limitShift(),
        }),
      ],
    });

    Object.assign(container.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  onClickOutside(
    () => container,
    () => (isOpen = false)
  );

  $effect(() => {
    if (isOpen) {
      updatePosition();
    }
  });
</script>

<div class="relative">
  <div bind:this={buttonContainer}>
    {@render children?.({
      open,
      toggle,
    })}
  </div>
  {#if isOpen}
    <div bind:this={container} class="absolute">
      <div class="min-w-[200px] max-w-[400px]">
        {@render content?.()}
      </div>
    </div>
  {/if}
</div>
