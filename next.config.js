module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    config.module.rules.push({
      test: /\.css$/i,
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[hash:base64:5]',
        },
      },
    })

    return config
  },
}
