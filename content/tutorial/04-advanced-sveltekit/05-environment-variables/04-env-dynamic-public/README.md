---
title: $env/dynamic/public
---

[プライベートな環境変数](/tutorial/env-static-private) と同様、可能なら静的な値を使用することが望ましいですが、必要であれば代わりに動的な値を使用することができます。

```svelte
<script>
	import { +++env+++ } from '$env/+++dynamic+++/public';
</script>

<main
	style:background={+++env.+++PUBLIC_THEME_BACKGROUND}
	style:color={+++env.+++PUBLIC_THEME_FOREGROUND}
>
	{+++env.+++PUBLIC_THEME_FOREGROUND} on {+++env.+++PUBLIC_THEME_BACKGROUND}
</main>
```
