import { createClient } from '@supabase/supabase-js'

// Supabase project credentials
const SUPABASE_URL = 'https://aiugghryteecnqgmuhzp.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_zNg1DKnCnemh1x6TOTzOdg_95FAhV1u'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
