---
title: Inline handlers
---

イベントハンドラをインラインで宣言することもできます。

```svelte
/// file: App.svelte
<script>
	let m = { x: 0, y: 0 };

	---function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}---
</script>

<div
	on:pointermove={+++(e) => {
		m = { x: e.clientX, y: e.clientY };
	}+++}
>
	The mouse position is {m.x} x {m.y}
</div>
```

> 一部のフレームワークでは、パフォーマンス上の理由から、特にループ処理内で、イベントハンドラをインラインで宣言しないように推奨されています。しかし、この推奨事項はSvelteには当てはまりません。あなたがどのように書いたとしても、常に適切にコンパイルします。
