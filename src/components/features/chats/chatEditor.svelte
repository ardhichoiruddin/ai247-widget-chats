<script lang="ts">
  let textareaValue = $state("");

  function autoResize(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = "auto";
    const lineHeight = 20;
    const minHeight = 40;
    const maxLines = 10;
    const maxHeight = lineHeight * maxLines;
    const newHeight = Math.max(
      minHeight,
      Math.min(target.scrollHeight, maxHeight)
    );
    target.style.height = `${newHeight}px`;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      console.log("target.value", target.value);
    }
  }
</script>

<div>
  <div class="flex items-end justify-start gap-2">
    <div class="flex-1 min-w-0">
      <textarea
        bind:value={textareaValue}
        placeholder="tulis pesan..."
        class="w-full outline-none resize-none border-none px-3 py-2 text-base transition-all focus:outline-none"
        oninput={autoResize}
        onkeydown={handleKeydown}
        rows="1"
      ></textarea>
    </div>
    {#if textareaValue.length > 0}
      <div class="shrink-0 pb-1.5">
        <button
          aria-label="send message"
          class="w-[40px] h-[40px] flex items-center justify-center bg-blue-600 rounded-[10px] text-white active:ring-2 active:ring-blue-600/50"
        >
          <span class="icon-send text-lg"></span>
        </button>
      </div>
    {/if}
  </div>
</div>
