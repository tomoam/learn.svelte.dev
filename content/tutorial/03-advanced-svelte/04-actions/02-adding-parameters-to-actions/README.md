---
title: Adding parameters
---

トランジションやアニメーションのように、アクションは引数を取ることができ、アクション関数はそれが属する要素と一緒に呼び出されます。

ここでは、ユーザがボタンを長押しするたびに同じ名前のイベントを発生させる `longpress` アクションを使っています。`longpress.js` に切り替えると、500msにハードコードされていることがわかります。

アクション関数を変更して、第2引数に `duration` を指定し、そしてその `duration` を `setTimeout` に渡すことができます。

```js
/// file: longpress.js
export function longpress(node, +++duration+++) {
	// ...

	const handleMousedown = () => {
		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, +++duration+++);
	};

	// ...
}
```

`App.svelte` に戻り、`duration` の値をアクションに渡すことができます。

```svelte
/// file: App.svelte
<button
	use:longpress+++={duration}+++
	on:longpress={() => (pressed = true)}
	on:mouseenter={() => (pressed = false)}
>
	press and hold
</button>
```

これは、*大体* 動作します。イベントは2秒後にのみ発生するようになりました。しかし、デュレーションを下にスライドさせても、まだ2秒かかります。

これを変更するには、`longpress.js` に `update` メソッドを追加します。これは引数が変更されるたびに呼び出されます。

```js
/// file: longpress.js
return {
	update(newDuration) {
		duration = newDuration;
	},
	// ...
};
```

> 複数の引数をアクションに渡す必要がある場合は、`use:longpress={{duration, spiciness}}` のように、それらを1つのオブジェクトに結合します。
