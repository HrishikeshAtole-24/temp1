import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /*
   * A stray package-lock.json in the user profile made Next infer the home
   * directory as the workspace root, which would trace the wrong files into
   * the deployment bundle. Pin it to this project.
   */
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
