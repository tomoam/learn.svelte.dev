---
title: Statements
---

リアクティブな *値* を宣言するだけでなく、任意の *ステートメント* をリアクティブに実行することもできます。例えば、`count` の値が変化するたびにログを取ることができます。

```js
/// file: App.svelte
let count = 0;

+++$: console.log(`the count is ${count}`);+++
```

ブロックで簡単にステートメントをグループ化することができます。

```js
/// file: App.svelte
$: +++{+++
	console.log(`the count is ${count}`);
	alert(`I SAID THE COUNT IS ${count}`);
+++}+++
```

`if` ブロックなどの前に `$:` を置くこともできます。

```js
/// file: App.svelte
$: +++if (count >= 10)+++ {
	alert('count is dangerously high!');
	count = 0;
}
```
