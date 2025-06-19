#!/bin/bash

# DALL-E Testing Workspace Setup Script
# Creates directory structure for HAI image generation testing

echo "Setting up DALL-E Testing Workspace for HAI Project..."

# Create main directories
mkdir -p generated-images/robots/fanuc
mkdir -p generated-images/equipment/thermal-spray
mkdir -p generated-images/products/powders
mkdir -p generated-images/products/wires
mkdir -p generated-images/products/spare-parts
mkdir -p generated-images/facilities
mkdir -p generated-images/processes
mkdir -p generated-images/team
mkdir -p generated-images/services
mkdir -p generated-images/operations

# Create testing support directories
mkdir -p testing-logs
mkdir -p rejected-images
mkdir -p reference-images

# Create placeholder files to preserve directory structure
touch generated-images/robots/fanuc/.gitkeep
touch generated-images/equipment/thermal-spray/.gitkeep
touch generated-images/products/powders/.gitkeep
touch generated-images/products/wires/.gitkeep
touch generated-images/products/spare-parts/.gitkeep
touch generated-images/facilities/.gitkeep
touch generated-images/processes/.gitkeep
touch generated-images/team/.gitkeep
touch generated-images/services/.gitkeep
touch generated-images/operations/.gitkeep
touch testing-logs/.gitkeep
touch rejected-images/.gitkeep
touch reference-images/.gitkeep

echo "✅ Directory structure created successfully!"
echo ""
echo "Created directories:"
echo "├── generated-images/"
echo "│   ├── robots/fanuc/"
echo "│   ├── equipment/thermal-spray/"
echo "│   ├── products/powders/"
echo "│   ├── products/wires/"
echo "│   ├── products/spare-parts/"
echo "│   ├── facilities/"
echo "│   ├── processes/"
echo "│   ├── team/"
echo "│   ├── services/"
echo "│   └── operations/"
echo "├── testing-logs/"
echo "├── rejected-images/"
echo "└── reference-images/"
echo ""
echo "Next steps:"
echo "1. Review dalle-prompts-collection.md"
echo "2. Follow TESTING_INSTRUCTIONS.md"
echo "3. Start with FANUC robot prompts (Priority Phase 1)"
echo ""
echo "Happy testing! 🎨"