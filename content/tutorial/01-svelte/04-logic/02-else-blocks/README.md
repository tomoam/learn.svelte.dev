---
title: Else blocks
---

JavaScript と同じように、`if` ブロックには `else` ブロックを置くことができます:

```svelte
/// file: App.svelte
{#if count > 10}
	<p>{count} is greater than 10</p>
+++{:else}
	<p>{count} is between 0 and 10</p>+++
{/if}
```

> `#` の文字は常に _ブロックの開始_ タグを示します。 `/` の文字は常に *ブロックの終了* タグを示します。  `:` の文字は `{:else}` のように _ブロックの継続_ タグを示します。心配しないでください。あなたは既にSvelteがHTMLに追加する構文のほとんどを学んでいます。
