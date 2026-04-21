# TrustDPV JavaScript SDK

Official JavaScript SDK for the [TrustDPV](https://trustdpv.com) API.

## Install

```bash
npm install trustdpv
```

## Quick Start

```javascript
const TrustDPV = require('trustdpv');
const tdpv = new TrustDPV({ apiKey: 'tdpv_live_your_key_here' });

// Verify a user
const result = await tdpv.verify('trustdpv');
// { valid: true, username: 'trustdpv', trust_score: 660, verified: true }

// Full profile
const profile = await tdpv.profile('trustdpv');

// Batch verify
const batch = await tdpv.verifyBatch(['seller1', 'seller2', 'seller3']);

// Badge URL (for <img> tags)
const badge = tdpv.badgeUrl('trustdpv');
// https://trustdpv.com/badge/trustdpv.svg
```

## API

| Method | Description |
|--------|-------------|
| `verify(username)` | Lightweight trust check |
| `profile(username)` | Full public profile |
| `verifyBatch(usernames)` | Batch verify (max 50) |
| `badgeUrl(username)` | SVG badge image URL |
| `profileUrl(username)` | Public profile page URL |
| `health()` | API health check |

## Rate Limits

- **Free:** 60 requests/min
- **Pro:** 1,000 requests/min (contact us)
- **Enterprise:** 10,000 requests/min (contact us)

## License

MIT