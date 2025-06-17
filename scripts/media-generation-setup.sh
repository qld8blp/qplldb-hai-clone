#!/bin/bash
# Media Generation Setup for HAI Project

echo "🎨 Setting up AI Media Generation Pipeline..."

# Create media generation directories
mkdir -p generated/images/{products,industries,heroes,process}
mkdir -p generated/videos/{demos,social}
mkdir -p scripts/media-gen

# Install Python dependencies for image generation
cat > requirements-media.txt << EOF
torch>=2.0.0
torchvision
diffusers>=0.24.0
transformers>=4.35.0
accelerate
xformers
pillow
requests
openai
EOF

echo "📦 To install dependencies, run:"
echo "pip install -r requirements-media.txt"

# Create DALL-E integration script
cat > scripts/media-gen/dalle_generator.py << 'EOF'
import os
import openai
from pathlib import Path
import requests
from datetime import datetime

class DalleGenerator:
    def __init__(self, api_key):
        openai.api_key = api_key
        self.output_dir = Path("generated/images")
        
    def generate_product_image(self, product_type, style="photorealistic"):
        """Generate product images for HAI thermal spray products"""
        prompts = {
            "powder": f"{style} thermal spray powder in industrial container, metallic particles visible, professional product photography, white background",
            "wire": f"{style} thermal spray wire spools, industrial grade, various alloys, professional lighting",
            "equipment": f"{style} thermal spray equipment system, industrial machinery, clean workshop environment",
            "spare-parts": f"{style} thermal spray gun parts and nozzles, technical components, organized layout"
        }
        
        prompt = prompts.get(product_type, f"{style} industrial thermal spray {product_type}")
        
        response = openai.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size="1024x1024",
            quality="hd",
            n=1,
        )
        
        image_url = response.data[0].url
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{product_type}_{timestamp}.png"
        filepath = self.output_dir / "products" / filename
        
        # Download and save
        img_data = requests.get(image_url).content
        filepath.parent.mkdir(parents=True, exist_ok=True)
        with open(filepath, 'wb') as f:
            f.write(img_data)
            
        return str(filepath)

# Usage example:
# generator = DalleGenerator(os.getenv("OPENAI_API_KEY"))
# generator.generate_product_image("powder")
EOF

# Create ComfyUI workflow for local generation
cat > scripts/media-gen/comfyui_workflow.json << 'EOF'
{
  "workflow_name": "HAI_Product_Generator",
  "nodes": {
    "checkpoint_loader": {
      "model": "stable-diffusion-3.5-medium.safetensors"
    },
    "prompt": {
      "positive": "professional product photography, industrial thermal spray {product}, clean white background, high quality, detailed",
      "negative": "blurry, low quality, amateur, watermark"
    },
    "sampler": {
      "steps": 20,
      "cfg": 7,
      "sampler_name": "dpmpp_2m",
      "scheduler": "karras"
    }
  }
}
EOF

# Create automation script
cat > scripts/media-gen/generate_all_media.sh << 'EOF'
#!/bin/bash
# Generate all media for HAI website

echo "🚀 Starting HAI Media Generation Pipeline..."

# Product images
products=("powder" "wire" "equipment" "spare-parts")
for product in "${products[@]}"; do
    echo "Generating images for: $product"
    python scripts/media-gen/dalle_generator.py --product "$product"
done

# Industry images
industries=("aerospace" "automotive" "biomedical" "drilling" "electronics" "energy" "oil-gas" "pulp-paper" "semiconductor" "steel")
for industry in "${industries[@]}"; do
    echo "Generating industry image for: $industry"
    python scripts/media-gen/dalle_generator.py --industry "$industry"
done

# Optimize all generated images
echo "🔧 Optimizing images..."
find generated/images -name "*.png" -exec convert {} -quality 85 -strip {} \;

# Convert to WebP for better performance
find generated/images -name "*.png" -exec cwebp {} -q 80 -o {}.webp \;

echo "✅ Media generation complete!"
EOF

chmod +x scripts/media-gen/generate_all_media.sh

echo "✅ Media generation setup complete!"
echo ""
echo "Next steps:"
echo "1. Set your OPENAI_API_KEY environment variable"
echo "2. Install Python dependencies: pip install -r requirements-media.txt"
echo "3. Run: ./scripts/media-gen/generate_all_media.sh"