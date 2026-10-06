import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { L as ArrowLeft, o as Sparkles } from "../_libs/lucide-react.mjs";
import { t as Button, u as SiteShell } from "./site-shell-CVSIL00b.mjs";
import { n as titleFromSlug, t as Route } from "./soon._slug-CYSOZomQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/soon._slug-BHf6tyCL.js
var import_jsx_runtime = require_jsx_runtime();
function ComingSoonPage() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-5 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), " Early roadmap"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 text-4xl font-semibold",
				children: titleFromSlug(slug)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "This page is part of Adaptly AI's early roadmap and is coming soon."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to homepage"]
				})
			})
		]
	}) });
}
//#endregion
export { ComingSoonPage as component };
