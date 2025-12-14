<script lang="ts">
  let { children } = $props();
</script>

<div class="flex flex-col-reverse w-full gap-4 h-[500px] overflow-x-auto">
  {@render children()}
</div>
