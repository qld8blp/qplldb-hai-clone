# Performance Monitoring Guide for HAI Project

## 🚀 Performance Tools Installed

### 1. **Bundle Analyzer**
Visualize your JavaScript bundle sizes to identify optimization opportunities.

**Usage:**
```bash
npm run build:analyze
```
This will open a visual representation of your bundle in the browser.

### 2. **Built-in Next.js Performance Metrics**

Add this to any page to monitor Core Web Vitals:

```tsx
// app/layout.tsx
export function reportWebVitals(metric: any) {
  console.log(metric)
  // Send to analytics service
}
```

### 3. **Chrome DevTools Integration**

1. Run `npm run dev`
2. Open Chrome DevTools
3. Go to Lighthouse tab
4. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### 4. **Performance Monitoring Commands**

```bash
# Check bundle size
npm run build

# Analyze bundle composition
npm run build:analyze

# Run performance tests
npm run test:performance

# Check for unused dependencies
npx depcheck
```

## 📊 Key Metrics to Monitor

1. **First Contentful Paint (FCP)** - Target: < 1.8s
2. **Largest Contentful Paint (LCP)** - Target: < 2.5s
3. **Time to Interactive (TTI)** - Target: < 3.8s
4. **Cumulative Layout Shift (CLS)** - Target: < 0.1
5. **First Input Delay (FID)** - Target: < 100ms

## 🔧 Performance Optimization Tips

### Images
- Always use Next.js `Image` component
- Specify width and height
- Use appropriate formats (WebP for photos)
- Implement lazy loading

### Code Splitting
- Use dynamic imports for heavy components
- Split routes automatically with Next.js
- Lazy load third-party libraries

### Caching
- Leverage Next.js static generation
- Use ISR for dynamic content
- Implement proper cache headers

### Bundle Size
- Remove unused dependencies
- Tree-shake imports
- Use production builds for testing

## 🎯 HAI-Specific Optimizations

1. **Product Images**: Convert to WebP format
2. **Font Loading**: Use `next/font` for optimal loading
3. **Third-party Scripts**: Load with `next/script`
4. **API Routes**: Implement caching strategies

## 📈 Monitoring Dashboard

Create a performance dashboard by adding:

```tsx
// components/PerformanceMonitor.tsx
'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      console.log({
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
      })
    }
  }, [])

  return null
}
```

## 🚦 Performance Checklist

- [ ] Images optimized with Next.js Image component
- [ ] Fonts loaded with next/font
- [ ] Bundle size under 200KB (gzipped)
- [ ] Lighthouse score > 90
- [ ] No layout shifts (CLS < 0.1)
- [ ] Fast initial load (LCP < 2.5s)
- [ ] Responsive to user input (FID < 100ms)

Run `npm run build:analyze` after any major changes to ensure bundle size stays optimal!