---
title: Checking for slot content
---

slot されるコンテンツが渡されたかどうかに基づいて、コンポーネントの一部をコントロールしたいことがあります。例えば、`App.svelte` から  `<header>` を削除すると…

```svelte
/// file: App.svelte
---<header slot="header" class="row">
	<span class="color" />
	<span class="name">name</span>
	<span class="hex">hex</span>
	<span class="rgb">rgb</span>
	<span class="hsl">hsl</span>
</header>---

<div class="row">
	<span class="color" style="background-color: {row.hex}" />
	<span class="name">{row.name}</span>
	<span class="hex">{row.hex}</span>
	<span class="rgb">{row.rgb}</span>
	<span class="hsl">{row.hsl}</span>
</div>
```

…見苦しい二重線のボーダーが残ってしまいます。なぜなら `FilterableList.svelte` ではまだ `<div class="header">` をレンダリングしているからです。

`FilterableList.svelte` で特別な `$$slots` 変数を使用して修正します:

```svelte
/// file: FilterableList.svelte
+++{#if $$slots.header}+++
	<div class="header">
		<slot name="header"/>
	</div>
+++{/if}+++
```
