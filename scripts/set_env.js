import fs from 'fs';

if (process.env.MAPBOX_ACCESS_TOKEN) {
	fs.appendFileSync(
		'content/tutorial/03-advanced-svelte/08-context/01-context-api/app-a/.env',
		`\nPUBLIC_MAPBOX_ACCESS_TOKEN=${process.env.MAPBOX_ACCESS_TOKEN}\n`
	);
}
