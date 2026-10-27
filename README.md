# Student Voice — ATS Abu Dhabi Boys

Bilingual council hub with separate Home, Clubs, Suggestions, Council, Activities, and Study Planner pages.

## Council management

The site owner can open `/manage` to add/edit clubs, publish responsible teacher or counselor details, add approved council contacts, and review suggestions. Management is restricted server-side to the owner's verified sign-in email. The hosting audience remains owner-private until explicitly changed.

The six council names and roles come from the user's supplied list. Contact information is intentionally blank until approved details are supplied. Three initial club entries are explicitly marked **proposed**, not confirmed school clubs. Add or update confirmed clubs in management. Activities remain clearly labeled proposals.

Suggestions are stored in D1, scoped to the submitting signed-in visitor. The site owner can review all suggestions, change status, and add a response visible to the submitter. Suggestions do not send email notifications. Study planner tasks remain browser-local under the original `sv-tasks` key.

## Assets

Official ACTVET/ATS combined SVG and campus image were obtained from https://www.ats.sch.ae/ and https://www.ats.sch.ae/auhb/ respectively. The original assets are in `public/assets`.

## Verification

- `node tests/access.test.mjs`
- `npx tsc --noEmit`
- `npm run db:generate` after schema changes only
- Build with the Sites build helper; publish with the Sites source workflow.

No browser QA environment is available in this session.

## Running the source

Requires Node.js 22.13 or newer. Run `npm ci`, then `npm run dev` for local development. Use `npm run build` for the Cloudflare Worker build.

This is a full-stack React/Vinext project, not a standalone HTML site. Suggestions and directory editing use Cloudflare D1 and dispatch-owned authentication. GitHub Pages alone cannot run those backend features. The export omits the original Sites project ID; the existing live site is unchanged.

Live site: https://ats-student-voice.sunlitsnipe.chatgpt.site/
