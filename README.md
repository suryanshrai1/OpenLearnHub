# 🎓 OpenLearnHub

Live Demo Link(Deployment Link)- https://openlearnhub-pi.vercel.app/  

A modern, interactive learning platform designed to empower students from Class 6 to 12 with comprehensive educational resources, interactive lessons, and progress tracking.

## ✨ Features

- **📚 Comprehensive Subjects**: Mathematics, Science, English, Social Studies, and more curated for each class level
- **🧩 Interactive Quizzes**: Test knowledge with quizzes after every lesson to solidify understanding
- **🎥 Video Lessons**: Watch expert teachers explain complex concepts in simple ways
- **🚀 Progress Tracking**: Monitor learning progress and achieve academic goals with ease
- **🔐 Secure Authentication**: User registration, login, and profile management with Supabase
- **📱 Responsive Design**: Modern UI built with React and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Authentication**: Supabase
- **Email Services**: EmailJS
- **Build Tool**: Vite
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/suryanshrai1/OpenLearnHub
   cd OpenLearnHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Run the SQL script from `database-setup.sql` in your Supabase SQL Editor
   - Copy your project URL and anon key

4. **Configure environment variables**
   Create a `.env` file in the project root:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
OpenLearnHub/
├── src/
│   ├── components/          # React components
│   │   ├── Auth.jsx        # Authentication forms
│   │   ├── Classes.jsx     # Class listing
│   │   ├── Hero.jsx        # Landing page hero section
│   │   ├── Features.jsx    # Feature highlights
│   │   ├── SubjectCard.jsx # Individual subject cards
│   │   ├── SubjectList.jsx # Subject listing
│   │   └── ...
│   ├── contexts/           # React contexts
│   │   └── AuthContext.jsx # Authentication state management
│   ├── lib/                # Utility libraries
│   │   └── supabase.js     # Supabase client configuration
│   └── App.jsx             # Main application component
├── public/                 # Static assets
├── database-setup.sql      # Database schema
└── package.json            # Dependencies and scripts
```

## 🔐 Authentication

The platform uses Supabase for secure user authentication with features including:

- User registration and login
- Email verification
- Password security
- Session management
- Protected routes
- User profile management

See `AUTHENTICATION_SETUP.md` for detailed setup instructions.

## 📚 Learning Features

### Class System
- Organized by grade levels (6-12)
- Subject-specific content
- Progressive learning paths

### Interactive Elements
- Video lessons with expert teachers
- Quizzes and assessments
- Progress tracking
- Resource downloads

## 🎨 UI/UX Features

- **Modern Design**: Clean, intuitive interface using Tailwind CSS
- **Responsive Layout**: Optimized for all device sizes
- **Gradient Backgrounds**: Beautiful visual appeal
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Semantic HTML and keyboard navigation

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in the `docs/` folder
- Review the setup guides for authentication and database

## 🔮 Roadmap

- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Offline content support
- [ ] Social learning features
- [ ] AI-powered recommendations
- [ ] Multi-language support

---

**Built by Suryamsh with ❤️ for the future of education**
