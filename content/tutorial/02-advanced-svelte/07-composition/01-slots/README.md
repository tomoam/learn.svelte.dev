---
title: Slots
---

要素が子を持つことができるように…

```html
/// no-file
<div>
	<p>I'm a child of the div</p>
</div>
```

…コンポーネントもそうすることができます。しかしコンポーネントが子を受け入れる前に、どこに子を置くかを知っておく必要があります。これを `<slot>` 要素で行います。これを `Card.svelte` の中に入れてください:

```svelte
/// file: Card.svelte
<div class="card">
	+++<slot />+++
</div>
```

これで card に物を入れることができるようになりました:

```svelte
/// file: App.svelte
<Card>
	+++<span>Patrick BATEMAN</span>+++
	+++<span>Vice President</span>+++
</Card>
```
