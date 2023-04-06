---
title: If blocks
---

HTML には条件式やループのような *ロジック* を表現する方法がありません。Svelteにはあります。

条件付きでマークアップをレンダリングする場合は、そのマークアップを `if` ブロックで囲みます。`count` が 10 より大きいときに表示されるテキストを追加してみましょう:

```svelte
/// file: App.svelte
<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

+++{#if count > 10}
	<p>{count} is greater than 10</p>
{/if}+++
```

試してみてください。コンポーネントを更新し、ボタンをクリックしてみてください。
