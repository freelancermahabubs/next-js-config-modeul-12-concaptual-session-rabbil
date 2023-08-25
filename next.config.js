/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/subfolder",
  // env: {
  //   API_KEY: "XYZ-125-ABC",
  //   API_SECRET: "XYZ-125-ABC",
  // },
  poweredByHeader: false,
  pageExtensions: ["js", "jsx", "ts"],
  reactStrictMode: true,
  distDir: "build",
  httpAgentOptions: {
    keepAlive: true,
    timeout: 5000,
  },
  // compression: true,
  // productionBrowserSourceMaps: false,
  // trailingSlash: true,
  async headers() {

    // return [{source: "/:path*", headers: [{key: "Mahabub", value: "nextv1"}]}];
    // return [{source: "/:path*", headers: [{key: "X-Frame-Options", value: "SMEORIGIN"}]}];
    // return [
    //   {source: "/:path*", headers: [{key: "X-Frame-Options", value: "DENY"}]},
    // ];
    // return [
    //   {
    //     source: "/:path*",
    //     headers: [
    //       {
    //         key: "Content-Security-Policy",
    //         value: "default-src 'self'; script-src 'self'",
    //       },
    //     ],

    //   },
    // ];
    // return [
    //   {
    //     source: "/:path*",
    //     headers: [
    //       {
    //         key: "Permission-Policy",
    //         value: "camera=(); microphone=(self); geolocation=(self)",
    //       },
    //     ],
    //   },
    // ];
    // return [
    //   {
    //     source: "/:path*",
    //     headers: [
    //       {
    //         key: "Strict-Transport-Security",
    //         value: "max-age=63072000; includeSubDomains",
    //       },
    //     ],
    //   },
    // ];

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
