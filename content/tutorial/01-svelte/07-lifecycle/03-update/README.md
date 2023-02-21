---
title: beforeUpdate and afterUpdate
---

> この練習問題で使用される Eliza Chatbot が現時点では動作しません。代わりに、既存のチュートリアルをお試しください: https://svelte.jp/tutorial/update

`beforeUpdate` 関数は DOM が更新される直前に作業をスケジュールします。`afterUpdate` はそれと対になるもので、DOM がデータと同期した後にコードを実行するために使用されます。

これらは、要素のスクロール位置を更新するなど、純粋な状態駆動では実現が困難なことを、命令的に行うのに便利です。

この[Eliza](https://en.wikipedia.org/wiki/ELIZA)のチャットボットは、チャットウィンドウをスクロールし続けなければならないので、使うのが面倒です。そこを直しましょう。

```js
let div;
let autoscroll;

beforeUpdate(() => {
	autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
});

afterUpdate(() => {
	if (autoscroll) div.scrollTo(0, div.scrollHeight);
});
```

`beforeUpdate` はコンポーネントが最初にマウントされる前に実行されるので、プロパティを読み込む前に `div` が存在するかどうかをチェックする必要があるということに注意してください。
