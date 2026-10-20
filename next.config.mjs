import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',

  images: {
    unoptimized: true,
  },
};

export default withMDX()(nextConfig)