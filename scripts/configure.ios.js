const { readNullaConfig, plistBuddy } = require('./utils');

function run() {
  const { PROJECT_DIR, BUILT_PRODUCTS_DIR, INFOPLIST_PATH } = process.env;
  const { appName, bundleId } = readNullaConfig(`${PROJECT_DIR}/../`);
  const setPlistValue = plistBuddy(`${BUILT_PRODUCTS_DIR}/${INFOPLIST_PATH}`);

  appName && setPlistValue('CFBundleDisplayName', appName);
  bundleId && setPlistValue('CFBundleIdentifier', bundleId);
}

run();
