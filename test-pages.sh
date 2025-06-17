#!/bin/bash

# Test all pages for errors
echo "Testing HAI website pages..."

pages=(
  "/"
  "/about"
  "/products"
  "/products/thermal-spray-powder"
  "/products/thermal-spray-wire"
  "/products/equipment-systems"
  "/products/spare-parts"
  "/quality"
  "/capabilities"
  "/latest-developments"
  "/contact"
  "/career/jd-008"
  "/career/jd-010"
)

for page in "${pages[@]}"; do
  echo -n "Testing $page ... "
  response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000$page)
  if [ "$response" = "200" ]; then
    echo "✓ OK"
  else
    echo "✗ ERROR (HTTP $response)"
  fi
done