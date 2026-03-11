'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Eye, EyeOff, Link2, Lock, Mail } from 'lucide-react'

export default function LoginPage() {
  const supabase = createClient()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errorString, setErrorString] = useState('')

  // useEffect(() => {
  //   const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
  //     if (session) {
  //       router.replace('/dashboard')
  //     }
  //   })

  //   return () => {
  //     subscription.unsubscribe()
  //   }
  // }, [supabase, router])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorString('')
    
    // Basic form validation
    if (!email || !email.includes('@')) {
      setErrorString('Please enter a valid email address.')
      return
    }
    if (!password || password.length < 6) {
      setErrorString('Password must be at least 6 characters.')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
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
      options: {
        redirectTo: window.location.origin + '/auth/callback'
      }
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

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-6">
        {/* Top App Bar / Back Navigation */}
        <div className="absolute top-0 left-0 w-full flex items-center p-6 justify-between">
          <Link href="/" className="text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <ArrowLeft className='w-5 h-5' />
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <Link2 className='w-8 h-8 md:w-9 md:h-9 bg-[#143DB8] rounded-full p-2 text-white' />
          <span className="text-white text-sm font-semibold tracking-widest uppercase">LinkSaaS</span>
        </div>

        {/* Glassmorphism Card */}
        <div className="glass-card-auth w-full max-w-[400px] rounded-2xl p-8 flex flex-col shadow-2xl">
          {/* Brand Identity */}
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-white tracking-tight text-3xl font-bold leading-tight text-center">Welcome back</h1>
            <p className="text-slate-400 text-sm font-normal leading-relaxed mt-2 text-center">Enter your details to access your link dashboard</p>
          </div>

          {errorString && (
            <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-medium text-center">
              {errorString}
            </div>
          )}

          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider px-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-[#00C2FF]">
                  <Mail className='w-5 h-5' />
                </div>
                <input 
                  type="email"
                  className="auth-glow-input block w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/50 focus:border-[#00C2FF] transition-all duration-300" 
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Password</label>
                <Link href="#" className="text-[#00C2FF] text-[11px] font-bold hover:underline">FORGOT?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-[#00C2FF]">
                  <Lock className='h-5 w-5' />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  className="auth-glow-input block w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/50 focus:border-[#00C2FF] transition-all duration-300" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={togglePasswordVisibility} className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-white transition-colors cursor-pointer" type="button">
                  {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#143DB8] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#143db8]/30 hover:shadow-[#00C2FF]/40 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Signing in...' : 'Login'}
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

          {/* Bottom footer link */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm">
              Don't have an account? 
              <Link className="text-[#00C2FF] font-bold hover:underline ml-1" href="/auth/signup">Get Access</Link>
            </p>
          </div>
        </div>

        {/* System Footer (iOS style home indicator) */}
        <div className="mt-auto pt-8 pb-2">
          <div className="w-32 h-1.5 bg-white/20 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  )
}