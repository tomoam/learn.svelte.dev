---
title: Default values
---

`Nested.svelte`のプロパティのデフォルト値を簡単に指定することができます。

```svelte
/// file: Nested.svelte
<script>
	export let answer +++= 'a mystery'+++;
</script>
```

`answer`プロパティなしで2つ目のコンポーネントを追加すると、デフォルト値にフォールバックします。

```svelte
/// file: App.svelte
<Nested answer={42}/>
+++<Nested />+++
```
