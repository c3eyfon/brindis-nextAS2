import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

const nextConfig = (phase) => {
  // Setting Phase
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  // Compiler options here
  const reactStrictMode = true;
  const reactCompiler = true;

  // UNCONFIGURED HOST + REMOTE PATTERNS: https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns
  const images = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
      },
    ],
  };

  const env = {
    SERVER_NAME: (() => {
      if (isDev) return `${process.env.NEXT_PUBLIC_CODEFEED_DEV_API_ENDPOINT}`;
      if (isProd)
        return `${process.env.NEXT_PUBLIC_CODEFEED_PROD_API_ENDPOINT}`;
      return undefined;
    })(),
    COCKTAILS_API_KEY: process.env.COCKTAILS_API_KEY,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  };

  // Next.config returns an object
  return {
    reactStrictMode,
    reactCompiler,
    images,
    env,
    turbopack: {
      root: import.meta.dirname,
    },
  };
};

export default nextConfig;
