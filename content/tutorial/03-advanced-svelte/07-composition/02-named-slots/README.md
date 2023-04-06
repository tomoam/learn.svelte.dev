---
title: Named slots
---

前回の例には _default slot_ があり、それはコンポーネントの直接の子をレンダリングするものでした。時々、配置場所をもっとコントロールしなければならないときがあると思います。そのような場合は、 _named slots_ を使用することができます。

`<Card>` コンポーネントの子として、すでに `<span slot="telephone">` や、その他 `company` や `address` が置いてあります。これに対応するように、named slots を `Card.svelte` に追加しましょう:

```svelte
/// file: Card.svelte
<div class="card">
+++	<header>
		<slot name="telephone" />
		<slot name="company" />
	</header>+++

	<slot />
		
+++	<footer>
		<slot name="address" />
	</footer>+++
</div>
```

`<small>` 要素にいくつかスタイルを追加して、自身の行におさまるようにします。`<Card>` のコンテンツは `Card.svelte` から `font-family` (この書体は ['Silian Rail'](https://www.youtube.com/watch?v=aZVkW9p-cCU) と呼ばれます) などのスタイルを継承しますが、通常のスコープのルールが適用されるため、この要素がある場所、つまり `App.svelte` にスタイルを追加します:

```svelte
/// file: App.svelte
<style>
	main {
		display: grid;
		place-items: center;
		height: 100%;
		background: url(./wood.svg);
	}

+++	small {
		display: block;
		font-size: 0.6em;
		text-align: right;
	}+++
</style>
```

別の方法として、`Card.svelte` の中で `:global` 修飾子を使用して `.card` の内側にあるすべての `small` 要素をターゲットにすることができます:

```svelte
/// file: Card.svelte
<style>
	/* ... */ 

	+++.card :global(small) {
		display: block;
		font-size: 0.6em;
		text-align: right;
	}+++
</style>
```