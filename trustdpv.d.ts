/**
 * TrustDPV JavaScript SDK - Type Definitions
 */
declare class TrustDPV {
  constructor(options: { apiKey: string; baseUrl?: string });

  profile(username: string): Promise<TrustDPVProfile>;
  verify(username: string): Promise<TrustDPVVerification>;
  verifyBatch(usernames: string[]): Promise<TrustDPVBatchResult>;
  badgeUrl(username: string): string;
  profileUrl(username: string): string;
  health(): Promise<TrustDPVHealth>;
}

interface TrustDPVProfile {
  username: string;
  full_name: string | null;
  bio: string | null;
  trust_score: number;
  verified: boolean;
  member_since: string;
  endorsements: number;
  platforms: Array<{
    platform: string;
    verified: boolean;
    verification_status: string;
    platform_username?: string;
  }>;
}

interface TrustDPVVerification {
  username: string;
  trust_score: number;
  verified: boolean;
  platform_count: number;
}

interface TrustDPVBatchResult {
  results: Array<{
    username: string;
    trust_score: number;
    verified: boolean;
  }>;
  errors: Array<{
    username: string;
    error: string;
  }>;
}

interface TrustDPVHealth {
  status: string;
  timestamp: string;
  services: {
    database: string;
    api: string;
    webhooks: string;
  };
  version: string;
}

export = TrustDPV;