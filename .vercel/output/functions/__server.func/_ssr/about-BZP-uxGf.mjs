import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Heart, o as Sparkles, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { c as SiteShell, t as Button } from "./site-shell-B_vPuzXi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BZP-uxGf.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-4xl font-semibold sm:text-5xl",
				children: ["Learning should adapt to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-brand",
					children: "every mind"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
				children: "Adaptly AI is an early-stage startup exploring how AI can make digital learning more flexible, personalised and engaging for autistic and other neurodivergent learners. We build accessibility and learning-support tools — not medical products."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					{
						icon: Heart,
						title: "Our mission",
						body: "Make everyday learning feel achievable by shaping content around interests, pace and preferred learning style."
					},
					{
						icon: ShieldCheck,
						title: "Responsible by design",
						body: "Privacy-conscious, evidence-informed and co-designed with educators, parents and neurodivergent communities."
					},
					{
						icon: Sparkles,
						title: "Where we are",
						body: "Pre-seed and pilot stage. We're testing our first learning experiences and learning fast from feedback."
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg font-semibold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: c.body
						})
					]
				}, c.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-3xl border border-border bg-card p-8 shadow-card sm:flex sm:items-center sm:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-24 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-2xl font-semibold text-primary-foreground",
					children: "MP"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 sm:mt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: "Miralkumar Patel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary",
							children: "Founder & CEO, Adaptly AI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "A computing professional passionate about using technology to create more personalised and accessible learning experiences for neurodivergent learners."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/platform",
						children: "Explore the product"
					})
				})
			})
		]
	})] });
}
//#endregion
export { AboutPage as component };
