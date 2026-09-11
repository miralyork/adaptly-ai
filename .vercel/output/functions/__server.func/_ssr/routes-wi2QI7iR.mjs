import { i as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChartLine, C as Handshake, F as ArrowRight, M as Brain, N as BookOpen, O as CircleCheck, S as Heart, a as Target, b as Layers, d as Puzzle, j as ChartColumn, l as Rocket, n as Users, o as Sparkles, s as ShieldCheck, u as Repeat, v as Lightbulb, w as GraduationCap } from "../_libs/lucide-react.mjs";
import { c as SiteShell, t as Button, u as useSiteDialogs } from "./site-shell-B_vPuzXi.mjs";
import { t as DashboardSnapshot } from "./dashboard-mock-uniq8CHP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-wi2QI7iR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonalisationDemo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Audience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsibleAI, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
function Section({ id, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `scroll-mt-20 py-20 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5",
			children
		})
	});
}
function Hero() {
	const { openPilot, openLogin } = useSiteDialogs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-primary" }), " Early-stage · pilots opening now"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 text-4xl font-semibold leading-tight sm:text-5xl",
					children: [
						"Personalised Learning,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "Built Around Every Mind"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-muted-foreground",
					children: "Adaptly AI creates adaptive learning experiences for autistic and other neurodivergent learners — tailoring content, examples and pace to each learner's interests and preferred way of learning."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						onClick: openLogin,
						children: ["Explore the Platform ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "outline",
						onClick: () => openPilot(),
						children: "Join a Pilot"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-9 grid gap-3 sm:grid-cols-3",
					children: [
						{
							icon: ShieldCheck,
							label: "Privacy First — Secure & Ethical"
						},
						{
							icon: Brain,
							label: "AI-Powered Personalisation"
						},
						{
							icon: BookOpen,
							label: "Evidence Informed Learning Design"
						}
					].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2 rounded-xl border border-border bg-card/70 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-muted-foreground",
							children: b.label
						})]
					}, b.label))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardSnapshot, {})]
		})
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-semibold",
				children: "Why Traditional Learning Doesn't Work for Everyone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Many learners are asked to fit the material. We think the material should fit the learner."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-6 md:grid-cols-3",
			children: [
				{
					icon: Layers,
					title: "One-size-fits-all content",
					body: "Learners can struggle when content isn't matched to their needs."
				},
				{
					icon: Puzzle,
					title: "Limited personalisation",
					body: "Little adaptation to individual interests, strengths and learning style."
				},
				{
					icon: Heart,
					title: "Low engagement",
					body: "Learners lose motivation when they can't connect with the material."
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 items-center justify-center rounded-xl bg-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-5 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-semibold",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: c.body
					})
				]
			}, c.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-10 max-w-3xl rounded-2xl bg-accent px-6 py-5 text-center font-medium text-accent-foreground",
			children: "Adaptly AI is designed to make digital learning more flexible, personalised and engaging."
		})
	] });
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "how-it-works",
		className: "bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-semibold",
				children: "How Adaptly AI Works"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "A simple loop that keeps learning aligned with each learner."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-14 grid gap-10 md:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-border md:block" }), [
				{
					icon: Lightbulb,
					title: "Understand",
					body: "Learners, parents or educators provide interests, preferences and learning needs."
				},
				{
					icon: Repeat,
					title: "Adapt",
					body: "Our AI creates personalised lessons, examples and activities."
				},
				{
					icon: GraduationCap,
					title: "Learn",
					body: "Learners engage with content that matches their pace and interests."
				},
				{
					icon: ChartLine,
					title: "Improve",
					body: "Progress and feedback help the system improve future learning experiences."
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative z-10 mx-auto flex size-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mt-4 font-semibold",
						children: [
							i + 1,
							". ",
							s.title
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-xs text-sm text-muted-foreground",
						children: s.body
					})
				]
			}, s.title))]
		})]
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-semibold",
				children: "Learning That Adapts in Real Time"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Every lesson is shaped by what a learner enjoys, how they're progressing and how they prefer to learn."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/platform",
			className: "text-sm font-medium text-primary hover:underline",
			children: "See product features →"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			{
				icon: Sparkles,
				title: "Personalised Lessons",
				body: "AI-generated lessons tailored to learner needs and level."
			},
			{
				icon: Rocket,
				title: "Interest-Based Examples",
				body: "Real-world examples built around learner interests."
			},
			{
				icon: Target,
				title: "Adaptive Quizzes",
				body: "Questions adjust in difficulty based on performance."
			},
			{
				icon: ChartColumn,
				title: "Parent & Educator Dashboard",
				body: "Track progress, engagement and learning goals."
			}
		].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
					className: "mt-2 text-sm text-muted-foreground",
					children: f.body
				})
			]
		}, f.title))
	})] });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "bg-card",
		children: [
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
		]
	});
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active ? "border-transparent bg-gradient-brand text-primary-foreground shadow-soft" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"}`,
		children
	});
}
function Audience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl font-semibold",
			children: "Who Is Adaptly AI For?"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid gap-6 md:grid-cols-3",
		children: [
			{
				icon: GraduationCap,
				title: "Learners",
				body: "Lessons shaped around your interests, at a pace that feels comfortable."
			},
			{
				icon: Heart,
				title: "Parents",
				body: "See what's working and support learning at home with clear insights."
			},
			{
				icon: Users,
				title: "Educators",
				body: "Adapt materials for diverse classrooms without doubling your workload."
			}
		].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-11 items-center justify-center rounded-xl bg-gradient-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-5 text-primary" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-semibold",
					children: c.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: c.body
				})
			]
		}, c.title))
	})] });
}
function ResponsibleAI() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "Built with Responsible AI"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: [
						"AI-assisted content personalisation",
						"Learner preference modelling",
						"Adaptive content generation",
						"Progress tracking & insights",
						"Privacy-conscious by design"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: item
						})]
					}, item))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: "Our Impact (In Progress)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-muted-foreground",
						children: "We are currently developing and testing our first learning experiences with educators, parents and neurodivergent communities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-2 gap-3",
						children: [
							{
								icon: Rocket,
								label: "Early Pilots Underway"
							},
							{
								icon: Handshake,
								label: "Educator Collaborations"
							},
							{
								icon: Heart,
								label: "Learner Feedback Driven"
							},
							{
								icon: Sparkles,
								label: "Platform Evolving"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-medium",
								children: s.label
							})]
						}, s.label))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "Built by People Who Believe Learning Should Adapt"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-2xl border border-border bg-background p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-16 items-center justify-center rounded-full bg-gradient-brand text-lg font-semibold text-primary-foreground",
							children: "MP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-semibold",
							children: "Miralkumar Patel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary",
							children: "Founder & CEO, Adaptly AI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "A computing professional passionate about using technology to create more personalised and accessible learning experiences for neurodivergent learners."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "mt-4 inline-block text-sm font-medium text-primary hover:underline",
							children: "More about us →"
						})
					]
				})] })
			]
		})
	});
}
function CtaBanner() {
	const { openPilot } = useSiteDialogs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl rounded-3xl bg-gradient-brand px-8 py-14 text-center shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold text-primary-foreground",
					children: "Help Us Build More Personalised Learning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-primary-foreground/85",
					children: "We're inviting educators, parents and partners to join our pilot programme and help shape the future of adaptive learning."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						onClick: () => openPilot("Educator"),
						children: "Join the Pilot"
					})
				})
			]
		})
	});
}
//#endregion
export { HomePage as component };
