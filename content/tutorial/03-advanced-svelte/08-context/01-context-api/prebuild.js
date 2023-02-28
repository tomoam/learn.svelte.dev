import fs from 'fs';

const src = 'node_modules/mapbox-gl';
const dest = 'content/tutorial/03-advanced-svelte/08-context/01-context-api/app-a';

fs.cpSync(`${src}/dist/mapbox-gl.js`, `${dest}/node_modules/mapbox-gl/dist/mapbox-gl.js`);
fs.cpSync(`${src}/dist/mapbox-gl.css`, `${dest}/static/mapbox-gl.css`);
fs.cpSync(`${src}/package.json`, `${dest}/node_modules/mapbox-gl/package.json`);

// For production, please set MAPBOX_ACCESS_TOKEN on Vercel.
if (process.env.MAPBOX_ACCESS_TOKEN) {
	fs.appendFileSync(
		'content/tutorial/03-advanced-svelte/08-context/01-context-api/app-a/.env',
		`\nPUBLIC_MAPBOX_ACCESS_TOKEN=${process.env.MAPBOX_ACCESS_TOKEN}\n`
	);
}
