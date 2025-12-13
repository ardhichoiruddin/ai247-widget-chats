<script lang="ts">
  let { children } = $props();
</script>

<div class="w-100 bg-white shadow-2xl h-[680px] rounded-[10px] bg-white">
  {@render children()}
</div>
