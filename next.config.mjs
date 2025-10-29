// /** @type {import('next').NextConfig} */
// const nextConfig = {
 
//   reactStrictMode: false,
//   productionBrowserSourceMaps: false,


//     images: {
//     domains: ["http://192.168.1.35:3001", "192.168.1.35:3001", "192.168.1.35:3001"],
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "192.168.1.35:3001",
//         pathname: "/",
//       },
//     ],
//   },
//   async rewrites() {
//     return [
//       {
        
//         source: "/api/:path*",
//         destination: "http://192.168.1.35:3001/api/:path", // note /api here
//       },
//     ];
//   },
// };

// export default nextConfig;
 
//---------------------------------------- proxy add Code ----------------

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: false,

  images: {
    domains: ["192.168.1.35"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.35",
        port: "3001",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.1.35:3001/api/:path*", 
      },
    ];
  },
};

export default nextConfig;
