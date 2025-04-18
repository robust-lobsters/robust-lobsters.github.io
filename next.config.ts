import type { NextConfig } from 'next'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
const repo = 'https://robust-lobsters.github.io/robust-lobsters.github.io'

const withVanillaExtract = createVanillaExtractPlugin()
const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? `${repo}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `${repo}/` : '',
  output: 'export',
  distDir: 'out',
}

export default withVanillaExtract(nextConfig)
