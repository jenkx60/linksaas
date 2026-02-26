import { createClient } from '@/lib/supabaseServer'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome {user.user_metadata.firstName}
      </h1>
    </div>
  )
}