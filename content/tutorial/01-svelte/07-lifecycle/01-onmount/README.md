---
title: onMount
---

> この練習問題の画像は現時点では動作しません。代わりに、既存のチュートリアルをお試しください: https://svelte.jp/tutorial/onmount

すべてのコンポーネントには、作成される時を開始とし、破棄される時に終了とする *ライフサイクル* があります。その重要なタイミングにコードを実行できるようにする関数がいくつかあります。

最も頻繁に使用するのは `onMount` で、これはコンポーネントが最初に DOM にレンダリングされた後に実行されます。

`onMount` ハンドラにネットワークからデータを読み込む処理を追加します。

```svelte
/// file: App.svelte
<script>
	import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		photos = await res.json();
	});
</script>
```

> このコンポーネントがDOMにレンダリングされた上で遅延して読み込まれるべきデータを、サーバーサイドレンダリング（SSR）中には取得せずに済むように、この`fetch`を、`<script>` の最上位ではなく、 `onMount` の中に入れることが推奨されます。なぜなら、`onDestroy`以外のライフサイクル関数がSSR中に動作することはないからです。

ライフサイクル関数は、コールバックがコンポーネントのインスタンスにバインドされるように、コンポーネントの初期化中に呼び出されなければなりません。例えば、`setTimeout` の中で呼び出されてはいけません。

もし `onMount` コールバックが関数を返す場合、その関数はコンポーネントが破棄されたときに呼び出されます。
