<script lang="ts">
  import { onClickOutside } from "runed";
  interface Props {
    imageUrl: string | null;
  }

  let { imageUrl = $bindable() }: Props = $props();

  let imageContainer = $state<HTMLElement>()!;

  onClickOutside(
    () => imageContainer,
    () => (imageUrl = null)
  );
</script>

{#if imageUrl}
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/50 z-[1001]"
  >
    <div
      bind:this={imageContainer}
      class="max-w-[820px] max-h-[500px] px-2 md:px-4"
    >
      <img
        class="w-full h-full object-contain"
        src={imageUrl}
        alt="preview"
        loading="lazy"
      />
    </div>
  </div>
{/if}
