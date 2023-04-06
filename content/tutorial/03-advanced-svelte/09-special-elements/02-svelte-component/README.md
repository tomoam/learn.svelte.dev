---
title: <svelte:component>
---

コンポーネントは `<svelte:component>` でそのタイプを完全に変更することができます。この演習では、`color` が `red` なら `RedThing.svelte` を、`green` なら `GreenThing.svelte` を、というように表示したいと思います。

`if` ブロックの長い列を使ってこれを行うこともできます…

```svelte
/// file: App.svelte
{#if selected.color === 'red'}
	<RedThing/>
{:else if selected.color === 'green'}
	<GreenThing/>
{:else if selected.color === 'blue'}
	<BlueThing/>
{/if}
```

…これだと少し面倒です。代わりに、動的なコンポーネントを1つ作ることができます:

```svelte
/// file: App.svelte
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

+++<svelte:component this={selected.component}/>+++
```

`this` 値には任意のコンポーネントコンストラクタ、または falsy な値を指定できます。falsy の値を指定した場合、コンポーネントはレンダリングされません。
