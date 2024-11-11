# 🌐 Technoberg – Enterprise IT voor MKB - Portfolio Website

Welcome to the **Technoberg – Enterprise IT voor MKB** portfolio website. This site showcases the expertise, projects, and client reviews of the Technoberg Development team, built to represent our skills and dedication to building the future with code.

---

## 🌟 Live Demo
[Visit the site here!](your-live-site-url-here)

---

## 🛠️ Technologies Used

This website was built using modern technologies to ensure a fast, scalable, and responsive experience for all users:

- **React.js**: JavaScript library for building dynamic user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: A fast build tool for modern web development.
- **React Router**: For client-side routing and seamless navigation.
- **React Slick**: A carousel slider for displaying projects in an interactive way.
- **FontAwesome**: Icon library for the visual design of services, skills, and more.
- **Contentful**: Headless CMS for managing project content dynamically without hardcoding, allowing easy updates to the Projects section.

---

## 🎨 Key Features

### 1. **Hero Section**
- A full-screen hero section with a captivating background image, dynamic cloud animation, and a call-to-action button (`Ontdek Meer`) that smoothly scrolls to the "About Us" section.
- Dark mode support with different background images for light and dark themes.

### 2. **About Us Section**
- Provides a detailed description of who we are and what we do, with smooth scrolling from the hero section.

### 3. **Services Section**
- Showcases the services offered in a grid layout, each card containing an icon, title, description, and a call-to-action button.

### 4. **Projects Carousel**
- A responsive carousel slider in the Projects section, dynamically displaying the team's best work by pulling data from **Contentful**. This allows the team to add and update project cards from Contentful without changing code.

### 5. **Client Reviews**
- An interactive reviews section where clients can see past reviews, complete with company logos, review details, and a smooth hover effect.

### 6. **Animated Banner**
- A rotating banner under the "About Us" section, resembling police tape but filled with rotating logos that continuously animate from right to left. The logos scroll smoothly, creating a seamless loop effect that keeps the viewer engaged.

### 7. **Dark Mode**
- A switch in the header toggles between light and dark mode, adjusting the entire website's look and feel.

### 8. **Mobile Responsiveness**
- Mobile-friendly navigation and layout, including a collapsible burger menu and adaptive sections that adjust to different screen sizes.

---

## 📱 Mobile-First Design

The website is designed with a **mobile-first approach**, ensuring that all sections fit seamlessly on smaller screens. The burger menu stays clickable, and important information is arranged efficiently.

---

## 📋 Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Technoberg-Development.git
    ```

2. **Navigate into the directory**:
    ```bash
    cd Technoberg-Development
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up Contentful**:
    - Create a Contentful account and set up a space for your project content.
    - Create a `project` content type in Contentful to hold information for each project.
    - Add required fields such as title, description, image(s), and any other relevant information.
    - Obtain your Contentful space ID and access token, and set them up in a `.env` file:
      ```bash
      VITE_CONTENTFUL_SPACE_ID=your_space_id
      VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
      ```

5. **Start the development server**:
    ```bash
    npm run dev
    ```

---

## 👨‍💻 Credits

This project was developed by [**Amir Crljenkovic**](https://www.amircrljenkovic.nl) as part of an internship at **Technoberg Development**. Special thanks to the team for their collaboration and insights!

---

## 📧 Contact

For any inquiries or suggestions, feel free to reach out:

- **Email**: amircrljenkovic@outlook.com
- **Website**: [https://www.amircrljenkovic.nl](https://www.amircrljenkovic.nl)

---

## 📜 Copyright & Usage

© 2024 Technoberg – Enterprise IT voor MKB. All rights reserved.

This project and its source code are proprietary and are not open source. Any use, reproduction, or distribution of this software is prohibited without explicit written permission from Technoberg Development. Unauthorized duplication, modification, or sharing of any part of this website or its content is strictly prohibited.

---
