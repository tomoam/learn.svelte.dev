---
title: Derived stores
---

`derived` を使用して、1つまたはそれ以上の _他の_ store に基づいた値の store を作成することができます。前の例を利用して、ページが開かれている時間を取得する store を作成することができます。

```js
/// file: stores.js
export const elapsed = derived(
    time,
    ($time) => +++Math.round(($time - start) / 1000)+++
);
```

> 複数の input store から derived store を作成したり、値を返す代わりに `set` を使用して明示的に値をセットすることができます。（これは非同期で値を取得する場合に役立ちます。）詳細については [API リファレンス](https://svelte.jp/docs#run-time-svelte-store-derived) を参照してください。
