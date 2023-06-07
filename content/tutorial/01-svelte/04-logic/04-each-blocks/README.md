---
title: Each blocks
---

ユーザーインターフェースを作る時、データのリストを扱うことがよくあります。この練習問題では、`<button>` マークアップを何度も繰り返し、その度に色を変えていますが、まだ追加するものがあります。

手間暇かけてコピー、ペースト、編集する代わりに、最初の button 以外を取り除き、そして `each` ブロックを使用します:

```svelte
/// file: App.svelte
<div>
	+++{#each colors as color}+++
		<button
			aria-current={selected === 'red'}
			aria-label="red"
			style="background: red"
			on:click={() => selected = 'red'}
		></button>
	+++{/each}+++
</div>
```

> 式(この場合は `colors`)は、任意の配列や配列に似たオブジェクトにすることができます(つまり、`length`プロパティを持っています)。一般的な反復可能なデータ構造は `each [...iterable]` を用いてループさせることができます。

こうする場合、`"red"` の代わりに `color` 変数を使用する必要があります:

```svelte
/// file: App.svelte
<div>
	{#each colors as color}
		<button
			aria-current={selected === +++color+++}
			aria-label=+++{color}+++
			style="background: +++{color}+++"
			on:click={() => selected = +++color+++}
		></button>
	{/each}
</div>
```

第2引数として現在の _index_ をこのように取得することができます。

```svelte
/// file: App.svelte
<div>
	{#each colors as color, +++i}+++
		<button
			aria-current={selected === color}
			aria-label={color}
			style="background: {color}"
			on:click={() => selected = color}
		>+++{i + 1}+++</button>
	{/each}
</div>
```
