---
title: Customizing use:enhance
---

`use:enhance` を使えば、ブラウザネイティブな動作をエミュレートするだけでなく、さらに踏み込んだことができます。コールバックを提供することで、**待機状態(pending states)** や **楽観的なUI(optimistic UI)** を追加することができます。私たちの2つの action にわざと遅延を追加し、遅いネットワークをシミュレートしましょう。

```js
/// file: src/routes/+page.server.js
export const actions = {
	create: async ({ cookies, request }) => {
		+++await new Promise((fulfil) => setTimeout(fulfil, 1000));+++
		...
	},

	delete: async ({ cookies, request }) => {
		+++await new Promise((fulfil) => setTimeout(fulfil, 1000));+++
		...
	}
};
```

アイテムを作成または削除するとき、UI の更新まで丸1秒かかるようになっており、ユーザーはなにか失敗したのかと思うようになります。これを解決するには、ローカルの状態(local state)をいくつか追加します…

```svelte
/// file: src/routes/+page.svelte
<script>
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let data;
	export let form;

+++	let creating = false;
	let deleting = [];+++
</script>
```

…そして1つ目の `use:enhance` の内側で、`creating` を切り替えます。

```svelte
<form
	method="POST"
	action="?/create"
+++	use:enhance={() => {
		creating = true;

		return async ({ update }) => {
			await update();
			creating = false;
		};
	}}+++
>
	<label>
		+++{creating? 'saving...' : 'add a todo:'}+++
		<input
			+++disabled={creating}+++
			name="description"
			value={form?.description ?? ''}
			required
		/>
	</label>
</form>
```

削除の場合、サーバーがなにか検証するのを待つ必要はありません — すぐに UI を更新することができます。

```svelte
<ul>
	{#each +++data.todos.filter((todo) => !deleting.includes(todo.id))+++ as todo (todo.id)}
		<li class="todo" in:fly={{ y: 20 }} out:slide>
			<form
				method="POST"
				action="?/delete"
				+++use:enhance={() => {
					deleting = [...deleting, todo.id];
					return async ({ update }) => {
						await update();
						deleting = deleting.filter((id) => id !== todo.id);
					};
				}}+++
			>
				<input type="hidden" name="id" value={todo.id} />
				<button aria-label="Mark as complete">✔</button>

				{todo.description}
			</form>
		</li>
	{/each}
</ul>
```

> `use:enhance` はとてもカスタマイズしやすく、フォーム送信の `cancel()`、リダイレクト処理、form をリセットするかどうかの制御、などを行うことができます。詳細については [ドキュメントをご覧ください](https://kit.svelte.jp/docs/modules#$app-forms-enhance)。
