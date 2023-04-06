---
title: Slot fallbacks
---

コンポーネントは、`<slot>` 要素の内側にコンテンツを置くことで、slot が空になっているときのための _fallback_ を指定することができます:

```svelte
/// file: Box.svelte
<div class="card">
	<header>
		<slot name="telephone">
			+++<i>(telephone)</i>+++
		</slot>
		
		<slot name="company">
			+++<i>(company name)</i>+++
		</slot>
	</header>

	<slot>
		+++<i>(name)</i>+++
	</slot>
		
	<footer>
		<slot name="address">
			+++<i>(address)</i>+++
		</slot>
	</footer>
</div>
```