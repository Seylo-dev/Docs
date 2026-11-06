import { fileURLToPath } from "node:url";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

// Pin the project root to this folder, so a lockfile in a parent folder never changes it.
const root = fileURLToPath(new URL(".", import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: { root },
  outputFileTracingRoot: root,
  // AGENTS.md is written by hand; `next dev` should not add its own block to it.
  agentRules: false,
};

export default withMDX(config);
