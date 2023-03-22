---
title: Binding to component instances
---

DOM要素にバインドできるのと同じように、コンポーネントのインスタンス自体にもバインドできます。たとえば、DOM要素をバインドするときと同じように、`<InputField>` のインスタンスを `field` 変数にバインドすることができます。

```svelte
/// file: App.svelte
<script>
	import InputField from './InputField.svelte';

	+++let field;+++
</script>

<InputField +++bind:this={field}+++ />
```

これで、`field` を使って、このコンポーネントをプログラムで操作できるようになりました。

```svelte
/// file: App.svelte
<button +++on:click={() => field.focus()}+++>
	Focus field
</button>
```

> なお、ボタンが最初にレンダリングされたとき、`field` は未定義であるため、`{field.focus}` を行うことはできません。
