module.exports = {
  dependency: {
    platforms: {
      ios: {
        scriptPhases: [
          {
            name: '[NULLA-ENV] Configure App',
            path: './configure.ios.sh',
            execution_position: 'after_compile',
          },
        ],
      },
    },
  },
};
