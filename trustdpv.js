/**
 * TrustDPV JavaScript SDK
 * npm install trustdpv (or include directly)
 * 
 * Usage:
 *   const tdpv = new TrustDPV({ apiKey: 'tdpv_live_...' });
 *   const profile = await tdpv.verify('username');
 *   const batch = await tdpv.verifyBatch(['user1', 'user2']);
 */

class TrustDPV {
  constructor({ apiKey, baseUrl = 'https://trustdpv.com' } = {}) {
    if (!apiKey) throw new Error('apiKey is required');
    this.apiKey = apiKey;
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  async _request(path, options = {}) {
    const url = `${this.baseUrl}${path}`;
    const headers = {
      'X-API-Key': this.apiKey,
      ...options.headers,
    };
    if (options.body) {
      headers['Content-Type'] = 'application/json';
    }
    const res = await fetch(url, { ...options, headers });
    const data = await res.json();
    if (!res.ok) {
      const err = new Error(data.error || `API error ${res.status}`);
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  /** Get full public profile */
  async profile(username) {
    return this._request(`/api/v1/public/${encodeURIComponent(username)}`);
  }

  /** Lightweight trust verification */
  async verify(username) {
    return this._request(`/api/v1/verify/${encodeURIComponent(username)}`);
  }

  /** Batch verify up to 50 usernames */
  async verifyBatch(usernames) {
    if (!Array.isArray(usernames)) throw new Error('usernames must be an array');
    if (usernames.length > 50) throw new Error('Maximum 50 usernames per batch');
    return this._request('/api/v1/verify-batch', {
      method: 'POST',
      body: JSON.stringify({ usernames }),
    });
  }

  /** Get badge SVG URL */
  badgeUrl(username) {
    return `${this.baseUrl}/badge/${encodeURIComponent(username)}.svg`;
  }

  /** Get public profile URL */
  profileUrl(username) {
    return `${this.baseUrl}/u/${encodeURIComponent(username)}`;
  }

  /** Health check */
  async health() {
    const res = await fetch(`${this.baseUrl}/api/health`);
    return res.json();
  }
}

// Export for Node.js / ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TrustDPV;
}
// Also support ES module default export
if (typeof exports !== 'undefined') {
  exports.default = TrustDPV;
}