<script lang="ts">
  let { children } = $props();
</script>

<div
  class="flex flex-col-reverse w-full gap-4 py-2 px-2 min-h-0 overflow-x-auto h-full"
>
  {@render children()}
</div>
