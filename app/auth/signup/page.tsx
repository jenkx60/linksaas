'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabaseClient'
import Link from 'next/link'
import { ArrowLeft, Link2, Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function SignupPage() {
  const supabase = createClient()
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorString, setErrorString] = useState('')

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorString('')

    // Basic form validation
    if (!firstName.trim() || !lastName.trim()) {
      setErrorString('First Name and Last Name are required.')
      return
    }
    if (!email || !email.includes('@')) {
      setErrorString('Please enter a valid email address.')
      return
    }
    if (!password || password.length < 6) {
      setErrorString('Password must be at least 6 characters long.')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
        },
      },
    })

    setLoading(false)

    if (error) {
      setErrorString(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <div className="bg-[#0A0A0B] text-slate-100 font-display min-h-screen overflow-hidden relative">
      {/* Animated background layers */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#143db8]/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00C2FF]/10 blur-[150px]"></div>
        <div className="absolute inset-0 auth-bg-pulse"></div>
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-6">
        {/* Top App Bar Representation for iOS */}
        <div className="absolute top-0 left-0 w-full flex items-center p-6 justify-between">
          <Link href="/" className="text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <ArrowLeft className='w-5 h-5' />
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <Link2 className='w-8 h-8 md:w-9 md:h-9 bg-[#143DB8] rounded-full p-2 text-white' />
          <span className="text-white text-sm font-semibold tracking-widest uppercase">LinkSaaS</span>
        </div>

        {/* Glassmorphism Container */}
        <div className="glass-card-auth w-full max-w-[600px] rounded-2xl p-6 md:p-8 flex flex-col shadow-2xl">
          {/* Brand Identity */}
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Create your account</h1>
            <p className="text-slate-400 text-sm">Join the high-end link management platform</p>
          </div>

          {errorString && (
            <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-medium text-center">
              {errorString}
            </div>
          )}

          {/* Sign up Form */}
          <form className="space-y-5" onSubmit={handleSignup}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">First Name</label>
                <input 
                  type="text"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg h-12 px-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#0df2f2]/50 focus:ring-1 focus:ring-[#0df2f2]/30 transition-all" 
                  placeholder="John" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">Last Name</label>
                <input 
                  type="text"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg h-12 px-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#0df2f2]/50 focus:ring-1 focus:ring-[#0df2f2]/30 transition-all" 
                  placeholder="Doe" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">mail</span>
                <input 
                  type="email"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg h-12 pl-11 pr-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#0df2f2]/50 focus:ring-1 focus:ring-[#0df2f2]/30 transition-all" 
                  placeholder="john@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">lock</span>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg h-12 pl-11 pr-4 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-[#0df2f2]/50 focus:ring-1 focus:ring-[#0df2f2]/30 transition-all" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={togglePasswordVisibility} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#0df2f2] transition-colors" type="button">
                  {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                </button>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button 
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-[#143DB8] text-white font-bold rounded-lg shadow-[0_0_20px_rgba(13,242,242,0.3)] hover:shadow-[0_0_30px_rgba(13,242,242,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Creating...' : 'Create Account'}
                <ArrowRight className='w-5 h-5' />
              </button>
            </div>
          </form>

                    {/* Social Login / Alternative */}
          <div className="mt-8">
            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-white/5"></div>
              <span className="shrink mx-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">Or continue with</span>
              <div className="grow border-t border-white/5"></div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-colors cursor-pointer" type="button" onClick={signInWithGoogle}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-label='Google company logo icon'>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-semibold">Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-colors cursor-pointer" type="button">
                <svg className='w-5 h-5' viewBox="0 0 512 512" aria-label='Apple company logo icon'>
                  <path d="M349.13,136.86c-40.32,0-57.36,19.24-85.44,19.24C234.9,156.1,212.94,137,178,137c-34.2,0-70.67,20.88-93.83,56.45-32.52,50.16-27,144.63,25.67,225.11,18.84,28.81,44,61.12,77,61.47h.6c28.68,0,37.2-18.78,76.67-19h.6c38.88,0,46.68,18.89,75.24,18.89h.6c33-.35,59.51-36.15,78.35-64.85,13.56-20.64,18.6-31,29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z"/>
                  <path d="M340.25,32c-24,1.63-52,16.91-68.4,36.86-14.88,18.08-27.12,44.9-22.32,70.91h1.92c25.56,0,51.72-15.39,67-35.11C333.17,85.89,344.33,59.29,340.25,32Z"/>
                </svg>
                <span className="text-sm font-semibold">Apple</span>
              </button>
            </div>
          </div>


          {/* Redirect Link */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Already have an account? 
              <Link className="text-[#0df2f2] font-bold hover:underline ml-1" href="/auth/login">Log in</Link>
            </p>
          </div>
        </div>

        {/* Footer Visual Placeholder */}
        <div className="mt-8 flex justify-center">
          <div className="w-full h-[200px] rounded-xl overflow-hidden glass-card-auth">
            <div className="w-full h-full bg-cover bg-center opacity-40 mix-blend-screen" data-alt="Abstract cyan geometric networking patterns glowing" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBM41lwMH0jNG-oK1uN-u3eylEwJw3WyxrsXBvHXo3AC-hJl-6LNBEXUqkuHxUw7jQMOY9A7XvN2YCcV3ohDYzUmmhdq1ulq_p5SDwci_zu6DQ2JHCwis40Rxe3FpW16UyxCAO4smLqaM5ZhvCZVzJe0xuMGOOrp5--xJ468Vg0Bgb-tztZcUrDo0o5Q2ccgMdpgZMs7JtPA6U0Uij4FhEpxvhpL6Whw97lLrlkhV0NWhkZmPKw21GowvlUX6xnlCw5eh2F32EegKg')" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}