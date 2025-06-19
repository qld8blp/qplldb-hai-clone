# DALL-E Testing Instructions - HAI Project

## Quick Start Guide

### 1. Setup Testing Environment
Create the following directory structure in your workspace:
```
generated-images/
├── robots/
│   └── fanuc/
├── equipment/
│   └── thermal-spray/
├── products/
│   ├── powders/
│   ├── wires/
│   └── spare-parts/
├── facilities/
├── processes/
├── team/
├── services/
└── operations/
```

### 2. Testing Priorities (Start Here)
**Phase 1 - FANUC Robots (PRIORITY)**
- [ ] FANUC_001: Industrial Setting
- [ ] FANUC_002: Thermal Spray Application  
- [ ] FANUC_003: Close-up Detail
- [ ] FANUC_004: Factory Floor
- [ ] FANUC_005: Maintenance Scene

**Phase 2 - Core Products**
- [ ] HAI_EQUIP_001: Thermal Spray Equipment
- [ ] HAI_POWDER_001: Thermal Spray Powder
- [ ] HAI_WIRE_001: Thermal Spray Wire
- [ ] HAI_PARTS_001: Spare Parts Collection

**Phase 3 - Facilities & Processes**
- [ ] HAI_FACTORY_001: Factory Interior
- [ ] HAI_QC_001: Quality Control Lab
- [ ] HAI_PROCESS_001: Thermal Spray Process

### 3. Manual Testing Workflow

#### For Each Prompt:
1. **Copy the exact prompt** from `dalle-prompts-collection.md`
2. **Generate image** using DALL-E 3
3. **Save with specified filename** in designated directory
4. **Document results** in testing log
5. **Rate quality** (1-5 scale)
6. **Note any needed adjustments**

#### Example Testing Session:
```
Prompt ID: FANUC_001
Status: ✅ Generated
Quality: 4/5
Filename: fanuc_thermal_spray_001.png
Location: generated-images/robots/fanuc/
Notes: Good overall composition, robot color accurate, lighting excellent
Adjustments needed: None
```

## Quality Criteria

### Excellent (5/5)
- Perfect brand alignment (FANUC orange/white colors)
- Professional industrial photography quality
- Realistic lighting and shadows
- Sharp focus and high detail
- Suitable for website hero sections

### Good (4/5)
- Accurate brand elements
- Professional appearance
- Good lighting
- Minor detail issues
- Suitable for product pages

### Acceptable (3/5)
- Recognizable equipment/setting
- Adequate quality
- Some brand/technical inaccuracies
- Suitable for blog posts or secondary content

### Needs Revision (1-2/5)
- Poor quality or unrealistic appearance
- Incorrect colors or branding
- Unsuitable for professional use
- Requires prompt modification

## Testing Log Template

Create a testing log file for each session:

```markdown
# DALL-E Testing Log - [Date]

## Session Info
- Tester: [Name]
- Date: [Date]
- DALL-E Version: [Version]
- Total Prompts Tested: [Number]

## Results Summary
- Excellent (5/5): [Count]
- Good (4/5): [Count]  
- Acceptable (3/5): [Count]
- Needs Revision (1-2/5): [Count]

## Individual Results
[Use template above for each prompt]

## Overall Notes
[Session observations, patterns, recommendations]
```

## File Organization

### Naming Convention
- Use exact filenames from prompts collection
- Add version numbers for iterations: `_v2`, `_v3`, etc.
- Keep originals for comparison

### Directory Structure
```
dalle-testing-workspace/
├── dalle-prompts-collection.md
├── TESTING_INSTRUCTIONS.md
├── testing-logs/
│   ├── session_2024-01-15.md
│   └── session_2024-01-16.md
├── generated-images/
│   └── [organized by category]
├── rejected-images/
│   └── [images that didn't meet quality standards]
└── reference-images/
    └── [inspiration or comparison images]
```

## Prompt Optimization Tips

### If Images Need Improvement:
1. **Add more specific details**: "industrial-grade", "professional photography"
2. **Adjust lighting terms**: "bright industrial lighting", "professional studio lighting"
3. **Specify camera angles**: "wide angle", "close-up detail", "overhead view"
4. **Add quality modifiers**: "4K resolution", "high detail", "sharp focus"
5. **Include brand specifics**: "FANUC orange and white colors", "HAI branding"

### Common Issues & Solutions:
- **Unrealistic colors**: Add specific color descriptions
- **Poor composition**: Add photography style terms
- **Lacking detail**: Add "high resolution", "detailed", "sharp focus"
- **Wrong equipment**: Be more specific about equipment type and brand

## Integration with Website

### Image Specifications for Web Use:
- **Resolution**: Minimum 1920x1080 for hero images
- **Format**: PNG for graphics, JPG for photographs
- **File Size**: Optimize for web (<500KB for hero images)
- **Aspect Ratios**: 
  - Hero: 16:9 or 21:9
  - Product images: 4:3 or 1:1
  - Process images: 16:9

### Website Integration Checklist:
- [ ] Image meets quality standards (4/5 or higher)
- [ ] Proper resolution and format
- [ ] Optimized file size
- [ ] Alt text prepared
- [ ] Responsive variants considered
- [ ] Copyright/licensing verified

## Next Steps After Testing

1. **Compile best results** for immediate website use
2. **Identify patterns** in successful prompts
3. **Create refined prompt templates** based on learnings
4. **Plan additional prompt variations** for missing content
5. **Document optimization guidelines** for future sessions

## Contact & Support

For questions about testing procedures or technical issues:
- Review this guide first
- Check testing logs for similar issues
- Document new issues for future reference
- Update prompts collection based on learnings