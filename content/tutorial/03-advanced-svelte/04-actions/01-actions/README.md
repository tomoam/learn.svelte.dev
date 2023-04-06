---
title: The use directive
---

アクション(action)は基本的に要素レベルのライフサイクル関数です。これらは以下のような場合に便利です。

- サードパーティライブラリとの連携
- 画像の遅延読み込み
- ツールチップ
- カスタムイベントハンドラの追加

このアプリは `<canvas>` に落書きすることができます。メニューから色やブラシの大きさを変えたりすることができます。しかし、メニューを開いてタブキーでオプションを循環させようとすると、フォーカスがモーダルの中に閉じ込められていないことに気が付くと思います。

これはアクションで修正することができます。`actions.js` から `trapFocus` をインポートし…

```svelte
/// file: App.svelte
<script>
	import Canvas from './Canvas.svelte';
	+++import { trapFocus } from './actions.js';+++

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let showMenu = true;
</script>
```

…そして、それを `use:` ディレクティブを使ってメニュー(menu)に追加します:

```svelte
/// file: App.svelte
<div class="menu" +++use:trapFocus+++>
```

`actions.js` にある `trapFocus` 関数を見てみましょう。アクション関数は `node` (この場合は `<div class="menu">`) が DOM にマウントされたときに、その node を引数に取って呼び出され、`destroy` メソッドを持つアクションオブジェクトを返します。

まず、タブキーが押されたことをインターセプトするイベントリスナーを追加する必要があります:

```js
/// file: actions.js
focusable()[0]?.focus();

+++node.addEventListener('keydown', handleKeydown);+++
```

次に、node がアンマウントされたときにいくつかクリーンアップする必要があります — イベントリスナーを削除し、フォーカスを要素がマウントされる前の場所に戻します:

```js
/// file: actions.js
focusable()[0]?.focus();

node.addEventListener('keydown', handleKeydown);

+++return {
	destroy() {
		node.removeEventListener('keydown', handleKeydown);
		previous?.focus();
	}
};+++
```

これで、メニューを開いた時に、タブキーでオプションを循環させられるようになりました。
