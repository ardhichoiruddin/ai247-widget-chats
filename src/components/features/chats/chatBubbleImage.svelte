<script lang="ts">
  interface Props {
    images: string[];
  }

  let { images = [] }: Props = $props();
</script>

<div class="grid grid-cols-2 gap-2 mt-2">
  {#each images as img, i (i)}
    <div class="w-full h-[120px]">
      <img
        class="w-full h-full object-cover rounded-[10px]"
        src={img}
        alt="{name} {i}"
      />
    </div>
  {/each}
</div>
