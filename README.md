# Lead Clickz

Lead Clickz is a modern, animated marketing agency website built with Next.js, React, Tailwind CSS, and Framer Motion. The site features stunning animations, responsive design, and a focus on creating marketing ecosystems built to endure rather than executing isolated tactics.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with attention to detail
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Works seamlessly across all device sizes
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessibility Focused**: Proper semantic HTML and ARIA attributes
- **SEO Ready**: Proper meta tags and structured data
- **React Compiler Enabled**: Optimized performance with React Compiler

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Custom components with shadcn-inspired patterns
- **Icons**: [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- **Compiler**: React Compiler enabled for performance
- **Fonts**: [Geist](https://vercel.com/font) family from Next.js

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with navigation and footer
│   ├── page.tsx         # Home page with multiple sections
│   ├── globals.css      # Global styles and Tailwind configuration
│   └── test/            # Test components (development)
├── components/          # Reusable React components
│   ├── Layout/          # Navigation and Footer components
│   ├── HomePage/        # Homepage section components
│   ├── Framer-motion/   # Animation components
│   ├── ui/              # Base UI components
│   └── icons/           # Custom icon components
├── assets/              # Static assets (images, logos)
├── lib/                 # Utility functions
└── public/              # Public static assets
```

## 🏗️ Layout Architecture

The application follows a modern layout structure using Next.js App Router:

### Root Layout (`src/app/layout.tsx`)
- **Metadata Configuration**: Sets the page title to "Lead Clickz" and includes a description
- **Font Loading**: Imports and configures Geist and Geist Mono fonts with CSS variables
- **HTML Structure**: Creates the root HTML element with language attribute and custom classes
- **Body Styling**: Applies the loaded fonts as CSS variables and enables anti-aliasing
- **Component Composition**: Renders the Navigation component at the top, wraps children in a main element with top padding, and adds the Footer component
- **Styling Classes**: Applies custom classes like "scroll-smooth" and "neon-scrollbar" for enhanced UX
- **Children Handling**: Uses React.ReactNode to accept and render child components passed to the layout

### Layout Flow
1. **Root Level**: The layout.tsx serves as the root layout for the entire application
2. **Navigation**: Fixed header positioned at the top with z-index to stay above content
3. **Content Area**: Main element with pt-20 class to prevent content overlap with fixed navigation
4. **Footer**: Positioned at the bottom of the page after all content

### Navigation Component
- Fixed position at the top of the screen
- Animated logo with hover effects
- Desktop navigation with active state indicators and underlines
- Mobile hamburger menu with smooth transitions
- Contact CTA button with arrow animation

### Page Structure (`src/app/page.tsx`)
The homepage consists of multiple sections:
1. **Hero** - Main introduction section
2. **The Shift** - Highlighting business transformation
3. **Spark Signals** - Market signals and insights
4. **The System** - Explanation of the methodology
5. **Brand Evolution** - Brand development approach
6. **Human Intellect** - Human-centered solutions
7. **Market Focus** - Target market emphasis
8. **Outcomes** - Expected results and benefits
9. **Invitation** - Call to action section

### Footer Component
- Responsive design that adapts to mobile and desktop views
- Social media icons with hover animations
- Brand information and description
- Two-column link structure (Info and Explore sections)
- CTA section with detailed explanation
- Copyright and legal information
- "Back to top" button with animated thunder icon

### Styling Approach
- **Global Styles**: Defined in `src/app/globals.css` using Tailwind CSS
- **CSS Variables**: Font variables and theme colors defined in the :root selector
- **Dark Mode**: Full dark mode support with OKLCH color space
- **Custom Animations**: Keyframe animations for special effects
- **Scrollbar Styling**: Custom neon-themed scrollbar with gradient colors

## 🎨 Design Elements

- **Typography**: Geist and Geist Mono fonts from Next.js
- **Color Palette**: Modern color scheme with OKLCH color space
- **Animations**: Smooth entrance animations, hover effects, and interactive elements
- **Custom Scrollbar**: Neon-themed scrollbar with gradient colors
- **Glow Effects**: Subtle glow animations throughout the interface

## 📋 Prerequisites

- Node.js 18 or later
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/lead-clickz.git
   cd lead-clickz
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check for code issues

## 🧪 Testing

The project includes ESLint for code quality checks. Run the linter with:

```bash
npm run lint
```

## 📦 Dependencies

Key dependencies include:
- `next` - React framework (v16.0.10)
- `react`, `react-dom` - Core React libraries (v19.2.1)
- `framer-motion` - Animation library (v12.29.2)
- `tailwindcss` - Utility-first CSS framework
- `lucide-react` - Icon library (v0.562.0)
- `react-icons` - Additional icon library (v5.5.0)
- `@radix-ui/react-*` - Accessible UI components
- `@types/node`, `@types/react`, `@types/react-dom` - Type definitions

## 🚀 Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service. For Vercel deployment:

1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on pushes to main branch

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐞 Known Issues

- Mobile menu animation could be smoother
- Some animations might be too intense for users with motion sensitivity

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Geist](https://vercel.com/font) by Vercel
- Special thanks to the open-source community for the amazing tools used in this project