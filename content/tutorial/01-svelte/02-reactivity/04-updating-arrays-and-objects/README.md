---
title: Updating arrays and objects
---

Svelte のリアクティビティは代入によってトリガーされるため、`push` や `splice` のような配列のメソッドを使用しても更新が自動的に行われません。例えば、`addNumber` の内側で `numbers.push(...)` を呼び出していますが、'Add a number' ボタンをクリックしても今のところ何も起こりません。

これを修正する方法の1つとして、冗長に見えるかもしれませんが、代入を追加することです。

```js
/// file: App.svelte
function addNumber() {
	numbers.push(numbers.length + 1);
	+++numbers = numbers;+++
}
```

もう少し慣用的な解決策もあります。

```js
/// file: App.svelte
function addNumber() {
	numbers = +++[...numbers, numbers.length + 1];+++
}
```

同様のパターンで、`pop`、`shift`、`unshift`、`splice` を置き換えることができます。

配列やオブジェクトの *プロパティ* への代入（例：`obj.foo += 1` や `array[i] = x`）は値自体への代入と同じように動作します。

```js
/// file: App.svelte
function addNumber() {
	numbers[numbers.length] = numbers.length + 1;
}
```

大まかなまとめ: 更新される変数の名前は、代入の左側に置かなければならない。例えばこれは…

```js
/// no-file
const obj = { foo: { bar: 1 } };
const foo = obj.foo;
foo.bar = 2;
```

…`obj.foo.bar` に対するリアクティビティはトリガーされません。もしトリガーしたければ、`obj = obj` を続けて書く必要があります。
