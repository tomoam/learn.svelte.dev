---
title: Textarea inputs
---

> この練習問題は現時点では動作しません。代わりに、既存のチュートリアルをお試しください: https://svelte.jp/tutorial/textarea-inputs

Svelteでは、`<textarea>`要素はtext inputと同じように振る舞います。`bind:value`を使ってみましょう。

```svelte
<textarea bind:value={value}></textarea>
```

このように名前が一致する場合は、省略形を使用することもできます。

```svelte
<textarea bind:value></textarea>
```

これはtextareaに限らず全てのバインディングに適用されます。
