<script lang="ts">
  let { children } = $props();
</script>

<div
  class="flex flex-col-reverse w-full gap-4 py-2 px-4 min-h-0 overflow-x-auto h-full scroll-smooth"
>
  {@render children()}
</div>
