import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { A as Check, I as ArrowRight, L as ArrowLeft, _ as Linkedin, g as Mail, h as Menu, k as CircleCheck, r as Twitter, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-CVSIL00b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/favicon.png",
			alt: "Adaptly AI logo",
			width: 36,
			height: 36,
			className: "size-9 object-contain"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: tone === "dark" ? "text-lg font-semibold text-navy-foreground" : "text-lg font-semibold text-foreground",
			children: "Adaptly AI"
		})]
	});
}
var COLUMNS = [
	{
		title: "Product",
		links: [
			{
				label: "Features",
				slug: "features"
			},
			{
				label: "Platform",
				slug: "platform"
			},
			{
				label: "Roadmap",
				slug: "roadmap"
			},
			{
				label: "Updates",
				slug: "updates"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				label: "About Us",
				slug: "about"
			},
			{
				label: "Our Mission",
				slug: "our-mission"
			},
			{
				label: "Careers",
				slug: "careers"
			},
			{
				label: "Contact",
				slug: "contact"
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				label: "What is Autism?",
				slug: "what-is-autism"
			},
			{
				label: "Blog",
				slug: "blog"
			},
			{
				label: "Guides",
				slug: "guides"
			},
			{
				label: "Research",
				slug: "research"
			},
			{
				label: "Help Centre",
				slug: "help-centre"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "Building AI-powered learning experiences that adapt to every mind."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							Linkedin,
							Twitter,
							Mail
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-9 cursor-pointer items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, i))
					})
				]
			}), COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-sm font-semibold",
				children: col.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2.5",
				children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: l.slug === "about" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "text-sm text-muted-foreground transition-colors hover:text-primary",
					children: l.label
				}) : l.slug === "what-is-autism" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/what-is-autism",
					className: "text-sm text-muted-foreground transition-colors hover:text-primary",
					children: l.label
				}) : l.slug === "platform" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/platform",
					className: "text-sm text-muted-foreground transition-colors hover:text-primary",
					children: l.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/soon/$slug",
					params: { slug: l.slug },
					className: "text-sm text-muted-foreground transition-colors hover:text-primary",
					children: l.label
				}) }, l.label))
			})] }, col.title))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground",
				children: "© 2026 Adaptly AI Ltd. All rights reserved. Adaptly AI is a learning-support tool and does not diagnose or treat any condition."
			})
		})]
	});
}
var INTEREST_PICTURES = [
	{
		id: "Cars",
		emoji: "🚗",
		label: "Cars"
	},
	{
		id: "Food",
		emoji: "🍕",
		label: "Food"
	},
	{
		id: "Animals",
		emoji: "🐶",
		label: "Animals"
	},
	{
		id: "Space",
		emoji: "🚀",
		label: "Space"
	},
	{
		id: "Football",
		emoji: "⚽",
		label: "Football"
	},
	{
		id: "Music",
		emoji: "🎵",
		label: "Music"
	},
	{
		id: "Dinosaurs",
		emoji: "🦕",
		label: "Dinosaurs"
	},
	{
		id: "Trains",
		emoji: "🚂",
		label: "Trains"
	},
	{
		id: "Drawing",
		emoji: "🎨",
		label: "Drawing"
	},
	{
		id: "Games",
		emoji: "🎮",
		label: "Games"
	},
	{
		id: "Nature",
		emoji: "🌳",
		label: "Nature"
	},
	{
		id: "Building",
		emoji: "🧱",
		label: "Building"
	}
];
var LEARNING_STYLE_PICTURES = [
	{
		id: "Pictures",
		emoji: "🖼️",
		label: "Pictures"
	},
	{
		id: "Listening",
		emoji: "🎧",
		label: "Listening"
	},
	{
		id: "Hands-on",
		emoji: "✋",
		label: "Hands-on"
	},
	{
		id: "Reading",
		emoji: "📖",
		label: "Reading"
	},
	{
		id: "Short bursts",
		emoji: "⏱️",
		label: "Short bursts"
	},
	{
		id: "Quiet & calm",
		emoji: "🤫",
		label: "Quiet & calm"
	}
];
function emojiFor(id) {
	return [...INTEREST_PICTURES, ...LEARNING_STYLE_PICTURES].find((p) => p.id === id)?.emoji ?? "⭐";
}
function PictureCard({ emoji, label, selected, onClick, kind = "toggle", size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-label": label,
		...kind === "radio" ? {
			role: "radio",
			"aria-checked": selected
		} : { "aria-pressed": selected },
		className: `relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 bg-card text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${size === "lg" ? "min-h-32 p-4" : "min-h-24 p-3"} ${selected ? "border-primary bg-primary-soft shadow-soft" : "border-border hover:border-primary/50"}`,
		children: [
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-1.5 top-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: `leading-none ${size === "lg" ? "text-5xl" : "text-4xl"}`,
				children: emoji
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium leading-tight",
				children: label
			})
		]
	});
}
/** A grid of picture cards. `multiple` lets learners pick more than one. */
function PictureGrid({ items, selected, onChange, multiple = true, label, className = "grid-cols-3 sm:grid-cols-4", size }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: multiple ? "group" : "radiogroup",
		"aria-label": label,
		className: `grid gap-2.5 ${className}`,
		children: items.map((p) => {
			const on = selected.includes(p.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PictureCard, {
				emoji: p.emoji,
				label: p.label,
				selected: on,
				size,
				kind: multiple ? "toggle" : "radio",
				onClick: () => onChange(multiple ? on ? selected.filter((s) => s !== p.id) : [...selected, p.id] : [p.id])
			}, p.id);
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var globalScope = globalThis;
var SiteDialogsContext = globalScope.__adaptlySiteDialogsContext ?? (globalScope.__adaptlySiteDialogsContext = (0, import_react.createContext)(null));
function useSiteDialogs() {
	const ctx = (0, import_react.useContext)(SiteDialogsContext);
	if (!ctx) throw new Error("useSiteDialogs must be used inside SiteDialogsProvider");
	return ctx;
}
function SiteDialogsProvider({ children }) {
	const [loginOpen, setLoginOpen] = (0, import_react.useState)(false);
	const [pilotOpen, setPilotOpen] = (0, import_react.useState)(false);
	const [pilotReason, setPilotReason] = (0, import_react.useState)("Parent");
	const value = (0, import_react.useMemo)(() => ({
		openLogin: () => setLoginOpen(true),
		openPilot: (reason) => {
			if (reason) setPilotReason(reason);
			setPilotOpen(true);
		}
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteDialogsContext.Provider, {
		value,
		children: [
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginDialog, {
				open: loginOpen,
				onOpenChange: setLoginOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PilotDialog, {
				open: pilotOpen,
				onOpenChange: setPilotOpen,
				reason: pilotReason,
				setReason: setPilotReason
			})
		]
	});
}
var ROLES = [
	{
		id: "Learner",
		emoji: "🧒",
		label: "Learner"
	},
	{
		id: "Parent",
		emoji: "👨‍👩‍👧",
		label: "Parent"
	},
	{
		id: "Educator",
		emoji: "🧑‍🏫",
		label: "Educator"
	}
];
function LoginDialog({ open, onOpenChange }) {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("Learner");
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => {
			onOpenChange(v);
			if (!v) setError("");
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Log in to Adaptly AI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Choose a role to explore the matching demo dashboard (sample data only)." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					if (!email.trim() || !password.trim()) {
						setError("Please enter both your email and password.");
						return;
					}
					setError("");
					onOpenChange(false);
					navigate({
						to: "/dashboard/$role",
						params: { role: role.toLowerCase() }
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "login-email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "login-email",
							type: "email",
							placeholder: "you@example.com",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "login-password",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "login-password",
							type: "password",
							placeholder: "••••••••",
							value: password,
							onChange: (e) => setPassword(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "I am a…"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PictureGrid, {
							label: "I am a",
							items: ROLES,
							selected: [role],
							multiple: false,
							onChange: ([r]) => r && setRole(r),
							className: "grid-cols-3"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Log in"
					})
				]
			})]
		})
	});
}
var REASONS = [
	{
		id: "Parent",
		emoji: "👨‍👩‍👧",
		label: "Parent or carer"
	},
	{
		id: "Educator",
		emoji: "🧑‍🏫",
		label: "Teacher"
	},
	{
		id: "Organisation/Partner",
		emoji: "🏫",
		label: "School or organisation"
	},
	{
		id: "Other",
		emoji: "🙋",
		label: "Someone else"
	}
];
/** Each step has a picture so the progress bar itself is readable without words. */
var PILOT_STEPS = [
	{
		emoji: "🙋",
		label: "Who"
	},
	{
		emoji: "💛",
		label: "Loves"
	},
	{
		emoji: "🧠",
		label: "Learns"
	},
	{
		emoji: "✉️",
		label: "Contact"
	}
];
function PilotDialog({ open, onOpenChange, reason, setReason }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [interests, setInterests] = (0, import_react.useState)([]);
	const [styles, setStyles] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const titles = [
		"Who is joining?",
		reason === "Educator" || reason === "Organisation/Partner" ? "What do your learners love?" : "What does your learner love?",
		"How do they like to learn?",
		"How can we reach you?"
	];
	const hints = [
		"Tap a picture.",
		"Tap every picture that fits. We use these to build lessons.",
		"Tap every picture that fits.",
		"A grown-up fills in this last step."
	];
	const picked = [...interests, ...styles];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => {
			onOpenChange(v);
			if (!v) {
				setError("");
				setSent(false);
				setStep(0);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: sent ? "Thank you!" : titles[step] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: sent ? "Join the Adaptly AI pilot" : `Join the Adaptly AI pilot · ${hints[step]}` })] }),
				sent ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid grid-cols-4 gap-2",
					"aria-label": `Step ${step + 1} of 4`,
					children: PILOT_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: `flex size-10 items-center justify-center rounded-full text-xl transition-colors ${i === step ? "bg-primary-soft ring-2 ring-primary" : i < step ? "bg-success-soft" : "bg-secondary opacity-60"}`,
							children: i < step ? "✅" : s.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[11px] font-medium ${i === step ? "text-foreground" : "text-muted-foreground"}`,
							children: s.label
						})]
					}, s.label))
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-success-soft p-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto size-8 text-success" }),
						picked.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							"aria-hidden": true,
							className: "mt-3 text-3xl",
							children: picked.map(emojiFor).join(" ")
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-medium",
							children: "Thanks — we'll be in touch about the Adaptly AI pilot programme."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "This demo form doesn't send anything yet."
						})
					]
				}) : step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PictureGrid, {
					label: titles[0],
					items: REASONS,
					selected: [reason],
					multiple: false,
					size: "lg",
					onChange: ([r]) => r && setReason(r),
					className: "grid-cols-2"
				}) : step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PictureGrid, {
					label: titles[1],
					items: INTEREST_PICTURES,
					selected: interests,
					onChange: setInterests
				}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PictureGrid, {
					label: titles[2],
					items: LEARNING_STYLE_PICTURES,
					selected: styles,
					onChange: setStyles,
					className: "grid-cols-3"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					id: "pilot-form",
					className: "space-y-4",
					onSubmit: (e) => {
						e.preventDefault();
						if (!name.trim() || !email.trim() || !email.includes("@")) {
							setError("Please add your name and a valid email address.");
							return;
						}
						setError("");
						setSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl bg-secondary p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "text-2xl",
									children: REASONS.find((r) => r.id === reason)?.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "text-2xl",
									children: picked.length > 0 ? picked.map(emojiFor).join(" ") : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "sr-only",
									children: ["Your choices: ", [reason, ...picked].join(", ")]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "pilot-name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "pilot-name",
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: "Your name"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "pilot-email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "pilot-email",
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "you@example.com"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pilot-message",
								children: "Message (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "pilot-message",
								rows: 3,
								value: message,
								onChange: (e) => setMessage(e.target.value),
								placeholder: "What would you like to explore with us?"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-destructive",
							children: error
						}) : null
					]
				}),
				sent ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						disabled: step === 0,
						onClick: () => setStep((s) => Math.max(0, s - 1)),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"]
					}), step < PILOT_STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setStep((s) => s + 1),
						children: [
							step === 1 && interests.length === 0 || step === 2 && styles.length === 0 ? "Skip" : "Next",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						form: "pilot-form",
						children: "Send interest"
					})]
				})
			]
		})
	});
}
var NAV = [
	{
		label: "Product",
		to: "/platform"
	},
	{
		label: "What is Autism?",
		to: "/what-is-autism"
	},
	{
		label: "How It Works",
		to: "/",
		hash: "how-it-works"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Blog",
		to: "/soon/$slug",
		params: { slug: "blog" }
	}
];
function Header() {
	const { openLogin, openPilot } = useSiteDialogs();
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to,
		params: item.params,
		hash: item.hash,
		onClick: () => setOpen(false),
		className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
		activeProps: { className: "text-foreground" },
		children: item.label
	}, item.label));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: links
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: openLogin,
						children: "Log in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => openPilot(),
						children: "Join a Pilot"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					className: "lg:hidden",
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border bg-card px-5 py-4 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-3",
				children: links
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "flex-1",
					onClick: openLogin,
					children: "Log in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => openPilot(),
					children: "Join a Pilot"
				})]
			})]
		}) : null]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteDialogsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	}) });
}
//#endregion
export { DialogHeader as a, Logo as c, emojiFor as d, useSiteDialogs as f, DialogDescription as i, PictureGrid as l, Dialog as n, DialogTitle as o, DialogContent as r, INTEREST_PICTURES as s, Button as t, SiteShell as u };
