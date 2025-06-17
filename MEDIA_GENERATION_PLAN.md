# Media Generation Plan for HAI Project

## 🎯 Recommended Stack for Your Setup

### Phase 1: Cloud APIs (Start Here)
**Best for immediate results with minimal setup**

1. **OpenAI DALL-E 3** ✅ RECOMMENDED
   - Perfect for: Product images, technical diagrams
   - Cost: $0.04-0.08 per image
   - Quality: Excellent for industrial/technical content
   - Integration: Simple API calls from Cursor agents
   
2. **Runway Gen-3** (for video demos)
   - Perfect for: Product process videos, facility tours
   - Cost: $12/mo for ~52 seconds
   - Quality: Professional grade
   - Use case: Homepage hero video, product demos

### Phase 2: Local Generation (After testing cloud)
**For bulk generation and cost savings**

1. **Stable Diffusion 3.5 Medium** via ComfyUI
   - GPU Required: 10GB VRAM (RTX 3060 works)
   - Cost: Free (electricity only)
   - Best for: Bulk variations, A/B testing
   
2. **Setup in WSL**:
   ```bash
   # Already configured for your environment
   conda create -n hai-media python=3.10
   conda activate hai-media
   pip install torch torchvision diffusers transformers
   ```

## 🚀 Implementation Plan

### Step 1: API Integration (Week 1)
```javascript
// agents/media-generator.ts
export class MediaGenerator {
  async generateProductImage(productType: string) {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Professional product photography of ${productType}...`,
      size: "1024x1024",
      quality: "hd"
    });
    return response.data[0].url;
  }
}
```

### Step 2: Automation Pipeline (Week 2)
```yaml
# .github/workflows/media-generation.yml
name: Generate Missing Media
on:
  schedule:
    - cron: '0 2 * * 1' # Weekly
  workflow_dispatch:

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Generate Product Images
        run: npm run generate:media
      - name: Optimize Images
        run: npm run optimize:images
      - name: Create PR
        uses: peter-evans/create-pull-request@v5
```

### Step 3: Content Types Priority

1. **Product Images** (Immediate need)
   - Thermal spray powder containers
   - Wire spools and packaging
   - Equipment systems
   - Spare parts layout

2. **Hero Images** (High impact)
   - Homepage: Thermal spray process in action
   - Products page: Industrial workshop
   - About page: Modern facility exterior
   - Quality page: Certification badges

3. **Industry Icons** (Replace placeholders)
   - Custom 3D renders for each industry
   - Consistent style and coloring
   - 512x512 optimized PNGs

## 💰 Budget Optimization

### Estimated Costs:
- **Initial Asset Generation**: ~$50-100 (DALL-E)
- **Monthly Maintenance**: ~$10-20 (updates/variations)
- **Video Content**: ~$12-50/mo (Runway)

### Cost-Saving Strategy:
1. Generate hero assets with DALL-E (high quality)
2. Create variations locally with SD 3.5
3. Use free tiers for testing (Pika, Luma)

## 🔧 Technical Integration

### Cursor Agent Configuration:
```typescript
// .cursorrules addition
When generating media assets:
1. Check existing assets first
2. Use consistent naming: {category}_{type}_{timestamp}.{ext}
3. Auto-optimize: Convert to WebP, compress to <100KB
4. Generate alt text with image
5. Create multiple sizes: thumbnail, medium, full
```

### Storage Strategy:
```
public/
├── images/
│   ├── products/
│   │   ├── original/ (DALL-E originals)
│   │   ├── optimized/ (WebP versions)
│   │   └── thumbnails/ (250x250)
│   ├── heroes/
│   └── industries/
```

## 📊 Success Metrics

1. **Page Load Speed**: <2s with new images
2. **Image Quality**: Score >90 on clarity
3. **Consistency**: All images match brand style
4. **Coverage**: 100% placeholder replacement

## 🎬 Quick Start Commands

```bash
# Set up environment
export OPENAI_API_KEY="your-key-here"

# Generate single image
npm run generate:image -- --type product --name powder

# Batch generation
npm run generate:all-media

# Optimize existing images
npm run optimize:images

# Preview in development
npm run dev
```

## Next Steps:
1. Get OpenAI API key
2. Run setup script: `./scripts/media-generation-setup.sh`
3. Generate first test image
4. Review quality and adjust prompts
5. Batch generate all missing assets