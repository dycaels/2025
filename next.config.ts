import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // importante!
  basePath: '/2026', // igual ao nome do repositório no GitHub
  images: {
    unoptimized: true // necessário se estiver usando next/image
  },
};

export default nextConfig;