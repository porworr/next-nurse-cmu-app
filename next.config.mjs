/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // basePath: "/next-nurse-cmu-app", //  http://localhost:3000/next-nurse-cmu-app
    // poweredByHeader: false,
    // compress: true,
    images: {
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.com",
            },
        ],
    }

};

export default nextConfig;
