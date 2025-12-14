<script lang="ts">
  import ButtonGroup from "../../buttonGroup.svelte";
  import EmojiPicker from "./emojiPicker.svelte";
</script>

{#snippet emojiContent()}
  <EmojiPicker />
{/snippet}

<div class="flex items-center justify-between px-2 pb-2">
  <div class="flex items-center justify-start gap-2">
    <div>
      <ButtonGroup content={emojiContent} placement="bottom-start">
        {#snippet children({ open })}
          <button onclick={open} aria-label="emoji button">
            <span class="text-lg icon-emoji-smile"></span>
          </button>
        {/snippet}
      </ButtonGroup>
    </div>
    <div>
      <button aria-label="file button">
        <span class="text-lg icon-paperclip"></span>
      </button>
    </div>
    <div>
      <button aria-label="sound button">
        <span class="text-lg icon-soundwave"></span>
      </button>
    </div>
  </div>
  <div>
    <span class="text-sm">We run on Ai247</span>
  </div>
</div>
