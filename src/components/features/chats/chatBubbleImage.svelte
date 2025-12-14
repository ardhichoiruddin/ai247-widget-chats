<script lang="ts">
  interface Props {
    images: string[];
    onImagePreview?: (url: string) => void;
  }

  let { images = [], onImagePreview }: Props = $props();
</script>

<div class="grid grid-cols-2 gap-2 mt-2">
  {#each images as img, i (i)}
    <div class="w-full h-[120px]">
      <button onclick={() => onImagePreview?.(img)} class="outline-none">
        <img
          class="w-full h-full object-cover rounded-[10px]"
          src={img}
          alt="image {i}"
        />
      </button>
    </div>
  {/each}
</div>
