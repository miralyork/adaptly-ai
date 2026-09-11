import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, n as CheckboxIndicator, p as require_jsx_runtime, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as useParams, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Flame, N as BookOpen, P as Award, S as Heart, T as Gauge, c as Settings, f as Play, i as TrendingUp, j as ChartColumn, k as Check, m as MessageSquare, n as Users, o as Sparkles, w as GraduationCap, x as Info, y as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { a as DialogHeader, c as SiteShell, i as DialogDescription, l as cn, n as Dialog, o as DialogTitle, r as DialogContent, s as Logo, t as Button } from "./site-shell-B_vPuzXi.mjs";
import { a as Bar, i as Line, n as LineChart, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard._role-DosslqQR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var PROGRESS_DATA = [
	{
		day: "Mon",
		score: 42
	},
	{
		day: "Tue",
		score: 48
	},
	{
		day: "Wed",
		score: 55
	},
	{
		day: "Thu",
		score: 51
	},
	{
		day: "Fri",
		score: 66
	},
	{
		day: "Sat",
		score: 74
	},
	{
		day: "Sun",
		score: 87
	}
];
var ALL_INTERESTS = [
	"Cars",
	"Space",
	"Animals",
	"Football",
	"Music",
	"Dinosaurs"
];
var NAV_BY_ROLE = {
	learner: [
		{
			key: "dashboard",
			label: "Dashboard",
			icon: LayoutDashboard
		},
		{
			key: "learning",
			label: "My Learning",
			icon: BookOpen
		},
		{
			key: "interests",
			label: "Interests",
			icon: Heart
		},
		{
			key: "progress",
			label: "Progress",
			icon: TrendingUp
		},
		{
			key: "achievements",
			label: "Achievements",
			icon: Award
		},
		{
			key: "messages",
			label: "Messages",
			icon: MessageSquare
		},
		{
			key: "settings",
			label: "Settings",
			icon: Settings
		}
	],
	parent: [
		{
			key: "dashboard",
			label: "Dashboard",
			icon: LayoutDashboard
		},
		{
			key: "children",
			label: "My Children",
			icon: Users
		},
		{
			key: "progress",
			label: "Progress",
			icon: TrendingUp
		},
		{
			key: "messages",
			label: "Messages",
			icon: MessageSquare
		},
		{
			key: "settings",
			label: "Settings",
			icon: Settings
		}
	],
	educator: [
		{
			key: "dashboard",
			label: "Dashboard",
			icon: LayoutDashboard
		},
		{
			key: "students",
			label: "Students",
			icon: Users
		},
		{
			key: "insights",
			label: "Class Insights",
			icon: ChartColumn
		},
		{
			key: "messages",
			label: "Messages",
			icon: MessageSquare
		},
		{
			key: "settings",
			label: "Settings",
			icon: Settings
		}
	]
};
var SIGNED_IN = {
	learner: "Aarav (demo learner)",
	parent: "Priya Patel (demo parent)",
	educator: "Ms. Sara Khan (demo educator)"
};
function DashboardPage() {
	const { role: raw } = useParams({ from: "/dashboard/$role" });
	const role = raw === "parent" || raw === "educator" || raw === "learner" ? raw : "learner";
	const [active, setActive] = (0, import_react.useState)("dashboard");
	const nav = NAV_BY_ROLE[role];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-border bg-accent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto flex max-w-6xl items-center gap-2 px-5 py-3 text-sm text-accent-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 shrink-0" }),
				"This is a demo ",
				role,
				" dashboard using sample data — no real accounts or live data."
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-5 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-3xl border border-border bg-card shadow-card md:flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "bg-navy p-4 md:w-60 md:shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { tone: "dark" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-0 flex gap-2 overflow-x-auto md:mt-6 md:flex-col md:overflow-visible",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActive(item.key),
							className: `flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${active === item.key ? "bg-primary text-primary-foreground" : "text-navy-muted hover:bg-sidebar-accent hover:text-navy-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }), item.label]
						}, item.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 hidden rounded-xl bg-sidebar-accent p-3 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-navy-muted",
							children: "Signed in as"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-navy-foreground",
							children: SIGNED_IN[role]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 bg-background p-5 sm:p-7",
				children: active === "dashboard" ? role === "learner" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnerDashboard, {}) : role === "parent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParentDashboard, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducatorDashboard, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaticPanel, {
					title: nav.find((n) => n.key === active)?.label ?? "Panel",
					role
				})
			})]
		})
	})] });
}
function LearnerDashboard() {
	const [interests, setInterests] = (0, import_react.useState)([
		"Cars",
		"Space",
		"Animals"
	]);
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [lessonOpen, setLessonOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "Welcome back, Aarav! 👋"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Here's your learning at a glance — all figures are sample data."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Flame,
						label: "Current Streak",
						value: "7 Days",
						note: "Personal best!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: BookOpen,
						label: "Lessons Completed",
						value: "24",
						note: "+3 this week"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: "Engagement"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-2xl font-semibold",
								children: "87%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineChart, {
										data: PROGRESS_DATA,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "score",
											stroke: "var(--color-success)",
											strokeWidth: 2,
											dot: false
										})
									})
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-gradient-soft p-6 shadow-card lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Recommended Next Lesson"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-14 items-center justify-center rounded-2xl bg-card text-3xl shadow-sm",
								children: "🍕"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: "Fractions in Real Life (Using Pizza!)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Mathematics · 10 minutes · adapted to Aarav's pace"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => setLessonOpen(true),
							children: ["Start Lesson ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Interests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setEditOpen(true),
							className: "text-sm font-medium text-primary hover:underline",
							children: "+ Edit Interests"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: interests.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No interests selected yet."
						}) : interests.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: i }, i))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Recent Progress"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Last 7 days (sample data)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-48",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: PROGRESS_DATA,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "day",
											tickLine: false,
											axisLine: false,
											fontSize: 12
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											borderRadius: 12,
											border: "1px solid var(--color-border)",
											background: "var(--color-card)",
											fontSize: 12
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "score",
											stroke: "var(--color-primary)",
											strokeWidth: 3,
											dot: { r: 3 }
										})
									]
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: "Weekly Goal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RingProgress, { value: 75 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Great progress! Keep it up."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditInterestsDialog, {
				open: editOpen,
				onOpenChange: setEditOpen,
				interests,
				setInterests
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonDialog, {
				open: lessonOpen,
				onOpenChange: setLessonOpen
			})
		]
	});
}
var CHILDREN = [{
	name: "Aarav",
	age: 9,
	streak: "7 days",
	engagement: 87,
	lessons: 24,
	subjects: "Mathematics, Science, English",
	note: "Responds really well to car and space themed examples."
}, {
	name: "Meera",
	age: 12,
	streak: "3 days",
	engagement: 72,
	lessons: 16,
	subjects: "Science, Reading",
	note: "Prefers shorter sessions with a break halfway through."
}];
function ParentDashboard() {
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "Welcome back, Priya! 👋"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "A calm overview of how your children are learning this week (sample data)."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: BookOpen,
						label: "Lessons Completed",
						value: "40",
						note: "This week: +9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: TrendingUp,
						label: "Average Engagement",
						value: "80%",
						note: "Steady"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Flame,
						label: "Best Streak",
						value: "7 Days",
						note: "Aarav"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: CHILDREN.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-12 items-center justify-center rounded-2xl bg-gradient-soft text-lg font-semibold text-primary",
									children: c.name[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-semibold",
									children: [
										c.name,
										" — Age ",
										c.age
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: [
										c.lessons,
										" lessons · ",
										c.engagement,
										"% engagement · ",
										c.streak,
										" streak"
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setExpanded(expanded === c.name ? null : c.name),
								children: expanded === c.name ? "Hide Full Progress" : "View Full Progress"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-2 w-full rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full bg-gradient-brand",
								style: { width: `${c.engagement}%` }
							})
						}),
						expanded === c.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-4 rounded-2xl bg-gradient-soft p-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: "Subjects"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium",
									children: c.subjects
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs uppercase tracking-wide text-muted-foreground",
									children: "Learning note"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: c.note
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-32",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
										data: PROGRESS_DATA,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "day",
											tickLine: false,
											axisLine: false,
											fontSize: 11
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "score",
											stroke: "var(--color-primary)",
											strokeWidth: 2,
											dot: false
										})]
									})
								})
							})]
						}) : null
					]
				}, c.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold",
					children: "Notes from educators"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: [{
						from: "Ms. Khan (Educator)",
						body: "Aarav's fraction work has really clicked this week — the pizza lesson helped."
					}, {
						from: "Mr. Byrne (Educator)",
						body: "Meera enjoyed the habitats topic. Shorter sessions are working well."
					}].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-secondary p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: m.from
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: m.body
						})]
					}, m.from))
				})]
			})
		]
	});
}
var STUDENTS = [
	{
		name: "Aarav P.",
		streak: "7 days",
		engagement: 87,
		lessons: 24
	},
	{
		name: "Meera S.",
		streak: "3 days",
		engagement: 72,
		lessons: 16
	},
	{
		name: "Jonah R.",
		streak: "5 days",
		engagement: 91,
		lessons: 21
	},
	{
		name: "Ella M.",
		streak: "1 day",
		engagement: 58,
		lessons: 11
	},
	{
		name: "Kai T.",
		streak: "9 days",
		engagement: 79,
		lessons: 27
	}
];
var CLASS_DATA = [
	{
		subject: "Maths",
		value: 82
	},
	{
		subject: "Science",
		value: 74
	},
	{
		subject: "English",
		value: 68
	},
	{
		subject: "Reading",
		value: 88
	}
];
function EducatorDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "Welcome back, Ms. Khan! 👋"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Class group 5B — sample data for demonstration only."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Users,
						label: "Total Students",
						value: "18",
						note: "2 joined this month"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: TrendingUp,
						label: "Average Engagement",
						value: "77%",
						note: "+4% this week"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: BookOpen,
						label: "Lessons This Week",
						value: "96",
						note: "Across 4 subjects"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "Students"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Streak and engagement snapshot"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-secondary text-left text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3 font-medium",
									children: "Student"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3 font-medium",
									children: "Streak"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3 font-medium",
									children: "Lessons"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-3 font-medium",
									children: "Engagement"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: STUDENTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3 font-medium",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3 text-muted-foreground",
									children: s.streak
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3 text-muted-foreground",
									children: s.lessons
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-2 w-24 rounded-full bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-2 rounded-full bg-gradient-brand",
												style: { width: `${s.engagement}%` }
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: [s.engagement, "%"]
										})]
									})
								})
							]
						}, s.name)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "Class Insights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Average engagement by subject (sample data)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: CLASS_DATA,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "subject",
										tickLine: false,
										axisLine: false,
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										cursor: { fill: "var(--color-secondary)" },
										contentStyle: {
											borderRadius: 12,
											border: "1px solid var(--color-border)",
											background: "var(--color-card)",
											fontSize: 12
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "value",
										fill: "var(--color-primary)",
										radius: [
											8,
											8,
											0,
											0
										]
									})
								]
							})
						})
					})
				]
			})
		]
	});
}
function Pill({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground",
		children
	});
}
function StatCard({ icon: Icon, label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm",
					children: label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-2xl font-semibold",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-success",
				children: note
			})
		]
	});
}
function RingProgress({ value }) {
	const r = 46;
	const c = 2 * Math.PI * r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mt-4 size-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 110 110",
			className: "size-full -rotate-90",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "55",
				cy: "55",
				r,
				fill: "none",
				stroke: "var(--color-secondary)",
				strokeWidth: "10"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "55",
				cy: "55",
				r,
				fill: "none",
				stroke: "var(--color-success)",
				strokeWidth: "10",
				strokeLinecap: "round",
				strokeDasharray: c,
				strokeDashoffset: c - c * value / 100
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "absolute inset-0 flex items-center justify-center text-xl font-semibold",
			children: [value, "%"]
		})]
	});
}
var PANEL_BLOCKS = {
	"My Learning": [
		{
			title: "Fractions in Real Life 🍕",
			body: "Mathematics · 60% complete"
		},
		{
			title: "Planets and Orbits 🚀",
			body: "Science · completed 2 days ago"
		},
		{
			title: "Reading Comprehension: Race Cars 🏎️",
			body: "English · not started"
		}
	],
	Interests: [
		{
			title: "Top interest: Cars",
			body: "Used in 12 of the last 20 lesson examples."
		},
		{
			title: "Space",
			body: "Great fit for distance, speed and measurement topics."
		},
		{
			title: "Animals",
			body: "Used across science and reading activities."
		}
	],
	Progress: [
		{
			title: "Mathematics",
			body: "Mastery 72% · steady upward trend"
		},
		{
			title: "Science",
			body: "Mastery 64% · improving"
		},
		{
			title: "Weekly time on task",
			body: "1h 45m across 5 sessions"
		}
	],
	Achievements: [
		{
			title: "🔥 7-day streak",
			body: "Learning a little every day."
		},
		{
			title: "🧠 Curious Explorer",
			body: "Tried lessons in 3 different subjects."
		},
		{
			title: "⭐ Quiz Comeback",
			body: "Retried a tricky quiz and improved."
		}
	],
	Messages: [{
		title: "Ms. Khan (Educator)",
		body: "Lovely work on fractions this week!"
	}, {
		title: "Parent account",
		body: "Shall we try a space lesson tonight?"
	}],
	Settings: [
		{
			title: "Reduced motion",
			body: "On — animations kept minimal."
		},
		{
			title: "Text size",
			body: "Large"
		},
		{
			title: "Session length",
			body: "10-minute lessons with breaks"
		}
	],
	"My Children": [{
		title: "Aarav — Age 9",
		body: "24 lessons · 87% engagement"
	}, {
		title: "Meera — Age 12",
		body: "16 lessons · 72% engagement"
	}],
	Students: [{
		title: "Group 5B",
		body: "18 students · average engagement 77%"
	}, {
		title: "Needs a nudge",
		body: "Ella M. — 1 day streak, 58% engagement"
	}],
	"Class Insights": [{
		title: "Strongest subject",
		body: "Reading — 88% average engagement"
	}, {
		title: "Focus area",
		body: "English — 68% average engagement"
	}]
};
function StaticPanel({ title, role }) {
	const blocks = PANEL_BLOCKS[title] ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [
					"Sample ",
					role,
					" content — this panel is a static preview."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-medium",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: b.body
					})]
				}, b.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 rounded-xl bg-secondary p-4 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }),
					" Full functionality is on the Adaptly AI roadmap.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/platform",
						className: "font-medium text-primary hover:underline",
						children: "See product features"
					})
				]
			})
		]
	});
}
function EditInterestsDialog({ open, onOpenChange, interests, setInterests }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit interests" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Interests shape lesson examples. Changes are local to this demo." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: ALL_INTERESTS.map((item) => {
						const checked = interests.includes(item);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-3 rounded-xl border border-border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked,
								onCheckedChange: (v) => setInterests(v ? [...interests, item] : interests.filter((i) => i !== item))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: item
							})]
						}, item);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => onOpenChange(false),
					children: "Done"
				})
			]
		})
	});
}
var LESSON_CARDS = [
	{
		q: "A pizza is cut into 8 equal slices. Aarav eats 2 slices. What fraction of the pizza is left?",
		a: "6/8, which simplifies to 3/4."
	},
	{
		q: "Two friends share a pizza equally. What fraction does each person get?",
		a: "Each person gets 1/2 of the pizza."
	},
	{
		q: "If 3/4 of a pizza is left and you eat 1/4 more, how much remains?",
		a: "1/2 of the pizza remains."
	}
];
function LessonDialog({ open, onOpenChange }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const card = LESSON_CARDS[step] ?? LESSON_CARDS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => {
			onOpenChange(v);
			if (!v) setStep(0);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-5 text-primary" }), " Fractions in Real Life (Using Pizza!)"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
					"Sample lesson content — question ",
					step + 1,
					" of ",
					LESSON_CARDS.length,
					"."
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-gradient-soft p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: card.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 rounded-xl bg-card p-3 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-success",
							children: "Answer: "
						}), card.a]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							disabled: step === 0,
							onClick: () => setStep((s) => Math.max(0, s - 1)),
							children: "Previous"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "size-3.5" }), " Difficulty adapts in the full product"]
						}),
						step === LESSON_CARDS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => onOpenChange(false),
							children: "Close"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep((s) => s + 1),
							children: "Next"
						})
					]
				})
			]
		})
	});
}
//#endregion
export { DashboardPage as component };
