# Adarsh & Haseena Wedding Invitation

A beautiful, responsive wedding invitation website with a watercolor garden theme.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this project**
   ```bash
   git clone <your-repo-url>
   cd wedding-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:8080`

---

## 📝 How to Customize

### 1. Update Names & Date

Edit `index.html` and search for these sections:

**Couple Names** (appears in multiple places):
```html
<!-- Hero section -->
<h2 class="font-esthetic">Adarsh & Haseena</h2>

<!-- Welcome page -->
<h2 class="font-esthetic">Adarsh & Haseena</h2>
```

**Wedding Date**:
```html
<!-- In the body tag -->
<body data-confetti="false" data-time="2025-12-31 16:00:00">

<!-- Display date -->
<p>Saturday, December 31, 2025</p>
```

### 2. Update Event Times

In `index.html`, find "The Big Day" section:
```html
<h2 class="font-esthetic">Ceremony</h2>
<p>4:00 PM</p>

<h2 class="font-esthetic">Reception</h2>
<p>6:00 PM onwards</p>
```

### 3. Update Venue

Find the venue section:
```html
<a href="https://maps.google.com" target="_blank">View on Google Maps</a>
<small>Lakeside Gardens Estate, 1234 Garden View Drive, Lake Forest, CA 92630</small>
```

Replace with your actual Google Maps link and address.

### 4. Update Images

Images are located in `assets/images/`:

| File | Description |
|------|-------------|
| `couple.webp` | Main couple photo (hero & welcome screen) |
| `groom.jpg` | Groom's individual photo |
| `bride.jpg` | Bride's individual photo |
| `gallery-*.webp` | Gallery photos |
| `hamara_photo_1.jpg` | Background image |

**To replace images:**
1. Add your images to `assets/images/`
2. Use `.webp` format for best performance (or `.jpg`/`.png`)
3. Update the file references in `index.html` if using different names

### 5. Update Gallery Photos

Find the carousel sections in `index.html`:
```html
<img src="./assets/images/placeholder.webp" 
     data-src="./assets/images/gallery-1.webp" 
     alt="gallery">
```

Replace gallery image files or update the paths.

### 6. Add a Video (Optional)

The video section is commented out. To enable it:

1. Add your video to `assets/video/` folder
2. In `index.html`, find the commented video section and uncomment it:
```html
<!-- Uncomment below to add video -->
<video class="rounded-4" id="video-love-story" ...>
    <source src="./assets/video/your-video.mp4" type="video/mp4">
</video>
```

### 7. Update Love Story

Find the "Our Love Story" section in `index.html`:
```html
<h2 class="font-esthetic">How We Met</h2>
<p>Your story here...</p>

<h2 class="font-esthetic">Falling in Love</h2>
<p>Your story here...</p>
```

### 8. Update Google Calendar Link

Find the calendar button:
```html
<a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=..." 
   class="btn">Save Google Calendar</a>
```

Generate a new Google Calendar link with your event details.

---

## 🎨 Theme Customization

The theme is defined in `css/garden-theme.css`:

### Colors
```css
:root {
    --sage-deep: #6B8E6B;      /* Primary dark green */
    --sage-green: #8BA888;      /* Primary green */
    --sage-light: #B8CDB8;      /* Light green */
    --cream: #F8F6F1;           /* Background */
    --text-dark: #4A5548;       /* Text color */
}
```

### Fonts
The theme uses:
- **Great Vibes** - For elegant script headings
- **Cormorant Garamond** - For body text

To change fonts, update the Google Fonts import in `css/garden-theme.css`.

---

## 📁 Project Structure

```
wedding-website/
├── assets/
│   ├── images/          # All images
│   └── video/           # Video files (optional)
├── css/
│   ├── guest.css        # Main styles
│   └── garden-theme.css # Theme customization
├── js/
│   ├── app/             # Application logic
│   └── libs/            # Library utilities
├── dist/
│   └── guest.js         # Built JavaScript (auto-generated)
├── index.html           # Main HTML file
├── package.json         # Dependencies & scripts
└── README.md            # This file
```

---

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run build` | Build the JavaScript bundle |
| `npm run dev` | Start development server on port 8080 |

---

## 🌐 Deployment

### Option 1: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and folder
4. Your site will be live at `https://username.github.io/repo-name`

### Option 2: Netlify / Vercel
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.` (root)

### Option 3: Any Static Host
Simply upload all files to your web hosting. No server-side processing required.

---

## ⚙️ Configuration Options

In `index.html` body tag:
```html
<body 
  data-confetti="false"           <!-- Enable/disable confetti animation -->
  data-time="2025-12-31 16:00:00" <!-- Wedding date/time for countdown -->
>
```

---

## 🎵 Background Music (Optional)

To add background music:
1. Add your audio file to `assets/audio/`
2. Uncomment the audio attribute in the body tag:
```html
<body data-audio="./assets/audio/your-song.mp3" ...>
```

---

## 📱 Features

- ✅ Fully responsive (mobile & desktop)
- ✅ Countdown timer
- ✅ Photo gallery with carousel
- ✅ RSVP form
- ✅ Google Calendar integration
- ✅ Google Maps link
- ✅ Smooth scroll animations (AOS)
- ✅ Watercolor garden theme

---

## 💡 Tips

1. **Image Optimization**: Use [Squoosh](https://squoosh.app/) to convert images to WebP format
2. **Testing**: Always test on both mobile and desktop before sharing
3. **Sharing**: Share the link with `?to=Guest+Name` to personalize the invitation

---

## 📄 License

This template is based on [dewanakl/undangan](https://github.com/dewanakl/undangan).

---

Made with ❤️ for Adarsh & Haseena
