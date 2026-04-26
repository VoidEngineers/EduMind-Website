# EduMind - Predictive Analytics for Modern Learning

<img src="assets/Images/EduMind.png" alt="EduMind Logo" style="width: 5in; height: 5in; max-width: 100%; height: auto; display: block; margin: 0 auto;">

**Group: 25-26J-379**

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Website](#running-the-website)
- [Deployment](#deployment)
- [Sections Guide](#sections-guide)
- [Technologies Used](#technologies-used)
- [Development Guidelines](#development-guidelines)
- [Customization](#customization)
- [Contact & Support](#contact--support)

---

## Project Overview

**EduMind** is an advanced educational platform that transforms predictive modeling from a "black-box" source of uncertainty into a transparent, trustworthy decision-support system for educators.

### Research Focus

- **Explainable AI (XAI)** - Delivers dynamic interpretability through SHAP and LIME
- **Disengagement Tracking** - Processes academic and behavioral data to detect student disengagement
- **Dynamic Learning Style Adaptation** - Continuously adapts to diverse learner preferences
- **Self-Healing MLOps** - Integrates near-real-time monitoring to mitigate concept drift

### Main Objectives

1. **Forecast student dropout risks** using LMS behavioral data
2. **Decode algorithms** via SHAP and LIME for transparent insights
3. **Automatically predict personalized learning styles** dynamically
4. **Deploy continuous training** via a Self-Healing MLOps pipeline

---

## Key Features

### 1. **Real-Time Engagement Scoring**

Algorithms process LMS activity (logins, access duration) to generate measurable engagement metrics.

### 2. **Disengagement Prediction**

Supervised machine learning models analyze continuous behavior to identify early signs of dropout risks.

### 3. **Learning Style Extraction**

The system automatically infers student learning styles in real-time, bypassing outdated static surveys.

### 4. **Tailored Intervention**

Triggers personalized learning paths matching specific student preferences.

### 5. **Explainable Analytics (XAI)**

A dual-layer XAI engine decodes automated decisions through SHAP and LIME visualizations.

### 6. **Continuous Training (CT)**

A proactive, self-healing MLOps pipeline evaluates data drift and triggers retraining.

### 7. **Interactive Dashboard**

Educators review unified insights, actionable alerts, and interpretable visual metrics.

---

## Project Structure

```
EduMind-Website/
├── index.html                 # Main website file
├── README.md                  # This file
├── assets/
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── js/
│   │   └── script.js          # JavaScript functionality
│   ├── Images/
│   │   ├── EduMind.png        # Project logo
│   │   └── [team photos]      # Team member images
│   └── Documents/             # Project documentation files
├── .github/
│   └── workflows/
│       └── static.yml         # GitHub Pages deployment config
└── [Documents folder]         # Project reports and presentations
```

---

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning and version control)
- A text editor (VS Code, Sublime Text, etc.) - optional for modifications

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/EduMind-Website.git
cd EduMind-Website
```

### Step 2: Local Setup (No Installation Required)

Since this is a static website, no dependencies or build tools are needed. The website runs directly in your browser.

### Step 3: Verify File Structure

Ensure all assets are present:

```bash
# Check that all necessary files exist
ls -la assets/css/styles.css      # CSS file
ls -la assets/js/script.js        # JavaScript file
ls -la assets/Images/             # Images directory
ls -la index.html                  # Main HTML file
```

---

## Running the Website

### Option 1: Direct File Opening (Simple)

```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

### Option 2: Using Python Local Server (Recommended)

**Python 3.x:**

```bash
# Navigate to the project directory
cd EduMind-Website

# Start local server
python -m http.server 8000
```

**Python 2.x:**

```bash
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to:

```
http://localhost:8000
```

### Option 3: Using Node.js Live Server

```bash
# Install live-server globally (if not already installed)
npm install -g live-server

# Run from project directory
live-server
```

### Option 4: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The website will automatically open in your default browser

---

## Deployment

### GitHub Pages Automatic Deployment

The project is configured for automatic deployment to GitHub Pages. The workflow is defined in `.github/workflows/static.yml`.

#### How It Works:

1. Push changes to the `main` branch
2. GitHub Actions automatically triggers the deployment workflow
3. Website is deployed to GitHub Pages

#### Setup GitHub Pages:

1. Go to your GitHub repository settings
2. Scroll to "GitHub Pages" section
3. Set the deployment source to "GitHub Actions"
4. The workflow is already configured - no additional setup needed

#### Deploy Status:

- Check deployment status in the "Actions" tab of your GitHub repository
- Once successful, your site will be available at: `https://yourusername.github.io/EduMind-Website/`

---

## Sections Guide

### 1. **Home (Navigation)**

- **Location**: Top sticky navigation bar
- **Links**:
  - Home, Domain, Milestones, Documents, Presentations, About Us, Contact
- **Features**: Mobile responsive hamburger menu

### 2. **Hero Section**

- **ID**: `#home`
- **Content**:
  - Project tagline: "Explainable AI + Dynamic LMS Analytics"
  - Main value proposition
  - Call-to-action buttons (View Domain, See Documents)

### 3. **Domain Section**

- **ID**: `#domain`
- **Content**:
  - Literature Survey
  - Research Gap identification
  - Research Problem statement
  - Main Objectives
  - Sub Objectives
  - **Methodology Pipeline** (7 steps):
    1. Engagement Scoring
    2. Disengagement Prediction
    3. Learning Style Extraction
    4. Tailored Intervention
    5. Explainable Analytics (XAI)
    6. Continuous Training (CT)
    7. Interactive Dashboard

### 4. **Key Features Section**

- **ID**: `#diseases` (Feature cards)
- **Cards**:
  - Detect - Disengagement Detection
  - Trust - Explainable AI (XAI)
  - Adapt - Learning Style Detection
  - Sustain - Self-Healing MLOps

### 5. **Milestones Section**

- **ID**: `#milestones`
- **Features**:
  - Dropdown filter (Select milestone type)
  - Milestone cards with dates and descriptions:
    - Proposal
    - PP1 (Progress Presentation 1)
    - PP2 (Progress Presentation 2)
    - Final
    - Viva
  - Dynamic filtering based on selection

### 6. **Documents Section**

- **ID**: `#documents`
- **Content**: Links to project documentation files
- **File Location**: `assets/Documents/` folder

### 7. **Presentations Section**

- **ID**: `#presentations`
- **Content**: Links to presentation slides used in project assessments

### 8. **About Us Section**

- **ID**: `#about`
- **Content**: Team member profiles with photos and roles
- **Team Members**: Displayed as card grid

### 9. **Contact Section**

- **ID**: `#contact`
- **Features**:
  - Contact form with validation
  - Form fields: Name, Email, Message
  - Success/error notifications
  - Email endpoint integration

### 10. **Footer**

- **Content**: Copyright information and project group ID
- **Auto-updating**: Year automatically updates via JavaScript

---

## Technologies Used

### Frontend

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with:
  - CSS Variables (custom properties)
  - Flexbox and Grid layouts
  - Backdrop filters and animations
  - Responsive design principles
- **JavaScript (Vanilla)**:
  - DOM manipulation
  - Event listeners
  - Form validation
  - Dynamic filtering
  - Smooth scrolling and animations

### Styling Features

- **Color Scheme**:
  - Primary: Purple (`#7b3ff2`)
  - Secondary: Blue (`#1f67d6`)
  - Background: Light purple gradient
  - Text: Dark blue (`#10213d`)
- **Responsive Breakpoints**: Mobile-first design
- **Accessibility**:
  - ARIA labels
  - Semantic HTML
  - Keyboard navigation
  - Skip links

### Fonts

- **Font Family**: Poppins (weights: 400, 500, 600, 700, 800)
- **Source**: Google Fonts

### Deployment

- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Workflow**: Automated deployment on push to `main` branch

---

## Development Guidelines

### Adding New Content

#### 1. **Adding a New Section**

```html
<section class="section" id="your-section-id">
  <div class="container">
    <div class="section-heading">
      <p class="section-tag">Section Tag</p>
      <h2>Section Title</h2>
      <p>Section description</p>
    </div>
    <!-- Your content here -->
  </div>
</section>
```

#### 2. **Adding Navigation Links**

Update the `<nav>` element in the header:

```html
<nav class="site-nav" id="site-nav" aria-label="Primary navigation">
  <!-- Add new link -->
  <a href="#your-section-id">New Section</a>
</nav>
```

#### 3. **Adding a Card Component**

```html
<article class="info-card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</article>
```

### CSS Custom Properties

Modify colors and spacing in `assets/css/styles.css`:

```css
:root {
  --bg: #f2ebff; /* Background color */
  --accent: #7b3ff2; /* Primary accent */
  --accent-blue: #1f67d6; /* Blue accent */
  --text: #10213d; /* Text color */
  --radius: 24px; /* Border radius */
  --container: 1180px; /* Max container width */
}
```

### JavaScript Modifications

#### Mobile Menu Toggle

- **File**: `assets/js/script.js`
- **Triggers**: Mobile hamburger menu toggle
- **Class**: `is-open` on navigation

#### Milestone Filtering

- **Function**: Filters milestone cards based on dropdown selection
- **Data Attribute**: `data-milestone`

#### Contact Form Handling

- **Endpoint**: Set in form's `data-endpoint` attribute
- **Method**: POST to specified endpoint
- **Validation**: Built-in HTML5 form validation

#### Scroll Animations

- Automatically animates elements on scroll
- Respects `prefers-reduced-motion` for accessibility

---

## Customization

### Changing Colors

Edit `assets/css/styles.css`:

```css
:root {
  --accent: #YOUR_COLOR; /* Change primary color */
  --accent-blue: #YOUR_COLOR; /* Change secondary color */
  --bg: #YOUR_COLOR; /* Change background */
}
```

### Updating Team Members

1. Add new image to `assets/Images/`
2. Update the team grid in `index.html`:

```html
<article class="team-card">
  <img src="assets/Images/your-photo.jpg" alt="Member Name" />
  <p class="team-card-name">Member Name</p>
  <p class="team-card-role">Member Role</p>
</article>
```

### Updating Documents Links

Edit the `#documents` section:

```html
<article class="resource-card">
  <h3>Document Title</h3>
  <a href="assets/Documents/your-document.pdf" target="_blank">
    Download Document
  </a>
</article>
```

### Modifying Contact Form Endpoint

In `index.html`, update the form's data-endpoint:

```html
<form class="contact-form" id="contact-form" data-endpoint="YOUR_ENDPOINT_URL">
  <!-- form fields -->
</form>
```

---

## Troubleshooting

### Common Issues

#### Website not loading locally

- **Solution**: Use a local server (Python, Node.js, or Live Server) instead of opening the file directly
- **Reason**: CORS and JavaScript restrictions

#### Styles not applying

- **Check**:
  - Verify `assets/css/styles.css` path is correct
  - Clear browser cache (Ctrl+Shift+Delete)
  - Check for CSS errors in browser DevTools

#### Form not working

- **Check**:
  - Verify the endpoint URL in the form's `data-endpoint` attribute
  - Check browser console for errors
  - Ensure endpoint accepts POST requests

#### Images not displaying

- **Check**:
  - Verify image paths start with `assets/Images/`
  - Ensure image files exist in the directory
  - Check for typos in filename

#### Mobile menu not working

- **Check**:
  - Verify JavaScript is enabled in browser
  - Check browser console for errors
  - Ensure `.github/workflows/static.yml` is present

---

## Milestone Overview

| Milestone    | Status | Description                                              |
| ------------ | ------ | -------------------------------------------------------- |
| **Proposal** | -      | Initial project proposal and research gap identification |
| **PP1**      | -      | Progress Presentation 1 - Initial findings               |
| **PP2**      | -      | Progress Presentation 2 - Advanced development           |
| **Final**    | -      | Final project submission and results                     |
| **Viva**     | -      | Project defense and viva examination                     |

---

## Methodology Pipeline

The project follows a 7-step approach:

1. **Engagement Scoring** - Measure student activity
2. **Disengagement Prediction** - Identify at-risk students
3. **Learning Style Extraction** - Determine learning preferences
4. **Tailored Intervention** - Personalize learning paths
5. **Explainable Analytics (XAI)** - Make decisions transparent
6. **Continuous Training (CT)** - Adapt to data drift
7. **Interactive Dashboard** - Display insights

---

## Contact & Support

### Team Information

**Group ID**: 25-26J-379

### Contact Methods

- Use the **Contact Form** on the website
- Check the **About Us** section for team member details
- Review **Documents** section for detailed project information

### Getting Help

1. Check the **Documents** folder for comprehensive guides
2. Review **Presentations** for project overviews
3. Consult the **Domain** section for research details

---

## License & Attribution

This project is part of an academic research initiative. All rights are reserved by the EduMind Development Team (Group 25-26J-379).

### References

- **Website Framework**: Custom HTML5, CSS3, JavaScript
- **Fonts**: Google Fonts (Poppins)
- **Deployment**: GitHub Pages with GitHub Actions
- **Icons & Assets**: See `assets/` directory

---

## Checklist for Running the Website

- [ ] Clone the repository
- [ ] Navigate to project directory
- [ ] Start a local server (Python/Node.js/Live Server)
- [ ] Open browser to `http://localhost:8000`
- [ ] Test navigation menu
- [ ] Test milestone filtering
- [ ] Verify all images load correctly
- [ ] Test contact form
- [ ] Check responsive design on mobile

---

## Contributing & Version Control

### Git Workflow

```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes
# Stage changes
git add .

# Commit changes
git commit -m "Add description of changes"

# Push to repository
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### Deployment

- All changes pushed to `main` branch automatically deploy to GitHub Pages
- Check GitHub Actions tab for deployment status

---

## Notes for Team Members

1. **Asset Management**: Keep all assets organized in `assets/` folder
2. **Version Control**: Commit frequently with descriptive messages
3. **Testing**: Test locally before pushing changes
4. **Documentation**: Update README.md when adding new features
5. **Accessibility**: Ensure all content is accessible (ARIA labels, semantic HTML)

---

**Last Updated**: April 2026  
**Version**: 1.0  
**Status**: Active Development

---

For more information, visit the project website or check the documents section for detailed research papers and presentations.
