<script lang="ts">
  interface Props {
    value?: string;
  }

  let { value = $bindable() }: Props = $props();
</script>

<div class="relative">
  <span class="icon-search absolute top-[30%] text-sm"></span>
  <input
    bind:value
    class="w-full pl-6 pt-2 pb-4 focus:outline-none"
    placeholder="search..."
  />
</div>
