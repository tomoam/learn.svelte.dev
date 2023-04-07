---
title: Shorthand class directive
---

多くの場合、クラスの名前はそれが依存する値の名前と同じになります。

```svelte
/// no-file
<button
	class="card"
	class:flipped={flipped}
	on:click={() => flipped = !flipped}
>
```

そのような場合は、ショートハンドを使うことができます。

```svelte
/// file: App.svelte
<button
	class="card"
	+++class:flipped+++
	on:click={() => flipped = !flipped}
>
```
