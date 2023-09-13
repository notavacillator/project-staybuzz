/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com', 'firebasestorage.googleapis.com', 'jsonkeeper.com', 'links.papareact.com']
    },
    compiler: {
        removeConsole: false,
    },
}

module.exports = nextConfig
