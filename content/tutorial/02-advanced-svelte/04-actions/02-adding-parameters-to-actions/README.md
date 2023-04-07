---
title: Adding parameters
---

トランジションとアニメーションと同じように、アクションは引数を取ることができます。その引数と、アクション関数自身が属する要素を以って、アクション関数は呼び出されます。

この演習では、[`Tippy.js`](https://atomiks.github.io/tippyjs/) ライブラリを使って `<button>` にツールチップを追加したいと思います。アクションはすでに `use:tooltip` によって紐付けられていますが、ボタンをホバーしても (キーボードでフォーカスしても) ツールチップには何も表示されません。

最初に、アクションでオプションを受け取り、それを Tippy に渡さなければなりません:

```js
/// file: App.svelte
function tooltip(node, +++options+++) {
	const tooltip = tippy(node, +++options+++);

	return {
		destroy() {
			tooltip.destroy();
		}
	};
}
```

それから、オプションをアクションに渡します:

```svelte
/// file: App.svelte
<button use:tooltip+++={{ content, theme: 'material' }}+++>
	Hover me
</button>
```

これでツールチップが動作します — ほとんどは。`<input>` のテキストを変更しても、ツールチップに新しい内容が反映されません。`update` メソッドを追加し、オブジェクトを返すことでこれを修正します。

```js
/// file: App.svelte
function tooltip(node, options) {
	const tooltip = tippy(node, options);

	return {
+++		update(options) {
			tooltip.setProps(options);
		},+++
		destroy() {
			tooltip.destroy();
		}
	};
}
```
