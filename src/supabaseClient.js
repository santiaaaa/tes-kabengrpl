import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qjinrckfhxpxwvaqwjwt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqaW5yY2tmaHhweHd2YXF3and0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA1MzI0OTUsImV4cCI6MTk3NjEwODQ5NX0.9gcyc38sZIOX0WYmZdejvMc31zgpgv2EIO0SVw2uHAU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)