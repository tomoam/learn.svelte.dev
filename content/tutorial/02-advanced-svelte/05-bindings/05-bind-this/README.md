---
title: This
---

[以前の演習](onmount)で、canvas にお絵描きをするために `onMount` ライフサイクル関数の使い方を学びました。

しかし、あの例は少しバギー(buggy)です — `document.querySelector('canvas')` を使用しており、ページで一番最初に見つかった `<canvas>` を常に返します。それは私たちのコンポーネントにあるものではない別の canvas かもしれません。

代わりに、読み取り専用の `this` バインディングを使用して、要素の参照を取得できます:

```js
/// file: App.svelte
+++let canvas;+++

onMount(() => {
	---const canvas = document.querySelector('canvas')---
	const context = canvas.getContext('2d');

	let frame = requestAnimationFrame(function loop(t) {
		frame = requestAnimationFrame(loop);
		paint(context, t);
	});

	return () => {
		cancelAnimationFrame(frame);
	};
});
```

```svelte
/// file: App.svelte
<canvas
	+++bind:this={canvas}+++
	width={32}
	height={32}
></canvas>
```

`canvas` の値はコンポーネントがマウントされるまで `undefined` です、ご注意ください。
