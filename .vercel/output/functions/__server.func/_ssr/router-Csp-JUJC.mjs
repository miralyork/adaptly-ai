import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$6 } from "./soon._slug-DCGvMRZ3.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Csp-JUJC.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CyNe6u37.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Adaptly AI — Personalised Learning Built Around Every Mind" },
			{
				name: "description",
				content: "Adaptly AI builds adaptive, interest-led learning experiences for autistic and other neurodivergent learners."
			},
			{
				name: "author",
				content: "Adaptly AI"
			},
			{
				property: "og:title",
				content: "Adaptly AI"
			},
			{
				property: "og:description",
				content: "Personalised learning built around every mind."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-wi2QI7iR.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Adaptly AI — Personalised Learning Built Around Every Mind" },
		{
			name: "description",
			content: "Adaptly AI creates adaptive, interest-led learning experiences for autistic and other neurodivergent learners. Join our early pilot programme."
		},
		{
			property: "og:title",
			content: "Adaptly AI — Personalised Learning for Every Mind"
		},
		{
			property: "og:description",
			content: "AI-powered personalised learning for neurodivergent learners — tailored to interests, pace and preferred learning style."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-BZP-uxGf.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Adaptly AI — Adaptive Learning for Every Mind" },
		{
			name: "description",
			content: "Adaptly AI is an early-stage team building personalised, accessible learning experiences for autistic and neurodivergent learners."
		},
		{
			property: "og:title",
			content: "About Adaptly AI"
		},
		{
			property: "og:description",
			content: "Meet the founder and mission behind Adaptly AI's adaptive learning platform for neurodivergent learners."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./platform-D7ve0u-t.mjs");
var Route$2 = createFileRoute("/platform")({
	head: () => ({ meta: [
		{ title: "Product — Adaptly AI Adaptive Learning Platform" },
		{
			name: "description",
			content: "Personalised lessons, interest-based examples, adaptive quizzes and parent & educator dashboards — see what the Adaptly AI platform does."
		},
		{
			property: "og:title",
			content: "Adaptly AI Product Features"
		},
		{
			property: "og:description",
			content: "Adaptive learning features built for neurodivergent learners: personalised lessons, interest-led examples and progress dashboards."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./dashboard._role-DosslqQR.mjs");
var Route$1 = createFileRoute("/dashboard/$role")({
	head: () => ({ meta: [
		{ title: "Demo Dashboard — Adaptly AI" },
		{
			name: "description",
			content: "Explore Adaptly AI's learner, parent and educator demo dashboards, built entirely with sample data."
		},
		{
			property: "og:title",
			content: "Adaptly AI Demo Dashboard"
		},
		{
			property: "og:description",
			content: "Learner, parent and educator dashboard demos using sample data."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./soon.our-mission-Cw1vkzi_.mjs");
var Route = createFileRoute("/soon/our-mission")({
	head: () => ({ meta: [
		{ title: "Our Mission — Adaptly AI" },
		{
			name: "description",
			content: "Every learner deserves learning that fits the way their mind works. Learn about Adaptly AI's mission to make everyday learning achievable for neurodivergent learners."
		},
		{
			property: "og:title",
			content: "Our Mission — Adaptly AI"
		},
		{
			property: "og:description",
			content: "Adaptly AI makes everyday learning achievable for autistic and neurodivergent learners by shaping content around their interests, pace and preferred learning style."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	PlatformRoute: Route$2.update({
		id: "/platform",
		path: "/platform",
		getParentRoute: () => Route$5
	}),
	DashboardRoleRoute: Route$1.update({
		id: "/dashboard/$role",
		path: "/dashboard/$role",
		getParentRoute: () => Route$5
	}),
	SoonSlugRoute: Route$6.update({
		id: "/soon/$slug",
		path: "/soon/$slug",
		getParentRoute: () => Route$5
	}),
	SoonOurMissionRoute: Route.update({
		id: "/soon/our-mission",
		path: "/soon/our-mission",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
