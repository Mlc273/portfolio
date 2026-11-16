// GitHub Pages serves this site from https://<username>.github.io/portfolio,
// so production builds are exported as static files under the /portfolio path.
// PAGES_BASE_PATH overrides it (used once to export the Assignment One snapshot).
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.PAGES_BASE_PATH ?? (isProd ? "/portfolio" : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
