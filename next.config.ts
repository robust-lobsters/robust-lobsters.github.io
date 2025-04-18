import type { NextConfig } from 'next'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
const repo = 'https://robust-lobsters.github.io'

const withVanillaExtract = createVanillaExtractPlugin()
const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? `${repo}/` : '',
  output: 'export',
  distDir: 'out',
}

export default withVanillaExtract(nextConfig)
