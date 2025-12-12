# Lorrinda Gray-Davis - Brand Style Guide

## Overview
Personal website for speaker, author, and patient advocate. Clean, modern design with emerald green accents on white/light backgrounds with navy header/footer.

---

## Colors

### Brand Colors
| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Primary (Emerald) | `#10b981` | `text-primary`, `bg-primary` | Buttons, links, accent highlights, subheadings |
| Secondary (Navy) | `#1B3A4B` | `text-secondary`, `bg-secondary` | Header background, footer background |
| Accent (Soft Gold) | `#D4A373` | `text-accent`, `bg-accent` | Decorative accents, special highlights |
| Body (Black) | `#000000` | `text-body` | Body text, paragraphs |

### Supporting Colors
| Name | Usage |
|------|-------|
| White `#ffffff` | Page backgrounds, button text on primary |
| Gray-50 `#f9fafb` | Light section backgrounds |
| Gray-600 `#4b5563` | Secondary text |
| Slate-300 `#cbd5e1` | Footer text, muted elements |

---

## Typography

### Fonts
```css
font-family: 'Playfair Display', serif;  /* Headlines */
font-family: 'Inter', sans-serif;        /* Body */
```

### Tailwind Config
```js
fontFamily: {
  serif: ['"Playfair Display"', 'serif'],
  sans: ['"Inter"', 'sans-serif'],
}
```

### Usage

**Headlines (H1-H3)**
```html
<h1 class="font-serif text-4xl lg:text-5xl font-bold">Headline</h1>
```

**Accent Word in Headlines**
```html
<span class="italic text-emerald-200">Connection</span>
```

**Body Text**
```html
<p class="text-gray-600 text-sm">Body content...</p>
```

---

## Buttons

### Primary Button
```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-emerald-50 transition-colors">
  Book Lorrinda
  <ArrowRight class="ml-2" size={18} />
</a>
```

### Outline Button
```html
<a class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
  About Lorrinda
</a>
```

---

## Tailwind Config

```js
// index.html - Tailwind CDN config
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#10b981',   // Emerald - buttons, links, subheadings
        secondary: '#1B3A4B', // Navy - header/footer background
        accent: '#D4A373',    // Soft Gold - accent highlights
        body: '#000000',      // Black - body text
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    }
  }
}
```

---

## Quick Reference

| Element | Classes |
|---------|---------|
| Primary button | `bg-white text-primary px-8 py-4 rounded-lg font-semibold` |
| Outline button | `border-2 border-white text-white px-8 py-4 rounded-lg font-semibold` |
| Hero headline | `font-serif text-4xl lg:text-5xl font-bold` |
| Accent word | `italic text-emerald-200` |
| Body text | `text-gray-600 text-sm` |
| Nav/Footer background | `bg-secondary` |
| Primary accent | `text-primary` or `bg-primary` |
