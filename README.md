# ❤️ Romantic Love Website

A beautiful, emotionally rich love website featuring soft illustrations and smooth animations. Perfect for expressing your love in a unique and memorable way.
Personal interactive project exploring motion, storytelling and UI emotion.
## ✨ Features

- **Soft Hand-Drawn Illustrations**: Pastel-colored SVG illustrations with a romantic aesthetic
- **Smooth Animations**: Gentle fade-ins, parallax scrolling, and floating elements
- **Typewriter Effects**: Romantic text reveals for hero and letter sections
- **Interactive Elements**: Hover effects, scroll-triggered animations, and surprise unlock feature
- **Fully Responsive**: Beautiful on all devices from mobile to desktop
- **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript

## 🎨 Sections

1. **Hero Section** - Full-screen romantic introduction with couple illustration
2. **Our Story** - Illustrated timeline of your relationship milestones
3. **Love Letter** - Heartfelt message with typewriter animation
4. **Reasons I Love You** - Beautiful cards with illustrations
5. **Memories** - Polaroid-style photo frames (customizable)
6. **Promises** - Night sky with glowing promise cards
7. **Surprise** - Hidden message with heart burst animation

## 🚀 Quick Start

1. Open `index.html` in your browser
2. That's it! No build process or installation needed

## 🎯 Customization Guide

### Change Text Content

Edit the `CONFIG` object in `script.js`:

```javascript
const CONFIG = {
    heroText: "Your custom hero text here",
    letterText: `Your love letter content here...`,
    particleCount: 30,
    typewriterSpeed: 80,
    letterTypewriterSpeed: 30
};
```

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --rose-pink: #FFB6C1;
    --lavender: #E6B8E6;
    --peach: #FFDAB9;
    --cream: #FFF5EE;
    --soft-purple: #DDA0DD;
    --light-pink: #FFE4E1;
    --deep-rose: #FF69B4;
}
```

### Update Timeline Events

In `index.html`, find the `.timeline` section and edit:

```html
<div class="timeline-item" data-animate>
    <div class="timeline-content">
        <h3>Your Event Title</h3>
        <p>Your event description</p>
    </div>
</div>
```

### Change Reasons

Edit the `.reasons-grid` section in `index.html`:

```html
<div class="reason-card" data-animate>
    <h3>Your Reason Title</h3>
    <p>Your reason description</p>
</div>
```

### Add Real Photos

Replace the placeholder SVGs in the `.memories-grid` section with actual images:

```html
<div class="photo-placeholder">
    <img src="your-photo.jpg" alt="Memory description">
</div>
```

### Update Promises

Edit the `.promises-container` section:

```html
<div class="promise-card" data-animate>
    <p>Your promise text here</p>
</div>
```

### Change Surprise Message

Edit the `#surpriseMessage` section:

```html
<div class="message-content">
    <h3>Your surprise title</h3>
    <p>Your surprise message</p>
</div>
```

## 🎭 Animation Settings

Adjust animation speeds in `styles.css`:

```css
:root {
    --transition-smooth: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🎨 Design Philosophy

- **Mature & Elegant**: Not childish, designed for genuine romantic expression
- **Slow & Emotional**: Animations are gentle and meaningful
- **Soft Illustrations**: Hand-drawn style with pastel colors
- **Premium Feel**: High-quality design that feels special

## 💡 Tips

1. **Personalization is Key**: Replace all placeholder text with your own words
2. **Add Real Photos**: The memories section looks best with actual photos
3. **Test on Mobile**: Make sure to view on different devices
4. **Take Your Time**: The site is designed to be experienced slowly
5. **Share with Love**: Send the link or host it for your special someone

## 🌟 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📄 File Structure

```
love-website/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## ❤️ Made with Love

This website template is designed to help you express your feelings in a beautiful, memorable way. Customize it, make it yours, and share your love story.

---

**Note**: Remember to personalize all sections before sharing with your loved one!

