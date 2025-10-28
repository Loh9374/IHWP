Ayurvedic Prakriti Assessment Tool
📋 Project Overview

The Ayurvedic Prakriti Assessment Tool is an interactive web application designed to help users discover their unique Ayurvedic body constitution (Prakriti) based on the ancient wisdom of Ayurveda. This college project implements a comprehensive self-assessment following traditional Ayurvedic principles to identify an individual's dominant dosha (Vata, Pitta, or Kapha).
🎯 Project Objectives

    To create an interactive assessment based on Ayurvedic principles

    To help users identify their body constitution (Prakriti)

    To provide personalized health and wellness recommendations

    To demonstrate the application of traditional Indian health systems in a modern digital format

✨ Features
🧘‍♀️ Interactive Assessment

    Four Comprehensive Sections:

        Physical Traits Observation

        Mental & Emotional Traits

        Daily Habits & Preferences

        Environmental Reactions

    Progress Tracking with visual indicators

    User-friendly Interface with intuitive navigation

📊 Dosha Analysis

    Vata Dosha (Air & Space elements)

    Pitta Dosha (Fire & Water elements)

    Kapha Dosha (Earth & Water elements)

    Detailed analysis of dominant dosha characteristics

📄 Personalized Results

    Comprehensive dosha description

    Physical and mental trait analysis

    Customized balancing recommendations

    Downloadable report functionality

🎨 User Experience

    Responsive design for all devices

    Traditional Indian color scheme

    Smooth animations and transitions

    Accessible and intuitive interface

🛠️ Technology Stack

    Frontend: HTML5, CSS3, JavaScript (ES6+)

    Icons: Font Awesome 6.4.0

    Styling: Custom CSS with CSS Variables

    Responsive Design: Mobile-first approach

    No External Dependencies (except Font Awesome CDN)

📁 File Structure
text

ayurvedic-prakriti-assessment/
│
├── index.html          # Main HTML file
├── style.css           # All styling and responsive design
├── script.js           # Assessment logic and interactivity
└── README.md           # Project documentation (this file)

🚀 Installation & Setup
Prerequisites

    A modern web browser (Chrome, Firefox, Safari, Edge)

    Basic web server (optional, for local development)

Quick Start

    Download the project files:

        index.html

        style.css

        script.js

    Place all files in the same directory

    Open the application:

        Double-click index.html to open in your browser

        Or serve through a local web server

For Development
bash

# Clone or download the project files
# Navigate to the project directory
cd ayurvedic-prakriti-assessment

# Start a local server (optional)
python -m http.server 8000
# or
php -S localhost:8000
# or use Live Server extension in VS Code

📖 How to Use
1. Start Assessment

    Click "Start Assessment" on the homepage

    Navigate through four comprehensive sections

2. Complete the Questionnaire

    Section 1: Physical Traits (Skin type, Body build)

    Section 2: Mental & Emotional Traits (Mindset, Memory)

    Section 3: Daily Habits (Diet preferences, Sleep patterns)

    Section 4: Environmental Reactions (Weather preferences, Stress response)

3. View Results

    Receive your dominant dosha analysis

    Read detailed characteristics and traits

    Get personalized balancing recommendations

4. Download Report

    Generate a comprehensive assessment report

    Save for future reference

🎨 Design Philosophy
Color Scheme

    Saffron (#FF9933): Represents spirituality and purity

    White (#FFFFFF): Symbolizes peace and truth

    Green (#138808): Represents prosperity and life

    Dark Blue (#000066): Traditional Ayurvedic wisdom

Typography

    Clean, readable fonts (Segoe UI system font stack)

    Hierarchical text structure for better readability

    Responsive typography scaling

📱 Responsive Design

The application is fully responsive and optimized for:

    Desktop (1200px+)

    Tablet (768px - 1199px)

    Mobile (320px - 767px)

🔧 Customization
Adding New Questions

Edit the assessment sections in index.html:
html

<div class="option-card" data-dosha="vata">
    <div class="option-title">Your Question</div>
    <div class="option-description">Description</div>
</div>

Modifying Colors

Update CSS variables in style.css:
css

:root {
    --saffron: #YourColor;
    --green: #YourColor;
    /* Add more custom colors */
}

Extending Functionality

Add new features in script.js:
javascript

// Add new assessment logic
function customAssessment() {
    // Your custom code here
}

📊 Assessment Methodology

Based on traditional Ayurvedic principles:

    Physical Constitution (Sharir Prakriti)

    Mental Constitution (Manas Prakriti)

    Dosha Dominance Analysis

    Personalized Recommendations

🎓 Educational Value

This project demonstrates:

    Traditional Indian health system implementation

    Modern web development practices

    User experience design principles

    Interactive assessment creation

    Responsive web design techniques

🌟 Future Enhancements

    User accounts and history tracking

    Advanced dosha combination analysis

    Seasonal recommendations

    Diet and lifestyle planners

    Integration with Ayurvedic practitioners

    Multi-language support

    Offline functionality

🤝 Contributing

This is a college project, but suggestions are welcome:

    Fork the project

    Create a feature branch

    Commit your changes

    Open a Pull Request

📄 License

This project is created for educational purposes as part of a college assignment.
👥 Team

    Developed by: [Your Name]

    College: [Your College Name]

    Course: [Your Course Name]

    Subject: Indian Health, Wellness & Psychology

📞 Contact & Support

For questions or support regarding this project:

    Email: [Your Email]

    College: [College Department Contact]

🙏 Acknowledgments

    Traditional Ayurvedic texts and principles

    College faculty for guidance and support

    Online resources for Ayurvedic knowledge

    Open source web development community
