# Adaptly AI: Personalized Learning Preview

Lovable Build Prompt — Adaptly AI Website (Early-Stage MVP)

Copy everything below into Lovable as your project prompt.

Project Brief

Build a basic, early-stage marketing website with a lightly-functional mock dashboard preview for a startup called Adaptly AI. This is an AI-powered personalised learning platform concept for autistic and other neurodivergent learners, currently in a very early founder/pre-seed stage — the site should feel like a real but young startup site, not a polished, fully-built SaaS product.

Important constraints:

This is NOT a full product build. It is a marketing/landing site with a mock, non-functional-looking (but slightly interactive) dashboard preview to show the vision.

Do not integrate any real third-party services (no real auth providers, no real payment, no real email/CRM integrations, no real AI API calls, no analytics SDKs) unless absolutely unavoidable for basic site mechanics (e.g. a simple contact form is fine as a UI-only form with a local "Thanks, we'll be in touch" confirmation state — no backend email sending required).

Use mock/hardcoded data everywhere — mock learner names, mock progress stats, mock lessons, mock testimonials/quotes if any. Nothing should call a real API or real database.

Keep functionality intentionally minimal: buttons that navigate between static sections/pages, simple client-side form validation with a mock success state, tab/toggle interactions for the dashboard preview — but no real account creation, no real login, no persisted user data.

Overall polish should read as "credible early MVP / pilot-stage startup," not as a mature finished product — clean and professional, but simple.

Brand & Visual Direction

Name: Adaptly AI

Logo: simple brain/network icon mark next to wordmark "Adaptly AI" (use a placeholder icon — e.g. a brain or puzzle-piece style icon from a free icon set like Lucide)

