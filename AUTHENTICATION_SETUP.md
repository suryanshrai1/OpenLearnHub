# 🔐 Authentication Setup Guide

## Prerequisites
- Supabase project created with the name "OpenLearnHub"
- Project URL: `https://apifcnygiagqmqwscgdx.supabase.co`
- API Key: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwaWZjbnlnaWFncW1xd3NjZ2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5ODE3MzksImV4cCI6MjA3MTU1NzczOX0.78XBvnuTT9BHn9F_5XaOjQvzxFByb7RXEw2NdWcYFIU`

## 🗄️ Database Setup

### 1. Run the SQL Script
1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `database-setup.sql`
4. Click **Run** to execute the script

### 2. Verify Table Creation
- Go to **Table Editor** in your Supabase dashboard
- You should see a `profiles` table created
- The table should have RLS (Row Level Security) enabled

## 🔧 Configuration

### 1. Environment Variables (Optional)
Create a `.env` file in your project root:
```env
VITE_SUPABASE_URL=https://apifcnygiagqmqwscgdx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwaWZjbnlnaWFncW1xd3NjZ2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5ODE3MzksImV4cCI6MjA3MTU1NzczOX0.78XBvnuTT9BHn9F_5XaOjQvzxFByb7RXEw2NdWcYFIU
```

### 2. Update Supabase Config (if using env vars)
If you create the `.env` file, update `src/lib/supabase.js`:
```javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
```

## 🚀 Features

### Authentication Features
- ✅ User registration with email/password
- ✅ User login with email/password
- ✅ User profile management
- ✅ Secure password handling
- ✅ Email verification (Supabase handles this)
- ✅ Session management
- ✅ Protected routes (can be implemented)

### User Profile Data
- Full name
- Email address
- Class level (6-12)
- Avatar URL (placeholder for future)
- Created/Updated timestamps

## 🛡️ Security Features

### Row Level Security (RLS)
- Users can only access their own profile data
- Secure data isolation between users
- Automatic profile creation on signup

### Password Security
- Passwords are hashed by Supabase
- Minimum 6 character requirement
- Secure password confirmation

## 📱 User Interface

### Navigation
- **Sign In** button in navbar (when not logged in)
- **Profile** dropdown (when logged in)
- **Sign Out** functionality
- Mobile-responsive design

### Forms
- Toggle between Login and Signup
- Form validation
- Error handling
- Success messages
- Loading states

## 🔄 Workflow

### Sign Up Process
1. User fills out registration form
2. Data is validated client-side
3. Account is created in Supabase Auth
4. Profile is automatically created in `profiles` table
5. Verification email is sent (handled by Supabase)
6. User can sign in after email verification

### Sign In Process
1. User enters email/password
2. Credentials are verified with Supabase
3. Session is created and stored
4. User is redirected to home page
5. Navbar updates to show profile

## 🐛 Troubleshooting

### Common Issues

#### 1. "Invalid API Key" Error
- Verify your API key is correct
- Ensure the key is the `anon` key, not the `service_role` key

#### 2. "Table doesn't exist" Error
- Run the SQL script in Supabase SQL Editor
- Check that the `profiles` table was created

#### 3. Authentication not working
- Check browser console for errors
- Verify Supabase project is active
- Check if email verification is required

#### 4. RLS Policy Issues
- Ensure RLS is enabled on the `profiles` table
- Verify policies are created correctly
- Check user authentication status

## 🔮 Future Enhancements

### Planned Features
- Password reset functionality
- Email verification handling
- User profile editing
- Avatar upload
- Social login (Google, GitHub)
- Admin panel for user management
- Activity tracking
- Progress saving

### Implementation Notes
- All authentication is handled by Supabase
- Custom UI components for better UX
- Responsive design for all devices
- Secure data handling with RLS
- Easy to extend and customize

## 📞 Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your Supabase configuration
3. Ensure all SQL scripts have been executed
4. Check Supabase project status and logs 