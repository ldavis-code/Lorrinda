# Lorrinda Gray-Davis - Brand Style Guide

## Overview
Personal website for speaker, author, and patient advocate. Clean, modern design with dark backgrounds and emerald green accents.

---

## Colors

### Primary (Emerald)
| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Primary 400 | `#34d399` | `text-primary-400` | Accent text on dark backgrounds (e.g., "Connection" in headlines) |
| Primary 500 | `#10b981` | `bg-primary-500` | Buttons, links, primary actions |
| Primary 600 | `#059669` | `hover:bg-primary-600` | Button hover states |
| Primary 700 | `#047857` | `bg-primary-700` | Accent section backgrounds (bio/press kit section) |

### Neutrals (Gray)
| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Gray 900 | `#111827` | `bg-gray-900` | Hero background, footer background, header |
| Gray 800 | `#1f2937` | `bg-gray-800` | Tags, borders, secondary dark elements |
| Gray 700 | `#374151` | `border-gray-700` | Borders on dark backgrounds |
| Gray 600 | `#4b5563` | `border-gray-600` | Outline button borders on dark |
| Gray 400 | `#9ca3af` | `text-gray-400` | Body text on dark backgrounds |
| Gray 200 | `#e5e7eb` | `text-gray-200` | Section headings in footer |
| White | `#ffffff` | `text-white` | Headlines on dark, button text |

---

## Typography

### Fonts
```css
font-family: 'Playfair Display', Georgia, serif;  /* Headlines */
font-family: 'Inter', system-ui, sans-serif;      /* Body */
```

### Tailwind Config
```js
fontFamily: {
  serif: ['Playfair Display', 'Georgia', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

### Usage

**Hero Headline**
```html
<h1 class="font-serif text-4xl md:text-5xl font-bold text-white">
  The Power of <span class="text-primary-400 italic">Connection</span>
</h1>
```

**Section Headline (on green background)**
```html
<h2 class="font-serif text-2xl font-bold text-white italic">Official Bio</h2>
```

**Footer Brand Name**
```html
<h3 class="font-serif text-2xl font-bold text-white">Lorrinda Gray-Davis</h3>
```

**Body Text (on dark)**
```html
<p class="text-gray-400 text-sm leading-relaxed">...</p>
```

**Footer Section Headings**
```html
<h4 class="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
```

---

## Buttons

### Primary Button
```html
<button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
  Book for Speaking
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
  </svg>
</button>
```

### Outline Button (on dark backgrounds)
```html
<button class="border-2 border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
  Read Biography
</button>
```

### White Button (on green backgrounds)
```html
<button class="bg-white hover:bg-gray-100 text-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors">
  Download Press Kit
</button>
```

---

## Components

### Featured Badge
```html
<span class="inline-flex items-center gap-2 border border-primary-500/50 text-primary-400 px-4 py-1.5 rounded text-sm">
  <span class="w-2 h-2 bg-primary-400 rounded-full"></span>
  Featured in Cancer Today, Summer 2025
</span>
```

### Location Tag (footer)
```html
<span class="inline-block bg-gray-800 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">
  Temple, Texas
</span>
```

### Footer Links
```html
<ul class="space-y-2 text-sm text-gray-400">
  <li><a href="/about" class="hover:text-primary-400 transition-colors">About Lorrinda</a></li>
  <li><a href="/speaking" class="hover:text-primary-400 transition-colors">Speaking Topics</a></li>
</ul>
```

### Email Link
```html
<a href="mailto:LGD@lorrindagraydavis.com" class="text-primary-400 hover:text-primary-300 font-medium text-sm">
  LGD@lorrindagraydavis.com
</a>
```

### Social Icons
```html
<div class="flex space-x-4">
  <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
    <Linkedin className="h-5 w-5" />
  </a>
  <!-- repeat for Twitter, Facebook, Mail -->
