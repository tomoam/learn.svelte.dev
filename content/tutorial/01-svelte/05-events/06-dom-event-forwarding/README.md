---
title: DOM event forwarding
---

イベントフォワーディングは DOM イベントでも機能します。

`<BigRedButton>` でのクリックの通知を受け取るためには、`BigRedButton.svelte` にある `<button>` 要素の `click` イベントをフォワードする必要があります。

```svelte
/// file: BigRedButton.svelte
<button +++on:click+++>
	Push
</button>
```
