# Shivang Amin — ExpressJS Portfolio

This project is my personal portfolio website created for the course INFR3120 – Web and Scripting Programming - Assignment 2.  
The website is built using Express.js, EJS, Bootstrap, and Font Awesome, and is hosted live using Render.

---

## Overview

The website contains four different pages rendered using Express routes and EJS templates:

- Home Page: Introduction to who I am and what I do.  
- About Page: My background, education, and experience.  
- Projects Page: A showcase of selected projects with live links and GitHub repositories.  
- Contact Page: A working contact form handled through an Express POST route.

---

## Deployment

- Live Site:https://shivang-portfolio-ejs.onrender.com/
- Repository: https://github.com/shivangamin-art/shivangamin-art-Shivang-Portfolio-EJS

---

## File Structure

```
expressjs-portfolio/
│
├── app.js
├── bin/
│   └── www
├── package.json
│
├── routes/
│   └── index.js
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   └── contact.ejs
│
├── public/
│   ├── stylesheets/
│   │   └── style.css
│   ├── javascripts/
│   └── images/
│
└── README.md
```
---

## Features

- Express Routing: Each page (Home, About, Projects, Contact) is rendered using individual routes.  
- Reusable Templates: Common header and footer partials used across all pages for consistency.  
- Bootstrap Integration: Clean, mobile-first design using the Bootstrap grid system.  
- Font Awesome Icons: Used for navigation, buttons, and contact icons.  
- Working Contact Form: Accepts user input via POST and displays a confirmation message dynamically.  
- Responsive Design: Optimized for all screen sizes — mobile, tablet, and desktop.

---

## Color Scheme

The color palette follows a modern, minimal aesthetic consistent with my previous portfolio:

- Primary: `#7c5cff` (brand purple)  
- Accent: `#ff6aa9` (brand pink)  
- Background: `#0b1020` (dark)  
- Text (ink): `#e7e9ee` (light gray)  
- Muted text: `#b7bfd6`


---

## Testing and Validation

- Route Testing: Verified all Express routes render correctly.  
- Form Handling: Contact form tested with both valid and empty fields — feedback message displayed correctly.  
- Responsiveness: Manually tested on multiple devices (mobile, tablet, laptop).  
- Cross-Browser Check: Tested on Chrome, Edge, and Firefox — consistent rendering across all.

---

## Version Control

- Repository hosted publicly on GitHub with multiple commits showing development progress.  
- Project structured cleanly with separate folders for routes, views, and public assets.  
- Final version deployed on Render directly from the main GitHub branch.

---

## Citations

- Learned and experimented with code examples from W3Schools (Node.js Framework).  
- Some troubleshooting assistance and explanations of Express routing and EJS partials were provided by ChatGPT (OpenAI).  
- All other code, content, and styling were written by me.  
- Bootstrap and Font Awesome were used according to their official documentation.

---

## Author

Shivang Amin  
Student & Network Engineer  