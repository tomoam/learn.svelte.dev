---
title: Spread props
---

この練習問題では、`PackageInfo.svelte` が期待する `version` プロパティを指定し忘れているため、'version undefined' が表示されています。

`version` プロパティを追加することで、これを修正できます…

```svelte
/// file: App.svelte
<PackageInfo
    name={pkg.name}
	speed={pkg.speed}
    +++version={pkg.version}+++
	website={pkg.website}
/>
```

…しかし、`pkg` のプロパティはこのコンポーネントが期待するプロパティに対応しているので、代わりに 'spread' 構文を使用することができます:

```svelte
/// file: App.svelte
<PackageInfo +++{...pkg}+++ />
```

> 逆に、`export`で宣言されていないものも含め、もしコンポーネントに渡されたすべてのプロパティ(props)を参照する必要がある場合は、`$$props`で直接参照することができます。これは、Svelteの最適化が難しいため、一般的には推奨されませんが、ごくまれなケースでは便利です。