Color palette: purple/indigo primary (e.g. #6C5CE7 / #7C6FF0 range) with a blue-to-purple gradient accent, soft off-white/light-grey backgrounds, dark navy for the dashboard sidebar, green for positive progress indicators

Tone: warm, calm, accessible, optimistic — not clinical, not "medical." Rounded corners, generous whitespace, soft shadows, friendly icons (not stock medical imagery)

Typography: clean modern sans-serif (e.g. Inter or similar), clear hierarchy, good readability/accessibility contrast

Pages / Sections to Build

1. Homepage

Header (sticky nav):

Logo (left)

Nav links: Product, How It Works, For Educators, For Parents, About, Blog (these can link to on-page anchors or simple static placeholder pages — see below)

Right side: "Log in" (opens a simple mock login modal — see Auth section below) and a primary CTA button "Join a Pilot" (opens a mock contact/interest form)

Hero section:

Large headline: "Personalised Learning, Built Around Every Mind" (with "Built Around Every Mind" in the gradient/purple accent color)

Subheading: short paragraph describing that Adaptly AI creates adaptive learning experiences for neurodivergent learners by tailoring content to their interests, pace and preferred learning style

Two CTA buttons: "Explore the Platform" (primary, scrolls to or links to the mock Dashboard Preview page) and "Join a Pilot" (secondary/outline, opens mock interest form)

Small trust row underneath: three short badges with icons — "Privacy First — Secure & Ethical", "AI-Powered Personalisation", "Evidence Informed Learning Design"

To the right of the hero text, show a static mock preview image/card of the dashboard (see Dashboard Preview design below) — this can literally be a scaled-down, non-interactive snapshot-style card here on the homepage, with the fully interactive version living on its own page

"Why Traditional Learning Doesn't Work for Everyone" section:

Section heading + short intro paragraph

Three cards side by side, each with an icon, bold title, and one-line description:

"One-size-fits-all content" — Learners can struggle when content isn't matched to their needs.

"Limited personalisation" — Little adaptation to individual interests, strengths and learning style.

"Low engagement" — Learners lose motivation when they can't connect with the material.

A centered highlighted line beneath: "Adaptly AI is designed to make digital learning more flexible, personalised and engaging."

"How Adaptly AI Works" section:

Four-step horizontal process with connecting dashed line, each step has a circular icon, number/title, and short description:

Understand — Learners, parents or educators provide interests, preferences and learning needs.

Adapt — Our AI creates personalised lessons, examples and activities.

Learn — Learners engage with content that matches their pace and interests.

Improve — Progress and feedback help the system improve future learning experiences.

"Learning That Adapts in Real Time" feature grid:

Heading + short description + a small "Explore the Platform →" link

Four feature cards with illustration/icon placeholders:

Personalised Lessons — AI-generated lessons tailored to learner needs and level.

Interest-Based Examples — Real-world examples built around learner interests.

Adaptive Quizzes — Questions adjust in difficulty based on performance.

Parent & Educator Dashboard — Track progress, engagement and learning goals.

"See Personalisation in Action" mini interactive demo:

This is the one section that should have light real interactivity using mock/hardcoded data (no AI call):

Show a simple horizontal flow: "Learner Interest" → "Subject" → "Adaptly AI Generates" → "Result"

Provide a small interest picker (e.g. 3–4 clickable chips: Cars, Space, Animals, Football) and a subject picker (e.g. Mathematics, Science)

When the user clicks a combination, reveal a hardcoded example sentence from a small local lookup table (e.g. Cars + Mathematics → "If a car travels 60 miles in 2 hours, what is its average speed?"; Space + Mathematics → a distance/speed example about rockets; Animals + Science → an example about animal habitats, etc.) with a green checkmark "Lesson personalised successfully!" confirmation

Make sure at least 6–8 interest/subject combinations have mock example text prepared; for any combination without a prepared example, show a friendly fallback like "More personalised examples coming soon for this combination."

"Who Is Adaptly AI For?" section:

Three cards: Learners, Parents, Educators — each with icon, title, one-line description (reuse copy from the reference images provided)

"Built with Responsible AI" / "Our Impact" / "Founder" three-column section:

Column 1 "Built with Responsible AI": checklist of 5 items (AI-assisted content personalisation, Learner preference modelling, Adaptive content generation, Progress tracking & insights, Privacy-conscious by design)

Column 2 "Our Impact (In Progress)": explicitly early-stage framing — "We are currently developing and testing our first learning experiences with educators, parents and neurodivergent communities." with 4 small status icons/labels: Early Pilots Underway, Educator Collaborations, Learner Feedback Driven, Platform Evolving

Column 3 "Built by People Who Believe Learning Should Adapt": founder card with placeholder avatar, name "Miralkumar Patel", title "Founder & CEO, Adaptly AI", and a short bio: "A computing professional passionate about using technology to create more personalised and accessible learning experiences for neurodivergent learners."

CTA banner:

Gradient purple-to-blue full-width banner: "Help Us Build More Personalised Learning" with subtext "We're inviting educators, parents and partners to join our pilot programme and help shape the future of adaptive learning." Two buttons: "Join the Pilot" and "Partner With Us" (both open the same mock interest form modal, ideally with a query param or prop that pre-fills a "reason" dropdown)

Footer:

Logo + one-line tagline: "Building AI-powered learning experiences that adapt to every mind."

Columns: Product (Features, Platform, Roadmap, Updates), Company (About Us, Our Mission, Careers, Contact), Resources (Blog, Guides, Research, Help Centre), Legal (Privacy Policy, Terms of Use, Accessibility, Cookies)

Social icons (LinkedIn, Twitter/X, Email) — link placeholders, no need to be real/working

Copyright line: "© 2026 Adaptly AI Ltd. All rights reserved."

Note: footer links can point to simple placeholder pages (a generic "Coming soon" page component reused for anything not explicitly built) rather than 404s

2. Mock Dashboard Preview Page (/platform or /dashboard-preview)

This is reached via "Explore the Platform" — framed clearly as a preview/demo, e.g. a small banner at the top: "This is a preview of the Adaptly AI learner dashboard using sample data."

Layout: dark navy left sidebar + light content area, matching the reference image.

Sidebar nav (non-functional except toggling the active-state highlight and swapping content within this mock page): Dashboard, My Learning, Interests, Progress, Achievements, Messages, Settings — clicking these can switch which mock panel is shown (all still just hardcoded content, no real data fetching).

Dashboard main panel (default view):

"Welcome back, Aarav! 👋" greeting header (mock learner name)

Three stat cards: Current Streak (7 Days, with flame icon), Lessons Completed (24, book icon), Engagement (87%, small mock sparkline/trend chart)

"Recommended Next Lesson" card: "Fractions in Real Life (Using Pizza!)" with a pizza icon/illustration and a "Start Lesson ▶" button — clicking it can open a small mock lesson modal/page showing 2–3 static example question cards (no real interactivity needed beyond Next/Previous or Close)

"Interests" card listing chips: Cars, Space, Animals, with an "+ Edit Interests" link that opens a simple mock modal with checkboxes (state can update locally, no persistence needed)

"Recent Progress" mini line chart (mock data, e.g. 7 days trending upward) — use a lightweight charting approach with hardcoded values

"Weekly Goal" circular progress indicator showing 75% with "Great progress! Keep it up."

Other sidebar items (My Learning, Interests, Progress, Achievements, Messages, Settings) can each show a simple static placeholder panel with a couple of mock content blocks — these don't need real functionality, just enough to not feel broken when clicked.

3. Mock Auth (Login / Join a Pilot forms)

"Log in" opens a simple modal with email + password fields and a "Log in" button. On submit (regardless of input, with basic non-empty validation), show a mock message: "Login is disabled in this preview — this is a demo of Adaptly AI's product experience." Do NOT implement real authentication.

"Join a Pilot" / "Partner With Us" opens a modal or simple form (name, email, role — dropdown: Parent, Educator, Organisation/Partner, Other — and a short message field). On submit, show a friendly local confirmation state: "Thanks — we'll be in touch about the Adaptly AI pilot programme." No real email sending or backend required; this can just be local component state.

4. Simple Placeholder Pages

For nav items that don't need full builds yet (How It Works — can just anchor-link to homepage section, For Educators, For Parents, About, Blog, and footer links like Roadmap, Careers, Help Centre, etc.), create a single reusable "Coming Soon" page template: page header with the section title, a short sentence like "This page is part of Adaptly AI's early roadmap and is coming soon.", and a button back to the homepage. This keeps the site feeling complete without over-building unnecessary pages.

If time/scope allows, "About" can be slightly more built out with the founder bio and mission statement (reusing the copy already defined for the homepage founder section), but this is optional — a Coming Soon page is acceptable too.

Content Notes

Use the exact section copy/structure described above and in the attached reference images/document — the goal is to closely match this reference material.

Responsible-positioning language matters: the site should never claim to diagnose, treat, or cure autism, and should be framed as an accessibility/personalised-learning support tool, not a medical product.

All names, stats, testimonials, and example content are placeholders/mock data — clearly a demo, not live data.

Technical Notes

Single responsive site (desktop-first is fine, but should not visibly break on mobile/tablet widths)

No backend, no database, no real auth, no real AI/LLM calls, no analytics or marketing pixels

All "dynamic" behavior (interest/subject demo, dashboard sidebar switching, forms) implemented with local component state and hardcoded/mock data only

Keep the codebase simple and readable — this is an early MVP demo site, not a production platform. I will be later on deploy this product so make sure any media used should be publicly accessible even after deployment

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6b44e3df-d86c-46ba-ad87-234286f64faa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
