#!/usr/bin/env bash

set -euxo pipefail

node ../node_modules/nulla-env/scripts/configure.ios.js

echo "info: <- NULLA build script finished"
