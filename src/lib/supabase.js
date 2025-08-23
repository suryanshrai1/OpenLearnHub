import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://apifcnygiagqmqwscgdx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwaWZjbnlnaWFncW1xd3NjZ2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5ODE3MzksImV4cCI6MjA3MTU1NzczOX0.78XBvnuTT9BHn9F_5XaOjQvzxFByb7RXEw2NdWcYFIU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 