</div>
```

---

## Section Patterns

### Hero Section (Dark with image overlay)
```html
<section class="bg-gray-900 relative">
  <!-- Background image with overlay -->
  <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('...')"></div>
  <div class="absolute inset-0 bg-gray-900/80"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 py-24">
    <!-- Badge -->
    <span class="inline-flex items-center gap-2 border border-primary-500/50 text-primary-400 px-4 py-1.5 rounded text-sm mb-6">
      <span class="w-2 h-2 bg-primary-400 rounded-full"></span>
      Featured in Cancer Today, Summer 2025
    </span>

    <!-- Headline -->
    <h1 class="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
      The Power of <span class="text-primary-400 italic">Connection</span>
    </h1>

    <!-- Body -->
    <p class="text-gray-400 max-w-2xl mb-8">
      From overseeing billion-dollar construction diversity initiatives...
    </p>

    <!-- CTAs -->
    <div class="flex flex-wrap gap-4">
      <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold">
        Book for Speaking →
      </button>
      <button class="border-2 border-gray-600 text-white px-6 py-3 rounded-lg font-semibold">
        Read Biography
      </button>
    </div>
  </div>
</section>
```

### Green Accent Section (Bio/Press Kit)
```html
<section class="bg-primary-700 py-12">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="font-serif text-2xl font-bold text-white italic mb-4">Official Bio</h2>
    <p class="text-white/80 mb-6">
      Download Lorrinda's official biography and headshots for press and event marketing.
    </p>
    <button class="bg-white hover:bg-gray-100 text-primary-700 px-6 py-3 rounded-lg font-semibold w-full md:w-auto">
      Download Press Kit
    </button>
  </div>
</section>
```

### Footer
```html
<footer class="bg-gray-900 text-white">
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Brand -->
      <div>
        <h3 class="font-serif text-2xl font-bold mb-4">Lorrinda Gray-Davis</h3>
        <p class="text-gray-400 text-sm leading-relaxed">
          Empowering organizations through diversity, and inspiring patients through the power of connection.
        </p>
        <div class="flex space-x-4 mt-6">
          <!-- Social icons -->
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><a href="/about" class="hover:text-primary-400 transition-colors">About Lorrinda</a></li>
          <li><a href="/speaking" class="hover:text-primary-400 transition-colors">Speaking Topics</a></li>
          <li><a href="/awards" class="hover:text-primary-400 transition-colors">Awards & Recognition</a></li>
          <li><a href="/contact" class="hover:text-primary-400 transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-lg font-semibold mb-4 text-gray-200">Contact</h4>
        <p class="text-gray-400 text-sm mb-2">Available for keynotes, panels, and consulting.</p>
        <a href="mailto:LGD@lorrindagraydavis.com" class="text-primary-400 hover:text-primary-300 font-medium text-sm">
          LGD@lorrindagraydavis.com
        </a>
        <div class="mt-6">
          <span class="inline-block bg-gray-800 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">
            Temple, Texas
          </span>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
      <p>&copy; {new Date().getFullYear()} Lorrinda Gray-Davis. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

---

## Quick Reference

| Element | Classes |
|---------|---------|
| Primary button | `bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold` |
| Outline button (dark bg) | `border-2 border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-semibold` |
| Button on green | `bg-white hover:bg-gray-100 text-primary-700 px-6 py-3 rounded-lg font-semibold` |
| Hero headline | `font-serif text-4xl md:text-5xl font-bold text-white` |
| Accent word | `text-primary-400 italic` |
| Section headline (green) | `font-serif text-2xl font-bold text-white italic` |
| Body text (dark bg) | `text-gray-400 text-sm leading-relaxed` |
| Footer link | `text-gray-400 hover:text-primary-400 transition-colors` |
| Email link | `text-primary-400 hover:text-primary-300 font-medium` |
| Dark background | `bg-gray-900` |
| Green background | `bg-primary-700` |
