---
title: Writable stores
---

すべてのアプリケーションの状態がアプリケーションのコンポーネント階層の内部にあるわけではありません。場合によっては、関連のない複数のコンポーネントや、通常の JavaScript モジュールからアクセスする必要のある値があります。

Svelte では、これを _store(ストア)_ で行います。store とは、単に、値が変化するたびに関係者に通知する`subscribe` メソッドを備えたオブジェクトです。`App.svelte` の `count` は store であり、`count.subscribe` のコールバックの中で `count_value` を設定しています。

`stores.js` を開いて `count` の定義を見てください。これは書き込み可能な store です。つまり、 `subscribe` メソッドに加えて、`set` と `update` メソッドも兼ね備えています。

次に、`Incrementer.svelte` で、`+` ボタンと連動するようにします。

```js
/// file: Incrementer.svelte
function increment() {
	+++count.update((n) => n + 1);+++
}
```

`+` ボタンをクリックすると、count が更新されます。`Decrementer.svelte` に戻す機能を実装してみてください。

最後に、`Resetter.svelte` で `reset` を実装します。

```js
/// file: Resetter.svelte
function reset() {
	+++count.set(0);+++
}
```
