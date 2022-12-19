---
title: Pages
---

SvelteKit はファイルシステムベースのルーティングを採用しており、アプリの _ルート(routes)_ (言い換えると、ユーザーが特定の URL に移動したときにアプリがすべきこと) については、コードベースのディレクトリで定義します。

ルート(routes)は `src/routes` の中に置きます。`+page.svelte` ファイルを含む全てのディレクトリが、アプリのルート(routes)となります。

このアプリには、現在はルート(route)が1つだけあります。それは `src/routes/+page.svelte` で、`/` にマップされています。

2つ目のルート(route)として、`src/routes/about/+page.svelte` を追加してみましょう。これは `/about` にマップされます。

```svelte
/// file: src/routes/about/+page.svelte
<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<h1>about</h1>
<p>this is the about page.</p>
```

これによって `/` と `/about` の間を移動できるようになりました。

> 従来のマルチページアプリとは違い、`/about` に移動してから戻ると、シングルページアプリのように現在のページのコンテンツが更新されます。これにより、サーバーレンダリングによるスタートアップと、瞬時のナビゲーションという、両方の長所を得ることができます。(この動作は[設定で変更できます](https://kit.svelte.jp/docs/page-options)。)
