import { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        const rewrites = [
            {
                source: "/api/:path*",
                destination:
                    process.env.NODE_ENV === "development"
                        ? "http://localhost:80/api/v1/:path*"
                        : "/api/",
            },
            {
                source: "/docs",
                destination:
                    process.env.NODE_ENV === "development"
                        ? "http://localhost:80/docs"
                        : "/api/docs",
            },
            {
                source: "/openapi.json",
                destination:
                    process.env.NODE_ENV === "development"
                        ? "http://localhost:80/openapi.json"
                        : "/api/openapi.json",
            },
        ];

        console.log("Rewrites Configured:", rewrites); // Debug rewrites
        return rewrites;
    },
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ],
            },
        ];
    },
};

export default nextConfig;
