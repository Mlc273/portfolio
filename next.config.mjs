// GitHub Pages serves this site from https://<username>.github.io/portfolio,
// so production builds are exported as static files under the /portfolio path.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
