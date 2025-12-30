import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Home: /index.html -> /
      {
        source: "/index.html",
        destination: "/",
        permanent: false,
      },

      // Subpages: .html -> pretty URL
      {
        source: "/brandwacht-huren.html",
        destination: "/brandwacht-huren",
        permanent: false,
      },
      {
        source: "/facility-management.html",
        destination: "/facility-management",
        permanent: false,
      },
      {
        source: "/secure-iot-solar-gateway.html",
        destination: "/secure-iot-solar-gateway",
        permanent: false,
      },
      {
        source: "/testimonials.html",
        destination: "/testimonials",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      // Subpages: pretty URLs serve the .html files in /public
      {
        source: "/brandwacht-huren",
        destination: "/brandwacht-huren.html",
      },
      {
        source: "/facility-management",
        destination: "/facility-management.html",
      },
      {
        source: "/secure-iot-solar-gateway",
        destination: "/secure-iot-solar-gateway.html",
      },
      {
        source: "/testimonials",
        destination: "/testimonials.html",
      },
    ];
  },
};

export default nextConfig;
