---
title: <svelte:element>
---

(前回の演習と)同様、どのような DOM 要素をレンダリングするのかいつも事前にわかるとはかぎりません。ここで便利なのが `<svelte:element>` です。[前回の演習](svelte-component)と同じように、長い`if` ブロックの列を1つの動的なコンポーネントで置き換えることができます:

```svelte
/// file: App.svelte
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

+++<svelte:element this={selected}>
	I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>+++
```

`this` の値は任意の文字列、または falsy な値です。falsy である場合、要素はレンダリングされません。
