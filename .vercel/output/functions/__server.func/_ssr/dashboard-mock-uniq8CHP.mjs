import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { E as Flame, N as BookOpen, i as TrendingUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-mock-uniq8CHP.js
var import_jsx_runtime = require_jsx_runtime();
/** Static, non-interactive snapshot of the learner dashboard, used in the hero. */
function DashboardSnapshot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-3xl border border-border bg-card p-3 shadow-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex overflow-hidden rounded-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden w-28 shrink-0 flex-col gap-2 bg-navy p-3 sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-14 rounded-full bg-navy-muted/60" }), [
					"Dashboard",
					"My Learning",
					"Interests",
					"Progress"
				].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-lg px-2 py-1.5 text-[10px] ${i === 0 ? "bg-primary text-primary-foreground" : "text-navy-muted"}`,
					children: label
				}, label))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 bg-gradient-soft p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Welcome back, Aarav! 👋"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-3 gap-2",
						children: [
							{
								icon: Flame,
								label: "Streak",
								value: "7 Days"
							},
							{
								icon: BookOpen,
								label: "Lessons",
								value: "24"
							},
							{
								icon: TrendingUp,
								label: "Engagement",
								value: "87%"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-card p-2.5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-3.5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs font-semibold",
									children: s.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-muted-foreground",
									children: s.label
								})
							]
						}, s.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-xl bg-card p-3 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-wide text-muted-foreground",
								children: "Recommended next lesson"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-semibold",
								children: "Fractions in Real Life (Using Pizza!) 🍕"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 w-full rounded-full bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-3/4 rounded-full bg-gradient-brand" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex items-center gap-2",
						children: [
							"Cars",
							"Space",
							"Animals"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground",
							children: c
						}, c))
					})
				]
			})]
		})
	});
}
//#endregion
export { DashboardSnapshot as t };
