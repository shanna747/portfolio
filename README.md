# Professional Portfolio Website

A modern, responsive portfolio website showcasing work experience, projects, and hobbies.

## Features

- 📱 Fully responsive design
- 🎨 Modern gradient UI with smooth animations
- 🚀 Fast loading and optimized performance
- 💼 Work experience timeline
- 🎯 Featured projects showcase
- 🎨 Hobbies and interests section
- 📧 Contact form
- 🎭 Interactive hover effects
- 📊 Skills categorization

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons

## Customization Guide

### 1. Personal Information

Edit `index.html` and replace the following:

- **Name**: Replace "Your Name" throughout the file
- **Job Title**: Update "Full Stack Developer & Technology Enthusiast"
- **Contact Info**: Update email, phone, and location in the contact section
- **Social Links**: Replace placeholder URLs with your actual profiles:
  - GitHub: `https://github.com/yourusername`
  - LinkedIn: `https://linkedin.com/in/yourusername`
  - Twitter: `https://twitter.com/yourusername`
  - Email: `your.email@example.com`

### 2. About Section

- Update the biography text in the `#about` section
- Customize the skills by editing the skill tags in each category
- Add or remove skill categories as needed

### 3. Work Experience

In the `#experience` section, update each timeline item:
- Date range
- Job title and company name
- Responsibilities and achievements
- Technologies used

### 4. Projects

For each project in the `#projects` section:
- Replace placeholder images with your project screenshots
- Update project titles and descriptions
- Add the correct technology tags
- Link to live demos and GitHub repositories

### 5. Hobbies

Customize the hobbies section by:
- Changing hobby titles and descriptions
- Using different Font Awesome icons
- Adding or removing hobby cards

### 6. Color Scheme

To change the color scheme, edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other colors ... */
}
```

### 7. Images

Replace the placeholder images:
- Add your project screenshots to an `images/` folder
- Update the image sources in `index.html`
- Consider adding a profile photo in the hero or about section

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Interactive functionality
└── README.md          # Documentation
```

## Setup and Deployment

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Make your customizations
4. Test responsiveness using browser dev tools

### Deployment Options

#### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

#### Netlify (Free)
1. Sign up at [Netlify](https://www.netlify.com)
2. Drag and drop your portfolio folder
3. Your site will be deployed instantly with a custom URL

#### Vercel (Free)
1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## Contact Form Integration

The contact form currently shows an alert. To make it functional:

### Option 1: EmailJS (Recommended for static sites)
1. Sign up at [EmailJS](https://www.emailjs.com)
2. Create an email service
3. Add the EmailJS SDK to your HTML
4. Uncomment and configure the EmailJS code in `script.js`

### Option 2: Formspree
1. Sign up at [Formspree](https://formspree.io)
2. Update the form action attribute with your Formspree endpoint

### Option 3: Custom Backend
Create your own backend API to handle form submissions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

- Optimize images (use WebP format, compress images)
- Consider using a CDN for Font Awesome
- Minify CSS and JavaScript for production
- Add lazy loading for images
- Enable caching on your hosting platform

## License

This project is open source and available for personal and commercial use.

## Credits

- Icons: [Font Awesome](https://fontawesome.com)
- Fonts: System fonts for optimal performance

## Support

If you need help customizing this portfolio or encounter any issues, feel free to reach out!

---

Made with ❤️ for developers by developers