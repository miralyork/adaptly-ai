import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { E as Flame, I as ArrowRight, M as ChartColumn, P as BookOpen, a as Target, i as TrendingUp, l as Rocket, o as Sparkles } from "../_libs/lucide-react.mjs";
import { f as useSiteDialogs, t as Button, u as SiteShell } from "./site-shell-CVSIL00b.mjs";
import { n as PersonalisationDemo, t as DashboardSnapshot } from "./personalisation-demo-BKqv0kNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/platform-BhGsYUNT.js
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureDetail, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardsPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalisationDemo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCta, {})
	] });
}
function Section({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `py-20 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5",
			children
		})
	});
}
function ProductHero() {
	const { openLogin } = useSiteDialogs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-primary" }), " Product overview"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 text-4xl font-semibold leading-tight sm:text-5xl",
					children: [
						"A Learning Platform That",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "Adapts to Every Mind"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-muted-foreground",
					children: "Adaptly AI shapes lessons, examples and pacing around each learner's interests and preferred way of learning — with clear progress views for parents and educators."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 flex flex-wrap justify-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						onClick: openLogin,
						children: ["Log in to explore a demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			]
		})
	});
}
var FEATURES = [
	{
		icon: Sparkles,
		title: "Personalised Lessons",
		body: "AI-generated lessons tailored to learner needs and level.",
		detail: "Each lesson is rebuilt around the learner's current level, session length and comfort settings — shorter steps when needed, deeper practice when they're ready."
	},
	{
		icon: Rocket,
		title: "Interest-Based Examples",
		body: "Real-world examples built around learner interests.",
		detail: "Cars, space, animals, football — the same maths or science concept is explained through the topics a learner already loves."
	},
	{
		icon: Target,
		title: "Adaptive Quizzes",
		body: "Questions adjust in difficulty based on performance.",
		detail: "Quizzes ease off after a struggle and step up after a run of correct answers, so learners stay in a confident zone."
	},
	{
		icon: ChartColumn,
		title: "Parent & Educator Dashboard",
		body: "Track progress, engagement and learning goals.",
		detail: "Simple, non-clinical views of streaks, engagement and subject progress — designed to support, never to diagnose."
	}
];
function FeatureDetail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl font-semibold",
			children: "What the Platform Does"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted-foreground",
			children: "Four capabilities working together to keep learning flexible and engaging."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid gap-6 sm:grid-cols-2",
		children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-12 items-center justify-center rounded-2xl bg-gradient-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-5 text-primary" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-semibold",
					children: f.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium text-muted-foreground",
					children: f.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: f.detail
				})
			]
		}, f.title))
	})] });
}
function DashboardsPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold",
					children: "Dashboards for Every Role"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Learners, parents and educators each get a view built for them. These are static illustrations — log in to the demo to explore the full sample dashboards."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: [
						{
							icon: Flame,
							title: "Learner view",
							body: "Streaks, next recommended lesson, interests and weekly goals."
						},
						{
							icon: TrendingUp,
							title: "Parent view",
							body: "A snapshot per child, weekly summary and notes from educators."
						},
						{
							icon: BookOpen,
							title: "Educator view",
							body: "Group overview, per-student engagement and class insights."
						}
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-4 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-muted-foreground",
							children: r.body
						})] })]
					}, r.title))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardSnapshot, {})]
		})
	});
}
function ProductCta() {
	const { openLogin } = useSiteDialogs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl rounded-3xl bg-gradient-brand px-8 py-14 text-center shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold text-primary-foreground",
					children: "Want to see it in action?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-primary-foreground/85",
					children: "Log in to explore a live demo dashboard for learners, parents or educators."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						onClick: openLogin,
						children: "Log in to explore a live demo dashboard"
					})
				})
			]
		})
	});
}
//#endregion
export { ProductPage as component };
