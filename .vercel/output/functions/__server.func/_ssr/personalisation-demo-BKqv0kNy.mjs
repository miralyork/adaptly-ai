import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { E as Flame, P as BookOpen, i as TrendingUp, k as CircleCheck } from "../_libs/lucide-react.mjs";
import { l as PictureGrid, s as INTEREST_PICTURES } from "./site-shell-CVSIL00b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/personalisation-demo-BKqv0kNy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
							"🚗 Cars",
							"🚀 Space",
							"🐶 Animals"
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
var DEMO_INTERESTS = INTEREST_PICTURES.filter((p) => [
	"Cars",
	"Food",
	"Animals",
	"Space",
	"Football"
].includes(p.id));
var SUBJECTS = [{
	id: "Mathematics",
	emoji: "🔢",
	label: "Maths"
}, {
	id: "Science",
	emoji: "🔬",
	label: "Science"
}];
var EXAMPLES = {
	"Cars|Mathematics": "If a car travels 60 miles in 2 hours, what is its average speed?",
	"Cars|Science": "Why does a car take longer to stop on a wet road? Let's explore friction using race cars.",
	"Food|Mathematics": "A pizza is cut into 8 slices. You eat 3. How many slices are left?",
	"Food|Science": "Why does ice cream melt on a sunny day? Let's explore how heat changes solids into liquids.",
	"Space|Mathematics": "A rocket travels 1,200 km in 4 minutes. How far does it travel each minute?",
	"Space|Science": "Why do astronauts float on the space station? Let's look at gravity in orbit.",
	"Animals|Mathematics": "A cheetah runs 30 metres in 1 second. How far does it run in 5 seconds?",
	"Animals|Science": "Polar bears have thick fur and fat. How does that help them survive in cold habitats?",
	"Football|Mathematics": "A team scores 3 goals in each of 4 matches. How many goals is that in total?",
	"Football|Science": "Why does a football curve in the air when it spins? Let's explore forces in motion."
};
var FLOW = [
	{
		emoji: "💛",
		label: "Interest"
	},
	{
		emoji: "📘",
		label: "Subject"
	},
	{
		emoji: "✨",
		label: "Adaptly AI"
	},
	{
		emoji: "🎯",
		label: "Lesson"
	}
];
function PersonalisationDemo({ className = "" }) {
	const [interest, setInterest] = (0, import_react.useState)(null);
	const [subject, setSubject] = (0, import_react.useState)(null);
	const interestPic = DEMO_INTERESTS.find((p) => p.id === interest);
	const subjectPic = SUBJECTS.find((p) => p.id === subject);
	const example = interest && subject ? EXAMPLES[`${interest}|${subject}`] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `py-20 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold",
						children: "See Personalisation in Action"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Tap a picture of something you love and a subject to see the kind of example Adaptly AI would build. These are prepared demo examples — no live AI is used on this site."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-muted-foreground",
					children: FLOW.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "text-base",
								children: s.emoji
							}), s.label]
						}), i < FLOW.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "→"
						}) : null]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-gradient-soft p-6 shadow-card sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "1. What do you love?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PictureGrid, {
								label: "What do you love?",
								items: DEMO_INTERESTS,
								selected: interest ? [interest] : [],
								multiple: false,
								onChange: ([v]) => setInterest(v ?? null),
								className: "grid-cols-3 sm:grid-cols-5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-medium",
							children: "2. What do you want to learn?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 max-w-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PictureGrid, {
								label: "What do you want to learn?",
								items: SUBJECTS,
								selected: subject ? [subject] : [],
								multiple: false,
								onChange: ([v]) => setSubject(v ?? null),
								className: "grid-cols-2"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 rounded-2xl bg-card p-6",
							"aria-live": "polite",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"aria-hidden": true,
								className: "flex items-center justify-center gap-3 text-4xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: interestPic ? "" : "opacity-25",
										children: interestPic?.emoji ?? "💛"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl text-muted-foreground",
										children: "+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: subjectPic ? "" : "opacity-25",
										children: subjectPic?.emoji ?? "📘"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl text-muted-foreground",
										children: "="
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: example ? "" : "opacity-25",
										children: "🎯"
									})
								]
							}), example ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 flex items-center gap-2 text-sm font-medium text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Lesson personalised successfully!"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-lg font-medium",
									children: example
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: [
										interestPic?.label,
										" · ",
										subjectPic?.label,
										" · sample content"
									]
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-center text-sm text-muted-foreground",
								children: "Pick one picture from each row to see a sample lesson question."
							})]
						})
					]
				})
			]
		})
	});
}
//#endregion
export { PersonalisationDemo as n, DashboardSnapshot as t };
