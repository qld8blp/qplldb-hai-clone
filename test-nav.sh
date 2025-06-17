#!/bin/bash

echo "Testing HAI website navigation..."

# Test homepage
echo -n "Homepage: "
if curl -s http://localhost:3000 | grep -q "Welcome to HAI"; then
  echo "✓ OK - Found 'Welcome to HAI'"
else
  echo "✗ ERROR - Missing content"
fi

# Test products page
echo -n "Products: "
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/products)
echo "HTTP $response"

# Test about page
echo -n "About: "
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/about)
echo "HTTP $response"

# Test contact page
echo -n "Contact: "
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/contact)
echo "HTTP $response"

# Check for new sections
echo -e "\nChecking new sections..."
if curl -s http://localhost:3000 | grep -q "Why Companies Choose"; then
  echo "✓ Found 'Why Companies Choose HAI' section"
fi

if curl -s http://localhost:3000 | grep -q "Groups & Affiliations"; then
  echo "✓ Found 'Groups & Affiliations' section"
fi

if curl -s http://localhost:3000 | grep -q "Published Papers"; then
  echo "✓ Found 'Published Papers' section"
fi