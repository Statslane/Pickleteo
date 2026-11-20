# Pickleteo preview handoff

This branch is for a Vercel **preview and owner review only**. Do not merge into `main` or deploy production without David's explicit approval. Statslane confirmed that `main` automatically publishes the live site.

## Changes to review

- Refined homepage headline and beginner journey, earlier membership comparison, five manually browsable Google review cards, facility details, and compact Statslane partner banner.
- Dedicated Open Play, Membership & Guest Options, Learn & Improve, and Club Policies pages. Existing Club, About, Contact, and Sponsor pages use consistent navigation, typography, photos, and calls to action.
- Guest guidance covers equipment included in the free beginner class, arrival/check-in, footwear, junior supervision, entrance/parking, guest rates, and the possibility of early closure.
- CourtReserve remains the booking/payment/account/signing system. This branch does not change CourtReserve settings or submit registrations.
- Keyboard skip link, visible focus, mobile-menu background isolation and focus handling, Escape behavior, larger FAQ targets, video pause/reduced-motion support, and review carousel keyboard/swipe support.
- Approved editorial photos and faded mascot assets; optimized images and original approved privacy/conduct/liability PDFs.
- Search-ready HTML for nine routes, route metadata/canonicals/social images, club schema, sitemap and robots. Preview HTML routes and Vercel rewrites are aligned, including `/policies`.

## Membership and policy approval holds

Frank supplied visitor confirmations and a November 18 matrix/revised documents. Some sources still disagree. This branch does **not** publish a definitive disputed reservation quantity, weekly allowance, membership cancellation notice, or initial refund window, and does not publish the conflicting membership agreements/terms as policy downloads.

Before production, obtain aligned owner-approved wording and matching CourtReserve settings for:

1. Membership cancellation notice: email/matrix says 10 days; revised agreement says 10 business days; revised terms says 20 days. Initial refund windows also differ: 48 hours versus five business days.
2. Active reservation counts and weekly court-hour allowances. Latest reply/matrix and the revised agreement use different limits; Open Play Plus also differs. Do not infer unlimited weekly play.
3. Fixed lesson/league discount percentages, if advertised. Current copy uses variable instructor/booking-dependent lesson discounts and the newly confirmed Premium annual league benefit.
4. Annual-plan availability/eligibility, any per-person versus shared league allocation for the two-player plan, and final public membership documents.
5. Waiver renewal wording across documents. Operational copy follows Frank's instruction to complete it when CourtReserve prompts.

Additional content still pending: coach headshots/approved bios, accessible entrance/parking specifics, staffed hours, equipment charges outside the free class, session-specific junior rules and any taxes/fees/cancellation exceptions not established by supplied sources. The site avoids unsupported guarantees and directs these questions to the club.

Only the approved Privacy, Code of Conduct and Liability Release originals are included. Their contents have not been rewritten. Obtain an owner-approved effective date/update if needed before launch.

## Verification

Use Node 24 (or a version supported by the locked Vite release):

```sh
npm ci --ignore-scripts
npm run build
npm run lint
npm run preview -- --host 127.0.0.1 --port 4174 --strictPort
```

With preview running in another terminal:

```sh
PREVIEW_URL=http://127.0.0.1:4174 node scripts/check-review-build.mjs
```

In PowerShell, set `$env:PREVIEW_URL='http://127.0.0.1:4174'` first. The check verifies built/served route titles, single H1, canonical, club address schema, local image references, internal page links and sitemap entries. Production build includes static HTML generation; do not replace it with plain `vite build` in Vercel.

Run the branch preview through the nine routes: `/`, `/membership`, `/learn-improve`, `/open-play`, `/the-club`, `/about`, `/contact`, `/sponsor`, `/policies`. Check at phone and desktop widths, the Start Here jump, menu focus/Escape, review arrows/swiping, FAQ disclosures, video pause, PDF links and the CourtReserve handoff. A controlled real booking/payment/confirmation test is still required; no account, waiver, booking or payment was submitted during the local audit.

Review the five exact Google review excerpts and links as part of content approval. Individual five-star ratings were checked previously; no aggregate review schema or guarantee of ranking is added.

## Excluded from this branch

- Local audit screenshots, the local-review gallery, private email extracts and downloaded source correspondence/membership files.
- One-off photo/otter editing scripts, raw alternate assets and unused mascot variations.
- Dependencies, build output, credentials, signed download URLs and local machine paths.
- New dependencies or lockfile changes; the original `package-lock.json` is retained.

The original local working directory is preserved. Small packaging fixes are limited to the review checkout: omit disputed reservation quantities, include the missing policy rewrite, align social preview images, respect the existing always-visible header option, and make the local build check's preview URL configurable.

## Approval sequence

Statslane shares the branch preview URL → David reviews desktop/mobile and confirms outstanding commercial/policy content → controlled booking test → explicit approval to merge/publish. Production routing, indexability, Search Console and final performance checks follow only in the approved release process.
