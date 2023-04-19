---
title: Store bindings
---

store が書き込み可能、つまり `set` メソッドを持っている場合は、ローカルコンポーネントの状態にバインドするのと同じように、store の値にバインドできます。

この例では、書き込み可能な store である `name` と、derived store である `greeting` を `stores.js` でエクスポートしています。`App.svelte` の `<input>` 要素を以下のように更新してください:

```svelte
/// file: App.svelte
<input +++bind:+++value={$name}>
```

入力値を変更すると `name` とそれに依存しているもの全てが更新されます。

また、コンポーネント内で store の値に直接代入することもできます。`<input>` の後ろに `<button>` 要素を追加してください:

```svelte
/// file: App.svelte
<button +++on:click={() => $name += '!'}+++>
	Add exclamation mark!
</button>
```

`$name += '!'` の代入は `name.set($name + '!')` と同等です。
