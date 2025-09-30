# Soaring Car Wash Website Clone

A pixel-perfect clone of soaringcarwash.com built with pure HTML, CSS, and JavaScript.

## Features

- **Homepage** - Hero section with call-to-action buttons
- **Locations Page** - Detailed information about Elmwood Park and Pompton Lakes locations
- **Free Wash Form** - Lead capture form for new customers
- **Careers Page** - Job listings with application modal
- **Menu Pages** - Service packages and pricing (Elmwood Park)

## Pages Structure

```
├── index.html              # Homepage
├── locations.html          # Locations listing
├── free-wash.html          # Free wash signup form
├── careers.html            # Job listings and applications
├── menu-elmwood-park.html  # Service menu and pricing
├── css/
│   ├── styles.css         # Main stylesheet
│   └── careers.css        # Careers page specific styles
├── js/
│   ├── main.js           # Main JavaScript functionality
│   ├── free-wash.js      # Free wash form handling
│   └── careers.js        # Careers page functionality
└── images/
    ├── soaring-logo.svg          # Main logo
    ├── soaring-logo-white.svg    # Footer logo
    ├── car-wash-hero.jpg         # Hero background image
    ├── elmwood-park-location.jpg # Elmwood Park location photo
    └── pompton-lakes-location.jpg # Pompton Lakes location photo
```

## Design Features

- **Pixel-Perfect Design** - Matches original soaringcarwash.com layout and colors
- **Responsive Layout** - Works on desktop, tablet, and mobile devices
- **Interactive Elements** - Hover effects, animations, and form validation
- **Professional Color Scheme** - Red (#E31C23) and Blue (#1E72B7) branding
- **Modern Typography** - Inter font family for clean readability

## Functionality

### Forms
- **Free Wash Signup** - Email capture with location selection
- **Job Applications** - Multi-step application process with validation
- **Real-time Validation** - Field validation and error handling

### Navigation
- **Multi-page Navigation** - Seamless page transitions
- **Mobile Menu** - Collapsible navigation for mobile devices
- **Call-to-Action Buttons** - Strategic placement throughout

### Interactive Features
- **Scroll Animations** - Reveal animations on scroll
- **Modal Windows** - Application forms and overlays
- **Toast Notifications** - Success and error messages
- **Loading States** - Form submission feedback

## How to Run

### Option 1: Simple HTTP Server (Python)
```bash
cd /app/frontend/public
python3 -m http.server 8080
```
Then visit: http://localhost:8080

### Option 2: Simple HTTP Server (Node.js)
```bash
cd /app/frontend/public
npx http-server -p 8080
```
Then visit: http://localhost:8080

### Option 3: Open directly in browser
Simply open `index.html` in your web browser directly from the file system.

## Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies
- **Modern CSS Features** - Grid, Flexbox, CSS Variables, Animations
- **ES6+ JavaScript** - Modern JavaScript features and best practices
- **SVG Graphics** - Scalable logo and icons
- **Optimized Images** - High-quality photos with proper compression

## Mock Data

All forms and interactions are currently using mock data and simulate API calls. The website includes:

- **Form Submissions** - Simulated success responses
- **Data Storage** - Local browser storage for demonstration
- **API Interactions** - Mock delays and responses

## Browser Compatibility

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers** - iOS Safari, Android Chrome
- **Features** - CSS Grid, Flexbox, ES6 JavaScript support required

## Customization

### Colors
Main brand colors are defined as CSS variables in `styles.css`:
- `--primary-red: #E31C23`
- `--primary-blue: #1E72B7`

### Content
All content can be easily updated by editing the HTML files. Text, images, and links are clearly organized and documented.

### Styling
Modular CSS architecture makes it easy to customize:
- `styles.css` - Main styles and components
- `careers.css` - Career page specific styles
- Inline styles for page-specific customizations

---

**Note**: This is a demonstration website clone. All business information, contact details, and service offerings are based on the original soaringcarwash.com website for educational purposes.