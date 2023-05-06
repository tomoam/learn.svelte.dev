---
title: Declarations
---

Svelte は、コンポーネントの状態が変更されると自動的に DOM を更新します。しばしば、コンポーネントの状態には、 _他の_ 状態から計算しなければならない部分があり (例えば、`firstname` と `lastname` から派生する `fullname`)、それらが変更されるたびに再計算しなければなりません。

これに対応するために、 _リアクティブ宣言(reactive declarations)_ があります。次のように記述します。

```js
/// file: App.svelte
let count = 0;
+++$: doubled = count * 2;+++
```

> これが少し異質に見えても心配しないでください。これは（見慣れないかもしれませんが） [正しい](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/label) JavaScript で、Svelte は「参照される値が変わるたびにこのコードを再実行する」という意味だと解釈します。一度慣れてしまえば、もう戻れません。

マークアップで `doubled` を使ってみましょう。

```svelte
/// file: App.svelte
<button>...</button>

+++<p>{count} doubled is {doubled}</p>+++
```

もちろん、代わりに `{count * 2}` とマークアップに書くだけでもよいでしょう。リアクティブな値を使用する必要はありません。リアクティブな値は、複数回参照する必要がある場合や、*他の* リアクティブな値に依存する値がある場合に使用する価値があります。

> リアクティブ宣言(reactive declarations)とリアクティブステートメント(reactive statements)は、他のスクリプトコードの後、かつコンポーネントのマークアップがレンダリングされる前に実行されることにご注意ください。
