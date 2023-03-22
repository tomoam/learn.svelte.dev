---
title: Await blocks
---

ほとんどの webアプリケーションでは、どこかの時点で非同期のデータを扱わなければなりません。Svelte ではマークアップの中で直接 [promises](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises) の値を簡単に *await* することができます。

```svelte
/// file: App.svelte
{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
```

> 直近の `promise` だけが処理されるので、他の非同期処理の状態を気にする必要はありません。

promise が reject できないことがわかっている場合は、`catch` ブロックを省略することができます。また promise が resolve するまで何も表示したくない場合は、最初のブロックを省略することもできます。

```svelte
/// file: App.svelte
{#await promise then number}
	<p>The number is {number}</p>
{/await}
```
