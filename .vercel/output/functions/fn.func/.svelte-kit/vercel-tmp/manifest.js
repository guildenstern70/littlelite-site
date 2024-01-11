export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0BSmRY90.js","app":"_app/immutable/entry/app.US9_F0wX.js","imports":["_app/immutable/entry/start.0BSmRY90.js","_app/immutable/chunks/entry.xyZATxG_.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.US9_F0wX.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.PHW1MNHL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/more",
				pattern: /^\/more\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
