# Product Requirements Document (PRD)
## Project: Ekko 2 Care  
**Version:** 1.0  
**Date:** October 30, 2025

---

## 1. Overview

**Product Name:** Ekko 2 Care  
**Platform:** Mobile Web Application  
**Current Stage:** Early Development  

**Summary:**  
Ekko 2 Care is a mobile web application designed to promote sustainable consumption and community exchange. The platform allows users to trade and share eco-friendly products within a local community, encouraging environmental awareness, waste reduction, and sustainable lifestyles.

---

## 2. Objectives

- Promote sustainable product exchange between users.  
- Build a local community focused on ecological responsibility.  
- Provide an intuitive, visually cohesive, and eco-oriented user experience.  
- Enable basic navigation and authentication as part of the MVP.  

---

## 3. Problem Statement

While sustainable consumption has gained popularity, few local platforms combine product trading and eco-friendly community engagement.  
Users need a digital space where they can trade items responsibly instead of buying new ones.  
Ekko 2 Care addresses this need by creating a simple, mobile-first platform that merges the convenience of digital trade with the values of sustainability and reuse.

---

## 4. Target Audience

- **Age group:** 20–30 years old  
- **Profile:** Eco-conscious users, interested in sustainability, recycling, and minimalist lifestyles.  
- **Behavior:** Prefer digital tools for buying/trading, value community and ethical consumption.

---

## 5. Scope

### 5.1 MVP Scope
The Minimum Viable Product will focus on navigation and basic user access:
- Login page and registration page must function.  
- All other screens should be navigable, even if static.  
- No backend authentication or transactional logic required yet.

### 5.2 Future Scope
Currently, no additional features beyond MVP are planned, though scalability will be maintained for potential expansion.

---

## 6. Product Features

| Feature | Description |
|----------|-------------|
| **Login & Registration** | Basic navigation between login and register pages. Forms will be static; Firebase integration planned for later. |
| **Home Page** | Displays sections for recently viewed posts, recommended items, and active chats. |
| **Search & Results** | Shows search bar and result cards with product image and summary. |
| **Product Details** | Displays product description, image carousel, and similar items. |
| **Chat Section** | Messaging UI layout between users, without real backend interaction. |
| **User Profile** | Displays user data (name, email, profile image) and their posted items. |
| **Navigation Bar** | Fixed bottom navigation with outline icons. |
| **Static Routing** | All major screens linked for navigation flow testing. |

---

## 7. Technical Requirements

| Category | Technology / Tool |
|-----------|------------------|
| **Frontend** | React |
| **Backend** | Next.js |
| **Database** | Firebase (External Service) |
| **Languages** | HTML, CSS, JavaScript |
| **Version Control** | Git |
| **Hosting** | TBD (Firebase or Vercel) |

### Architecture
- Clean and scalable architecture based on modular React components.  
- Code will be well-documented following standard JavaScript/React commenting practices.  
- Separation of concerns (UI, logic, data) to ensure maintainability.

---

## 8. UX/UI Guidelines

### Design Basis
Design follows the *Ekko 2 Care Style Guide* (as defined in design documents).

### Color Palette

| Role | Color | HEX | Description |
|------|--------|-----|-------------|
| Primary | Leaf Green | #3CB371 | Used for buttons and active icons. |
| Secondary | Dark Green | #2E8B57 | Used for headers, footers, navigation. |
| Accent | Lime Yellow | #C7EA46 | Highlights and secondary CTAs. |
| Background | Mint Green | #E7F1EF | Cards and background surfaces. |
| Text | Dark Gray | #2F2F2F | Main text color. |
| Secondary Text | Medium Gray | #6F6F6F | Descriptions and placeholders. |
| Error | Coral | #FF6B6B | Error or alert messages. |

### Typography
- **Primary Font:** Poppins  
  - *Poppins Bold* – Titles, CTAs  
  - *Poppins Regular* – Body text, forms  
  - *Poppins Italic* – Notes, explanatory text  

### Iconography & Components
- **Icon Source:** Flaticon  
- **Style:** Outline icons, monochromatic (dark green or white).  
- **Buttons:**
  - Primary: filled green (#386641), white text.  
  - Secondary: outlined, green border.  
  - Floating Action Button (FAB): circular, white “+” icon.  
- **Layout:**
  - 4–8px grid spacing.  
  - Fixed bottom navigation bar with icons.  
  - Cards with image, title, and location pin.  

---

## 9. Non-Functional Requirements

| Category | Requirement |
|-----------|-------------|
| **Performance** | Smooth navigation and fast load times for mobile devices. |
| **Scalability** | Clean, modular structure to support future expansion. |
| **Maintainability** | Fully commented and documented code. |
| **Security** | Basic data handling through Firebase (planned). |
| **Accessibility** | Mobile-first design with high color contrast and legible typography. |

---

## 10. Success Metrics

- Successful navigation across all main pages.  
- Correct visual implementation of the style guide.  
- Functional login and registration flows (Firebase integration).  
- Consistency in component usage and design responsiveness.

---

## 11. Project Management

| Role | Name | Responsibility |
|------|------|----------------|
| Developer | Austin Gabriel Blanco Aguirre | Full-stack development, UI implementation, project management. |

**Tools:** Git  
**MVP Delivery Target:** 2 weeks after October 30, 2025  

---

## 12. Risks & Mitigation

| Risk | Impact | Mitigation Strategy |
|------|---------|--------------------|
| Delay in design-to-code implementation | Medium | Use modular components and reusable styles. |
| Firebase integration issues | Low | Mock authentication initially, integrate gradually. |
| Limited testing due to single developer | Medium | Use step-by-step validation and version control checkpoints. |

---

## 13. Appendices

**Included References:**
- *Style Guide: Color Palette and Typography*  
- *Style Guide: Iconography and Components*  
- *Sketch and Wireframes Document*  

---

**End of Document**