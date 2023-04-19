---
title: Slot props
---

コンポーネントは、 _slot props_ を使って slot されるコンテンツにデータを渡すことができます。このアプリには、名前付きの CSS カラーのリストがあり、`<input>` になにかを入力するとそのリストがフィルタリングされます。

現在はすべての行が `AliceBlue` と表示されており、とても素敵な色ですが、この状態は望ましくありません。

`FilterableList.svelte` を開きましょう。`<slot>` はリストからフィルタリングされたアイテムごとにレンダリングされています。slot にデータを渡しましょう:

```svelte
/// file: FilterableList.svelte
<div class="content">
	{#each data.filter(matches) as item}
		<slot +++{item}+++ />
	{/each}
</div>
```

(他と同様、`{item}` は `item={item}` の短縮形です。)

そしてもう一方では、`let:` ディレクティブで slot されるコンテンツにデータを公開します:

```svelte
/// file: App.svelte
<FilterableList
	data={colors}
	field="name"
	+++let:item={row}+++
>
	<div class="row">
		<span class="color" style="background-color: {row.hex}" />
		<span class="name">{row.name}</span>
		<span class="hex">{row.hex}</span>
		<span class="rgb">{row.rgb}</span>
		<span class="hsl">{row.hsl}</span>
	</div>
</FilterableList>
```

最後に、もう必要ないプレースホルダーの変数を削除しましょう:

```svelte
/// file: App.svelte
<script>
	import FilterableList from './FilterableList.svelte';
	import { colors } from './colors.js';

	---let row = colors[0];---
</script>
```

> Named slot もプロパティを持つことができます; コンポーネント自体にではなく、`slot="..."` 属性を持つ要素に `let` ディレクティブを使用します。
