/** @type {import('next').NextConfig} */
const config = {
  webpack(config) {
    config.module.rules = [
      {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      },
      ...config.module.rules,
    ];

    return config;
  },
};

module.exports = config;
