---
title: DOM events
---

今までざっと見てきたように、`on:` ディレクティブを使用して要素の任意の DOM イベント (例えば click や [pointermove](https://developer.mozilla.org/ja/docs/Web/API/Element/pointermove_event)) をリスニングできます。

```svelte
/// file: App.svelte
<div +++on:pointermove={handleMove}+++>
	The pointer is at {m.x} x {m.y}
</div>
```
