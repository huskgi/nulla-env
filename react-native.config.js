module.exports = {
  dependency: {
    platforms: {
      ios: {
        scriptPhases: [
          {
            name: '[NULLA-ENV] Configure App',
            path: './configure.ios.sh',
            execution_position: 'after_compile',
            input_files: ['${BUILT_PRODUCTS_DIR}/${INFOPLIST_PATH}'],
            output_files: ['${BUILT_PRODUCTS_DIR}/${INFOPLIST_PATH}'],
          },
        ],
      },
    },
  },
};
