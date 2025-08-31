import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Stabilize tracing root in nested workspaces/monorepos
  outputFileTracingRoot: path.join(__dirname),
  // Produce a self-contained server output to avoid missing chunk modules
  output: "standalone",
};

export default nextConfig;
