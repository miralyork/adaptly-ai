import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { E as Flame, F as ArrowRight, N as BookOpen, O as CircleCheck, a as Target, i as TrendingUp, j as ChartColumn, l as Rocket, o as Sparkles } from "../_libs/lucide-react.mjs";
import { c as SiteShell, t as Button, u as useSiteDialogs } from "./site-shell-B_vPuzXi.mjs";
import { t as DashboardSnapshot } from "./dashboard-mock-uniq8CHP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/platform-D7ve0u-t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
var INTERESTS = [
	"Cars",
	"Space",
	"Animals",
	"Football"
];
var SUBJECTS = ["Mathematics", "Science"];
var EXAMPLES = {
	"Cars|Mathematics": "If a car travels 60 miles in 2 hours, what is its average speed?",
	"Cars|Science": "Why does a car take longer to stop on a wet road? Let's explore friction using race cars.",
	"Space|Mathematics": "A rocket travels 1,200 km in 4 minutes. How far does it travel each minute?",
	"Space|Science": "Why do astronauts float on the space station? Let's look at gravity in orbit.",
	"Animals|Mathematics": "A cheetah runs 30 metres in 1 second. How far does it run in 5 seconds?",
	"Animals|Science": "Polar bears have thick fur and fat. How does that help them survive in cold habitats?",
	"Football|Mathematics": "A team scores 3 goals in each of 4 matches. How many goals is that in total?",
	"Football|Science": "Why does a football curve in the air when it spins? Let's explore forces in motion."
};
function PersonalisationDemo() {
	const [interest, setInterest] = (0, import_react.useState)(null);
	const [subject, setSubject] = (0, import_react.useState)(null);
	const ready = interest && subject;
	const example = ready ? EXAMPLES[`${interest}|${subject}`] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-semibold",
				children: "See Personalisation in Action"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Pick an interest and a subject to see the kind of example Adaptly AI would build. These are prepared demo examples — no live AI is used on this site."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-muted-foreground",
			children: [
				"Learner Interest",
				"Subject",
				"Adaptly AI Generates",
				"Result"
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-secondary px-3 py-1.5",
					children: s
				}), i < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" }) : null]
			}, s))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-gradient-soft p-8 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "1. Choose an interest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: INTERESTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: interest === i,
						onClick: () => setInterest(i),
						children: i
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm font-medium",
					children: "2. Choose a subject"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: SUBJECTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: subject === s,
						onClick: () => setSubject(s),
						children: s
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-2xl bg-card p-6",
					children: !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Pick one interest and one subject to generate a sample lesson question."
					}) : example ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm font-medium text-success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Lesson personalised successfully!"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg font-medium",
							children: example
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: [
								interest,
								" · ",
								subject,
								" · sample content"
							]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "More personalised examples coming soon for this combination."
					})
				})
			]
		})
	] });
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active ? "border-transparent bg-gradient-brand text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"}`,
		children
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
