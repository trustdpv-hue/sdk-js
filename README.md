<h1 align="center">
  <img src="https://trustdpv.com/logo.svg" alt="TrustDPV" width="64" height="64"><br>
  TrustDPV JavaScript SDK
</h1>

<p align="center">
  <strong>Portable trust for the internet</strong><br>
  <a href="https://trustdpv.com">trustdpv.com</a> · <a href="https://trustdpv.com/developers">Docs</a> · <a href="https://www.npmjs.com/package/trustdpv">npm</a>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/trustdpv?color=3b82f6" alt="npm version">
  <img src="https://img.shields.io/npm/dt/trustdpv?color=3b82f6" alt="npm downloads">
  <img src="https://img.shields.io/github/license/trustdpv-hue/sdk-js?color=3b82f6" alt="license">
</p>

---

Verify anyone's trust score in 2 lines of code.

TrustDPV gives people a portable trust profile - verified platforms, endorsements, and a 0-1000 trust score that follows them across marketplaces, communities, and platforms.

## Install

```bash
npm install trustdpv
```

## Quick Start

```javascript
const TrustDPV = require('trustdpv');
const tdpv = new TrustDPV({ apiKey: 'tdpv_live_your_key_here' });

// Verify a user - get their trust score
const result = await tdpv.verify('trustdpv');
// { valid: true, username: 'trustdpv', trust_score: 660, verified: true }

// Full profile with platforms and endorsements
const profile = await tdpv.profile('trustdpv');

// Batch verify up to 50 users at once
const batch = await tdpv.verifyBatch(['seller1', 'seller2', 'seller3']);

// Generate a badge URL for embedding
const badge = tdpv.badgeUrl('trustdpv');
// https://trustdpv.com/badge/trustdpv.svg
```

## TypeScript

Full type definitions included:

```typescript
import TrustDPV from 'trustdpv';

const tdpv = new TrustDPV({ apiKey: 'tdpv_live_your_key_here' });
const result: VerificationResult = await tdpv.verify('trustdpv');
```

## API

| Method | Description | Returns |
|--------|-------------|---------|
| `verify(username)` | Lightweight trust check | `{ valid, username, trust_score, verified }` |
| `profile(username)` | Full public profile | Profile object with platforms & endorsements |
| `verifyBatch(usernames)` | Batch verify (max 50) | Array of verification results |
| `badgeUrl(username)` | SVG badge image URL | `string` URL |
| `profileUrl(username)` | Public profile page URL | `string` URL |
| `health()` | API health check | `{ status, timestamp }` |

## Rate Limits

| Tier | Requests/min | Cost |
|------|-------------|------|
| Free | 60 | £0 |
| Pro | 1,000 | Contact us |
| Enterprise | 10,000 | Contact us |

## Use Cases

- **Marketplace integration** - Show trust badges on seller profiles
- **Community platforms** - Verify user credibility before transactions
- **Freelance platforms** - Portable reputation across job sites
- **Dating apps** - Verify real identity

## Links

- [API Documentation](https://trustdpv.com/developers)
- [Get an API Key](https://trustdpv.com/dashboard) (free)
- [Report a Bug](https://github.com/trustdpv-hue/sdk-js/issues)

## License

MIT