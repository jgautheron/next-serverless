module.exports = {
  assetPrefix: '/latest',
  webpack: (config) => {
    config.output.publicPath = `/latest${config.output.publicPath}`
    return config
  },
}
