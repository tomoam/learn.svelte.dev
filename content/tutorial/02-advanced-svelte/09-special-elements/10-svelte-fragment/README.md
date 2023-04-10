---
title: <svelte:fragment>
---

`<svelte:fragment>` 要素は、コンテナ DOM 要素でラップすることなく、名前のついたスロットにコンテンツを配置する事ができます。

この演習では三目並べ(Tic-Tac-Toe)を作ります。グリッドを作るため、`App.svelte` の `<button>` 要素を `Board.svelte` の `<div class="board">` の直接の子孫にしなければなりません。

今壊れているのは、`<div slot="game">` の子になってしまっているからです。修正してみましょう:

```svelte
/// file: App.svelte
<+++svelte:fragment+++ slot="game">
	{#each squares as square, i}
		<button
			class="square"
			class:winning={winningLine?.includes(i)}
			disabled={square}
			on:click={() => {
				squares[i] = next;
				next = next === 'x' ? 'o' : 'x';
			}}
		>
			{square}
		</button>
	{/each}
</+++svelte:fragment+++>
```