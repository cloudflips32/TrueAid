import type { HexclaveConfig } from "@hexclave/react";

export const config: HexclaveConfig = {
  emails: {
    selectedThemeId: "1df07ae6-abf3-4a40-83a5-a1a2cbe336ac",
  },
  auth: {
    password: {
      allowSignIn: true,
    },
    otp: {
      allowSignIn: true,
    },
    oauth: {
      providers: {
        google: {
          type: "google",
          allowSignIn: true,
          allowConnectedAccounts: true,
        },
        microsoft: {
          type: "microsoft",
          allowSignIn: true,
          allowConnectedAccounts: true,
        },
      },
    },
  },
  apps: {
    installed: {
      authentication: {
        enabled: true,
      },
      payments: {
        enabled: true,
      },
      emails: {
        enabled: true,
      },
      analytics: {
        enabled: true,
      },
    },
  },
};