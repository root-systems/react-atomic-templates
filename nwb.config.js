module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Layout',
      externals: {
        react: 'React'
      }
    }
  }
}
