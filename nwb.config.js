module.exports = {
  type: 'react-component',
  npm: {
    umd: {
      global: 'Layout',
      externals: {
        react: 'React'
      }
    }
  },
  polyfill: false,
  webpack: {
      config(config) {
          config.entry = {
              demo: ["./demo/src/index.tsx"]
          }
          config.resolve.extensions.push(".ts", ".tsx");
          config.module.rules.push({
              "test": /\.tsx?$/,
              "loader": "awesome-typescript-loader"
          });
          
          return config;
      }
  }
}
