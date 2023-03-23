---
title: Assignments
---

Svelteの中心には、DOMを（例えば、イベントに応じて）アプリケーションの状態に同期し続けさせるための強力な *reactivity* システムがあります。

これを実演するには、まずイベントハンドラ (これは[後ほど](/tutorial/dom-events)学習します) を定義する必要があります。

```svelte
/// file: App.svelte
<button +++on:click={increment}+++>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
```

`increment` 関数の内側で必要なのは `count` の値を変更することだけです。

```js
/// file: App.svelte
function increment() {
	+++count += 1;+++
}
```

Svelteは、DOMが更新される必要があることを伝えるコードをこの代入に'取り付け'ます。
