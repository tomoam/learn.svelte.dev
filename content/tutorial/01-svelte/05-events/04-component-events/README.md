---
title: Component events
---

コンポーネントはイベントを発信することもできます。そのためには、イベントディスパッチャを作成する必要があります。`Inner.svelte` を更新してください。

```svelte
/// file: Inner.svelte
<script>
	+++import { createEventDispatcher } from 'svelte';+++

	+++const dispatch = createEventDispatcher();+++

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>
```

> `createEventDispatcher` はコンポーネントを最初にインスタンス化するときに呼び出す必要があります。（後から `setTimeout` のコールバックなどの内側で呼び出すことはできません。）これにより `dispatch` をコンポーネントインスタンスに関連づけます。

それから、`App.svelte` に `on:message` ハンドラを追加します:

```svelte
/// file: App.svelte
<Inner +++on:message={handleMessage}+++ />
```

> イベント名を別の名前に変更してみることもできます。例えば、`Inner.svelte` の `dispatch('message', {...})` を `dispatch('greet', {...})` に変更し、`App.svelte` の属性名を `on:message` から `on:greet` に変更します。
