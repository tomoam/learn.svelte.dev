---
title: Binding to component instances
---

DOM 要素にバインドできるのと同じように、`bind:this` でコンポーネントインスタンス自体にバインドすることができます。

ごく稀に、(更新されたプロパティを提供するのではなく) プログラム的にコンポーネントと対話しなければならないことがあり、これはそれに有用です。[少し前の演習](actions)の canvas アプリを振り返ると、画面をクリアするボタンを追加するともっとよくなりそうです。

最初に、`Canvas.svelte` から関数をエクスポートしましょう:

```svelte
/// file: Canvas.svelte
export let color;
export let size;

+++export function clear() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}+++
```

次に、コンポーネントインスタンスの参照を作成します:

```svelte
/// file: App.svelte
<script>
	import Canvas from './Canvas.svelte';
	import { trapFocus } from './actions.js';

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let showMenu = true;
	+++let canvas;+++
</script>

<div class="container">
	<Canvas +++bind:this={canvas}+++ color={selected} size={size} />
```

最後に、`clear` 関数を呼び出すボタンを追加します:

```svelte
/// file: App.svelte
<div class="controls">
	<button class="show-menu" on:click={() => showMenu = !showMenu}>
		{showMenu ? 'close' : 'menu'}
	</button>

+++	<button on:click={() => canvas.clear()}>
		clear
	</button>+++
</div>
```