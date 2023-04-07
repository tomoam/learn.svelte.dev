---
title: Exports
---

`context="module"` スクリプトブロックからエクスポートされたものはすべてモジュール自体からのエクスポートになります。`stopAll` 関数をエクスポートしましょう:

```svelte
/// file: AudioPlayer.svelte
<script context="module">
	let current;

+++	export function stopAll() {
		current?.pause();
	}+++
</script>
```

`App.svelte` で `stopAll` をインポートすることができます…

```svelte
/// file: App.svelte
<script>
	import AudioPlayer, +++{ stopAll }+++ from './AudioPlayer.svelte';
</script>
```

…さらにそれをイベントハンドラで使うことができます。

```svelte
/// file: App.svelte
<div class="centered">
	{#each tracks as track}
		<AudioPlayer {...track} />
	{/each}

+++	<button on:click={stopAll}>
		stop all
	</button>+++
</div>
```

> default export は使うことはできません、なぜならコンポーネント *が* default export だからです。
