import { execSync } from 'child_process';

const scripts = [
	'content/tutorial/03-advanced-svelte/08-context/01-context-api/prebuild.js'
];

scripts.forEach((script) => {
	execSync(`node ${script}`);
});
