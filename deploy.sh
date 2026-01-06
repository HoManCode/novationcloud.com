#!/bin/bash
set -e

# Go to repo root (already here if script is executed correctly)
echo "Starting deployment..."

# Install dependencies
npm install

# Build Next.js app
npm run build

# Restart app with PM2
pm2 restart novationcloud || pm2 start npm --name novationcloud -- start
pm2 save

echo "Deployment finished!"
