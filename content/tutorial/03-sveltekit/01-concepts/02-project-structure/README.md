---
title: Project structure
---

右にあるファイルツリービューアには、SvelteKit のプロジェクトに含まれているであろうファイルのうち一部が表示されています。

Node.js を使用したことがあるなら、`package.json` はおなじみでしょう。プロジェクトの依存関係 (`svelte` と `@sveltejs/kit` を含む) と、SvelteKit CLI を操作するための様々な `scripts` がリストアップされています。(現在バックグラウンドで `npm run dev` が実行されています)

> `"type": "module"` が指定されていることにもご注意ください。つまり、`.js` ファイルはデフォルトで、レガシーな CommonJS フォーマットではなくネイティブの JavaScript モジュールとして扱われます。

`svelte.config.js` にはプロジェクトの設定が記述されています。今はこのファイルについて気にする必要はありませんが、もし興味があれば、[ドキュメントを参照してください](https://kit.svelte.jp/docs/configuration)。

`src` はアプリのソースコードを置く場所です。`src/app.html` はページのテンプレート (SvelteKit が `%sveltekit.head%` と `%sveltekit.body%` を適切に置き換えます) で、`src/routes` はアプリの [ルート(routes)](/tutorial/pages) を定義します。

最後に、`static` にはアプリをデプロイするときに含めるべきアセット (`favicon.png` や `robots.txt` など) を置きます。
