<script lang="ts">
  import type { HelpDetailType } from "./types";

  let {
    id,
    title,
    sub_title,
    content,
    isLoading,
  }: HelpDetailType & {
    isLoading: boolean;
  } = $props();
</script>

<div>{sub_title}</div>
