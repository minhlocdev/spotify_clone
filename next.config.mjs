/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bsnvtneqrifyemcflwsx.supabase.co',
                port: '',
            },
        ],
    },
};

export default nextConfig;
