// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">LinkSaaS</h1>

        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="text-sm font-medium hover:underline"
          >
            Login
          </Link>

          <Link
            href="/auth/signup"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          Shorten Links.
          <br />
          Track Performance.
          <br />
          Grow Smarter.
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Create powerful short links with built-in analytics.
          Track clicks, devices, referrers and performance in real time.
        </p>

        <Link
          href="/auth/signup"
          className="bg-black text-white px-8 py-3 rounded-xl text-lg font-medium shadow hover:scale-105 transition"
        >
          Create Free Account
        </Link>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-8">
          
          <div className="p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">
              Powerful Analytics
            </h3>
            <p className="text-gray-600">
              Track total clicks, unique visitors, device type, 
              country and referrers in one clean dashboard.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">
              Secure & Scalable
            </h3>
            <p className="text-gray-600">
              Built with Supabase and server-side rendering 
              for enterprise-level performance and security.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">
              Lightning Fast Redirects
            </h3>
            <p className="text-gray-600">
              Optimized routing ensures your links redirect 
              instantly while capturing analytics in the background.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-6">
          Ready to build smarter links?
        </h3>

        <Link
          href="/auth/signup"
          className="bg-black text-white px-8 py-3 rounded-xl text-lg font-medium shadow hover:scale-105 transition"
        >
          Start Free Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} LinkSaaS. All rights reserved.
      </footer>
    </main>
  )
}