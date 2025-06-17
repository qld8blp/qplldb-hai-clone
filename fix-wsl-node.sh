#!/bin/bash

echo "Attempting to fix WSL Node.js bus error..."

# Set environment variables
export NODE_OPTIONS="--max-old-space-size=4096"
export DISABLE_V8_COMPILE_CACHE=1

# Clear various caches
echo "Clearing caches..."
rm -rf ~/.npm
rm -rf node_modules
rm -f package-lock.json

# Try yarn instead of npm
echo "Installing yarn..."
npm install -g yarn --force 2>/dev/null || curl -o- -L https://yarnpkg.com/install.sh | bash

# Use yarn to install dependencies
echo "Installing dependencies with yarn..."
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
yarn install

# If yarn fails, try pnpm
if [ $? -ne 0 ]; then
    echo "Yarn failed, trying pnpm..."
    npm install -g pnpm --force
    pnpm install
fi

echo "Fix attempt complete. Try running: yarn dev or pnpm dev"