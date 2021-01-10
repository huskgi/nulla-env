const { readNullaConfig } = require('./utils');

function run() {
  const config = readNullaConfig(process.env.PROJECT_DIR + '/../');
  console.log('------------config:', config);
}

run();
