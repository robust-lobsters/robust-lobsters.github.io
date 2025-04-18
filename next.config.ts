import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig: NextConfig = {
  assetPrefix:
    process.env.NODE_ENV === 'production' ? 'https://robust-lobsters.github.io/robust-lobsters.github.io' : '',
  output: 'export',
  distDir: 'out',
};

export default withVanillaExtract(nextConfig);
