import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { I as ArrowRight, O as ExternalLink, x as Info } from "../_libs/lucide-react.mjs";
import { f as useSiteDialogs, t as Button, u as SiteShell } from "./site-shell-CVSIL00b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/what-is-autism-BMmfy7_H.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `py-16 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5",
			children
		})
	});
}
function SectionHeading({ title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl font-semibold",
			children: title
		}), intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted-foreground",
			children: intro
		}) : null]
	});
}
function WhatIsAutismPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickFacts, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spectrum, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experiences, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strengths, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForChildren, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Myths, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordsMatter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowWeHelp, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearnMore, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "🧠"
					}), " A simple guide"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 text-4xl font-semibold leading-tight sm:text-5xl",
					children: [
						"What is ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "autism"
						}),
						"?"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-8 max-w-2xl rounded-3xl border border-border bg-card p-6 text-left shadow-card sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg leading-relaxed",
						children: [
							"Autism is a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "lifelong difference in how a person's brain works" }),
							". It affects how someone experiences the world around them, how they communicate, and how they relate to other people."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 leading-relaxed text-muted-foreground",
						children: [
							"Autism is not an illness or a disease, and it doesn't need to be \"fixed\". Being autistic means thinking and feeling in a different way — with real strengths as well as real challenges. When someone is described as ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "autistic" }),
							", this is what it means."
						]
					})]
				})
			]
		})
	});
}
function QuickFacts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			{
				emoji: "👥",
				big: "About 1 in 100",
				body: "people in the UK are autistic."
			},
			{
				emoji: "🌱",
				big: "Lifelong",
				body: "Autistic children grow up to be autistic adults."
			},
			{
				emoji: "🌈",
				big: "A spectrum",
				body: "Every autistic person is different."
			},
			{
				emoji: "🧬",
				big: "Not caused by parenting",
				body: "or by vaccines. It's how a brain develops."
			}
		].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "text-4xl",
					children: f.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg font-semibold",
					children: f.big
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: f.body
				})
			]
		}, f.big))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 text-center text-xs text-muted-foreground",
		children: "Figure from the National Autistic Society."
	})] });
}
var SPECTRUM_TRAITS = [
	"Communication",
	"Senses",
	"Routine",
	"Social",
	"Focus"
];
var SPECTRUM_PEOPLE = [{
	emoji: "🧒",
	name: "Sam",
	levels: [
		30,
		90,
		60,
		45,
		80
	]
}, {
	emoji: "👧",
	name: "Leah",
	levels: [
		85,
		35,
		90,
		70,
		40
	]
}];
function Spectrum() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold",
					children: "What does \"spectrum\" mean?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "You may hear \"autism spectrum\". This doesn't mean a line from \"a little bit autistic\" to \"very autistic\". It's more like a mixing desk: every autistic person has their own mix of differences, strengths and needs — and that mix can change from day to day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-muted-foreground",
					children: [
						"That's why there's a well-known saying in the autistic community:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "\"If you've met one autistic person, you've met one autistic person.\"" })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [SPECTRUM_PEOPLE.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "text-3xl",
							children: p.emoji
						}), p.name]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: SPECTRUM_TRAITS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 h-2 rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full bg-gradient-brand",
								style: { width: `${p.levels[i]}%` }
							})
						})] }, t))
					})]
				}, p.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground sm:col-span-2",
					children: "An illustration only: two autistic people, two very different mixes."
				})]
			})]
		})
	});
}
var EXPERIENCES = [
	{
		emoji: "💬",
		title: "Communicating differently",
		body: "Words may be taken literally, and jokes or sarcasm can be confusing. Some autistic people don't speak and use pictures, signs or a device instead.",
		help: "Clear, simple words. Extra time to answer. Pictures."
	},
	{
		emoji: "🔊",
		title: "Senses can feel stronger",
		body: "Noises, bright lights, smells, textures or busy places can feel overwhelming. Some senses may feel weaker instead.",
		help: "Quiet spaces, ear defenders, calm screens."
	},
	{
		emoji: "📅",
		title: "Routine feels safe",
		body: "Knowing what will happen next helps a lot. Sudden changes can feel very stressful.",
		help: "Visual timetables and a warning before changes."
	},
	{
		emoji: "⭐",
		title: "Deep interests",
		body: "Strong passions — like trains, space or animals — bring joy, calm and real expertise.",
		help: "Use those interests to learn new things."
	},
	{
		emoji: "🤝",
		title: "Social differences",
		body: "Unwritten social rules can be confusing, and socialising can be tiring even when it's enjoyable.",
		help: "Explain what's expected. Allow breaks."
	},
	{
		emoji: "🌊",
		title: "Overwhelm and calming down",
		body: "When everything gets too much, a person may have a meltdown or shut down. This is overwhelm, not bad behaviour. Many people stim — rock, flap or hum — to stay calm.",
		help: "One thing at a time. A calm place to recover."
	}
];
function Experiences() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
		title: "What autism can look like",
		intro: "Not every autistic person experiences all of these, and everyone experiences them differently."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: EXPERIENCES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "text-5xl",
					children: e.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-semibold",
					children: e.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 flex-1 text-sm text-muted-foreground",
					children: e.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-xl bg-success-soft px-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-success",
						children: "What helps: "
					}), e.help]
				})
			]
		}, e.title))
	})] });
}
function Strengths() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "Autistic strengths",
			intro: "Autism isn't only about challenges. Many autistic people have strengths like these — though, again, everyone is different."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
			children: [
				{
					emoji: "🔍",
					label: "Noticing details"
				},
				{
					emoji: "🧩",
					label: "Spotting patterns"
				},
				{
					emoji: "📚",
					label: "Deep knowledge"
				},
				{
					emoji: "💯",
					label: "Honesty"
				},
				{
					emoji: "🎯",
					label: "Strong focus"
				},
				{
					emoji: "🖼️",
					label: "Thinking in pictures"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center rounded-2xl bg-gradient-soft p-5 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "text-4xl",
					children: s.emoji
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium",
					children: s.label
				})]
			}, s.label))
		})]
	});
}
function ForChildren() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
		title: "Explaining autism to a child",
		intro: "Children often understand pictures faster than words. Here's a simple picture story you can share."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
		children: [
			{
				emoji: "🧠",
				text: "Everybody's brain works in its own way."
			},
			{
				emoji: "🔊",
				text: "Some sounds and lights can feel too big and too loud."
			},
			{
				emoji: "📅",
				text: "Knowing what comes next helps me feel calm."
			},
			{
				emoji: "🚂",
				text: "Loving one thing a lot is a great thing!"
			},
			{
				emoji: "🤗",
				text: "Being different is okay. Everyone belongs."
			}
		].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex flex-col items-center rounded-3xl border-2 border-dashed border-primary/30 bg-card p-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-muted-foreground",
					children: i + 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mt-2 text-6xl",
					children: c.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-medium",
					children: c.text
				})
			]
		}, c.emoji))
	})] });
}
var MYTHS = [
	{
		myth: "Autism is an illness that can be cured.",
		fact: "Autism is a lifelong difference, not a disease. The right support helps autistic people thrive."
	},
	{
		myth: "Autistic people don't have feelings.",
		fact: "Autistic people feel deeply. They may show feelings — or read other people's — in different ways."
	},
	{
		myth: "Bad parenting or vaccines cause autism.",
		fact: "Neither causes autism. Research shows it is strongly linked to genes and how the brain develops."
	},
	{
		myth: "Only boys are autistic.",
		fact: "People of every gender are autistic. Girls are often diagnosed later because they may hide (mask) their differences."
	},
	{
		myth: "If someone doesn't speak, they don't understand.",
		fact: "Many non-speaking autistic people understand a great deal and communicate in other ways."
	}
];
function Myths() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Myths and facts" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-10 max-w-4xl space-y-4",
			children: MYTHS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-2xl bg-secondary p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "text-2xl",
						children: "❌"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Myth: "
						}), m.myth]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-2xl bg-success-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "text-2xl",
						children: "✅"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Fact: "
						}), m.fact]
					})]
				})]
			}, m.myth))
		})]
	});
}
function WordsMatter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "flex items-center gap-3 text-2xl font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: "🗣️"
				}), " Words matter"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted-foreground",
				children: [
					"Many autistic people prefer to be called an ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "autistic person" }),
					", because autism is part of who they are. Some prefer ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "person with autism" }),
					". If you're not sure, ask — and follow the person's lead."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted-foreground",
				children: [
					"On this site we say \"autistic\", and we talk about ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "differences" }),
					" and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "support needs" }),
					" rather than labels like \"high-functioning\" or \"low-functioning\"."
				]
			})
		]
	}) });
}
function HowWeHelp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "How Adaptly AI uses this",
			intro: "Everything above shapes how we design learning for autistic learners."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
			children: [
				{
					emoji: "🖼️",
					title: "Pictures first",
					body: "Choices and lessons use pictures, so learners don't have to read to take part."
				},
				{
					emoji: "⭐",
					title: "Built on interests",
					body: "Maths with cars, science with dinosaurs — learning through what they already love."
				},
				{
					emoji: "📅",
					title: "Predictable steps",
					body: "Learners always see where they are and what comes next."
				},
				{
					emoji: "🐢",
					title: "Their own pace",
					body: "No rushing. Shorter steps when needed, more depth when ready."
				},
				{
					emoji: "🤫",
					title: "Calm design",
					body: "Soft colours, minimal motion, no flashing and no countdown timers."
				}
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-background p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "text-4xl",
						children: i.emoji
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-semibold",
						children: i.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: i.body
					})
				]
			}, i.title))
		})]
	});
}
var RESOURCES = [
	{
		name: "NHS — Autism",
		href: "https://www.nhs.uk/conditions/autism/",
		body: "What autism is, signs, and how to get an assessment in the UK."
	},
	{
		name: "National Autistic Society",
		href: "https://www.autism.org.uk/advice-and-guidance/what-is-autism",
		body: "The UK's leading autism charity — guides for families, schools and autistic people."
	},
	{
		name: "Autistica",
		href: "https://www.autistica.org.uk/what-is-autism",
		body: "Autism research charity with clear, research-based explanations."
	}
];
function LearnMore() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Learn more and get support" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-4 md:grid-cols-3",
			children: RESOURCES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: r.href,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "group rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 font-semibold group-hover:text-primary",
					children: [
						r.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: r.body
				})]
			}, r.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl bg-accent p-4 text-sm text-accent-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 size-4 shrink-0" }), "Adaptly AI is a learning-support tool. We don't diagnose or treat autism. If you think you or your child might be autistic, speak to your GP, health visitor or your school's SENCO."]
		})
	] });
}
function Cta() {
	const { openPilot } = useSiteDialogs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl rounded-3xl bg-gradient-brand px-8 py-14 text-center shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold text-primary-foreground",
					children: "Learning that fits autistic minds"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-primary-foreground/85",
					children: "Help us shape it. We're inviting families and educators to our early pilot programme."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						onClick: () => openPilot("Parent"),
						children: "Join a Pilot"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/platform",
							children: ["See the platform ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { WhatIsAutismPage as component };
