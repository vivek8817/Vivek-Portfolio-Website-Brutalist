# Design Documentation

## Project Overview

This project is a minimalist portfolio website for Vivek Ahirwar. It presents a full stack developer profile through a clean editorial layout, oversized typography, project previews, compact navigation, and subtle motion.

The design direction is inspired by modern portfolio and studio websites: spacious, monochrome, typography-led, image-forward, and deliberately restrained.

## Design Goals

- Present Vivek as a modern full stack web developer.
- Keep the first impression bold and memorable through the large `Vivek` wordmark.
- Use a simple portfolio structure that lets projects and writing breathe.
- Make the site feel polished without relying on heavy decoration.
- Keep navigation lightweight and immediately accessible.
- Support responsive reading and browsing across desktop, tablet, and mobile.

## Visual Style

The site uses a minimal black, white, and gray visual system.

- Background: white
- Primary text: black
- Secondary text: gray
- Project tags: black background with white text
- Dividers: light gray borders
- Imagery: project screenshots inside clean rectangular frames

The design avoids gradients, decorative shapes, and complex UI framing. The visual weight comes from typography, spacing, and project imagery.

## Typography

The typography system is defined in `src/index.css` using Tailwind CSS theme tokens.

Primary font:

- `Inter`, sans-serif

Type scale:

- Logo: `5.75rem`
- Navigation: `1.125rem`
- Body: `1.25rem`
- Large body: `1.5rem`
- Title: `2rem`

Typography is used as the main design element. The homepage relies on large, confident text blocks with tight tracking and calm line height.

## Layout System

The layout uses a max-width container of `1440px` and a responsive column structure.

Primary desktop structure:

- Left column: 35%
- Main content column: 50%
- Right spacer column: 15%

On smaller screens, hidden spacer columns collapse and the main content becomes full width. Sections stack vertically where needed.

The main layout areas are:

- Header/navigation
- Hero text section
- Featured projects section
- About section
- Footer

## Header

The header contains:

- Large `Vivek` wordmark
- Navigation links
- Social links
- Resume link
- Location
- Live local time

The header establishes the site identity immediately. The wordmark is intentionally oversized to create a strong first viewport signal.

Navigation uses `FlipLink`, giving links a smooth vertical text transition on hover.

## Hero Section

The hero section introduces Vivek with a concise positioning statement:

- full stack web developer
- modern and scalable digital experiences
- frontend systems
- backend architecture
- AI-driven workflows

The paragraph uses black text for the strongest message and gray text for supporting context. This creates hierarchy without adding extra layout elements.

## Featured Projects

The projects section lists selected work from 2025 to 2026.

Current featured projects:

- CRM Dashboard
- macOS Style Portfolio
- Taskify
- MacOs Style Portfolio
- Trello Style DnD Manager

Each project card includes:

- Project title
- Year tag
- Category or stack tag
- Screenshot preview
- Hover shadow transition
- Hover image scale transition

Project imagery is stored in `src/assets`.

## About Section

The about section explains Vivek's product philosophy:

- enjoyable digital products
- modern frontend interfaces
- scalable backend systems
- AI-powered workflows
- simplicity
- performance
- scalability
- better user experiences

It also includes the tech stack list:

- React, JavaScript, TypeScript
- Tailwind CSS, Framer Motion
- Node.js, Express.js
- MongoDB, PostgreSQL
- OpenAI APIs & AI Workflows
- Git & GitHub

Note: Framer Motion is mentioned in the content, but it is not currently listed in `package.json`.

## Footer

The footer includes:

- Copyright
- Build stack
- Contact email
- Large `VivekAhirwar` closing wordmark

The footer mirrors the header's typography-led identity and gives the page a strong closing moment.

## Motion and Interaction

The project has two reusable animation components.

### Reveal

`src/components/animations/Reveal.jsx`

`Reveal` uses the browser `IntersectionObserver` API to animate content when it enters the viewport. Elements begin hidden with `opacity-0`, then receive the animation class once visible.

Default animation:

- Fade in
- Move upward from `24px`
- Duration: `0.8s`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`

### FlipLink

`src/components/animations/FlipLink.jsx`

`FlipLink` creates a vertical text flip effect on hover. The original text moves upward while a duplicate text layer slides into place.

Used for:

- Header navigation
- Social links
- Project CTA links
- Footer email link

## Responsive Behavior

The layout is responsive through Tailwind utility classes.

Mobile behavior:

- Main content becomes full width.
- Spacer columns are hidden.
- Header stacks vertically.
- Project metadata remains compact.
- About and footer sections stack.

Tablet and desktop behavior:

- Portfolio uses the three-column editorial grid.
- Main content is centered in the middle column.
- Left column holds section labels.
- Right column creates whitespace and balance.

## Assets

Project screenshots are imported into `src/App.jsx` from `src/assets`.

Assets used:

- `CRM_Dashboard.png`
- `CRM_Website.png`
- `Macos_Portolio.png`
- `Taskify.png`
- `Trello_Dnd.png`

Public assets:

- `public/lunare.png`
- `public/icons.svg`
- `public/favicon.svg`

## Implementation Stack

The site is built with:

- React 19
- Vite
- Tailwind CSS 4
- JavaScript
- ESLint

Important files:

- `src/App.jsx`: page content and project sections
- `src/components/layout/Layout.jsx`: shared header, main wrapper, and footer
- `src/components/animations/Reveal.jsx`: scroll reveal animation
- `src/components/animations/FlipLink.jsx`: animated hover links
- `src/index.css`: Tailwind import, design tokens, animations, global font
- `src/main.jsx`: React app entry point

## Design Notes

- The project is currently a single-page portfolio.
- Content is hardcoded in React components.
- Project cards are visual but do not currently link to individual project pages.
- The site has a strong desktop editorial layout and a simplified stacked mobile layout.
- `src/App.css` appears to contain leftover starter styles and is not central to the current portfolio design.

## Future Improvements

- Add links to each project card.
- Add project detail pages or modal previews.
- Fix text encoding issues in apostrophes, registered marks, and copyright marks.
- Remove unused starter CSS from `src/App.css` if it is not imported or needed.
- Make project data reusable by moving it into an array.
- Add accessibility labels for external links where useful.
- Confirm whether Framer Motion should be installed or removed from the displayed tech stack.
