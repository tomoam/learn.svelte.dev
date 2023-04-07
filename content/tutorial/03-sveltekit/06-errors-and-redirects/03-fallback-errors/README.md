---
title: Fallback errors
---

もし _深刻な_ 問題が発生した場合 — 例えば最上位(root)のレイアウトでデータをロードしているときや、エラーページのレンダリング中にエラーが発生した場合 — SvelteKit は静的なエラーページにフォールバックします。

`src/routes/+layout.server.js` ファイルを追加して、これを実際に確認してみましょう。

```js
/// file: src/routes/+layout.server.js
export function load() {
	throw new Error('😬');
}
```

フォールバックエラーページをカスタマイズすることができます。`src/error.html` ファイルを作成しましょう。

```html
/// file: src/error.html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>%sveltekit.error.message%</title>
		<style>
			body {
				color: #ff531a;
			}
		</style>
	</head>
	<body>
		<h1>Game over</h1>
		<p>Error code %sveltekit.status%</p>
	</body>
</html>
```

このファイルは以下の項目を含めることができます。

- `%sveltekit.status%` — HTTP ステータスコード
- `%sveltekit.error.message%` — エラーメッセージ
