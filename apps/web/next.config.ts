// import nextra from "nextra";

// const withNextra = nextra({
//   theme: "nextra-theme-docs",
//   themeConfig: "./theme.config.tsx",
//   latex: true,
//   search: {
//     codeblocks: false,
//   },
// });

// export default withNextra({
//   reactStrictMode: true,
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
