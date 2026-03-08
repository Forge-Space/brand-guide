# brand-guide Deployment

## Cloudflare Pages
- Project: `brand-guide`
- Pages URL: `brand-guide-2l0.pages.dev` (live)
- Custom domain: `brand.forgespace.co` (configured, SSL provisioning)
- Zone: `63f7ebf9c355679fdfad35abbe632986` (forgespace.co, same account)
- Account: `712118840109d834d5e99925fd172432`

## CI/CD
- `.github/workflows/deploy.yml` — on push to main
- Uses `cloudflare/wrangler-action@v3`
- Build: `npm ci && npm run build`
- Deploy: `wrangler pages deploy dist --project-name=brand-guide`

## GitHub Secrets
- `CLOUDFLARE_API_TOKEN` — custom token, Pages Edit scope only
- `CLOUDFLARE_ACCOUNT_ID` — `712118840109d834d5e99925fd172432`

## Gotchas
- Tailwind v4 CSS parser warns on decimal spacing vars (--spacing-0.5) — harmless
- @forgespace/branding-mcp is devDep for generation only — CI doesn't need it
- identity.json is committed — generation is a one-time local operation
- Wrangler OAuth has zone:read only — DNS changes need API token or dashboard
