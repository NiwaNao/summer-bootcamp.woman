/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
<<<<<<< HEAD
    unoptimized: false,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
=======
    unoptimized: true,
>>>>>>> be5bfe05171d027a87f604eed878f8ccfe8d85d8
  },
}

export default nextConfig
