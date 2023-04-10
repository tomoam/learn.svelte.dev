---
title: setContext and getContext
---

context API は、データや関数をプロパティとして渡したり、たくさんのイベントをディスパッチしたりすることなく、コンポーネント同士で'会話'するための仕組みを提供します。これは高度ですが、便利な機能です。この演習では、generative art のパイオニアである George Nees の [Schotter](https://collections.vam.ac.uk/item/O221321/schotter-print-nees-georg/) を、context API を使って再現してみましょう。

`Canvas.svelte` にはアイテムを canvas に追加する `addItem` 関数があります。これを `<Canvas>` 内のコンポーネント (例えば `<Square>`) で利用できるようにするには、`setContext` を使います:

```svelte
/// file: Canvas.svelte
<script>
	import { +++setContext+++, afterUpdate, onMount, tick } from 'svelte';

	// ...

	onMount(() => {
		ctx = canvas.getContext('2d');
	});

+++	setContext('canvas', {
		addItem
	});+++

	function addItem(fn) {...}

	function draw() {...}
</script>
```

子コンポーネントでは、この context を `getContext` で取得できます:

```svelte
/// file: Square.svelte
<script>
	+++import { getContext } from 'svelte';+++

	export let x;
	export let y;
	export let size;
	export let rotate;

	+++getContext('canvas').addItem(draw);+++

	function draw(ctx) {...}
</script>
```

ここまでは、そう…退屈ですよね。グリッドにランダム性を追加してみましょう:

```svelte
/// file: App.svelte
<div class="container">
	<Canvas width={800} height={1200}>
		{#each Array(12) as _, c}
			{#each Array(22) as _, r}
				<Square
					x={180 + c * 40+++ + jitter(r * 2)+++}
					y={180 + r * 40+++ + jitter(r * 2)+++}
					size={40}
					+++rotate={jitter(r * 0.05)}+++
				/>
			{/each}
		{/each}
	</Canvas>
</div>
```

[ライフサイクル関数](/tutorial/onmount)と同様に、`setContext` と `getContext` はコンポーネントの初期化中に呼び出す必要があります。(context のキー (この演習の場合は `'canvas'`) には文字列以外も含め、好きなものを指定でき、context にアクセスする人をコントロールするのに有用です。)

context オブジェクトには、ストアを含めあらゆるものを含めることができます。これにより、時間の経過とともに変化する値を子コンポーネントに渡すことができます:

```js
/// no-file
// in a parent component
import { setContext } from 'svelte';
import { writable } from 'svelte/store';

setContext('my-context', {
	count: writable(0)
});
```
```js
/// no-file
// in a child component
import { getContext } from 'svelte';

const { count } = getContext('my-context');

$: console.log({ count });
```
