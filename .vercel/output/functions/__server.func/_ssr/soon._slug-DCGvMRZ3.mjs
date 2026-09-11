import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/soon._slug-DCGvMRZ3.js
function titleFromSlug(slug) {
	return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
var $$splitComponentImporter = () => import("./soon._slug-ugKGbPM-.mjs");
var Route = createFileRoute("/soon/$slug")({
	head: ({ params }) => {
		const title = `${titleFromSlug(params.slug)} — Coming Soon | Adaptly AI`;
		const description = "This page is part of Adaptly AI's early roadmap and is coming soon. Adaptly AI builds adaptive learning for neurodivergent learners.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { titleFromSlug as n, Route as t };
