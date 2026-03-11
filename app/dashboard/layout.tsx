import AppSidebar from "@/components/dashboard/AppSidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Head from "next/head"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <SidebarProvider>
            <SidebarInset>
                <header>
                    <SidebarTrigger />
                </header>
            </SidebarInset>
        <AppSidebar />
        <main>
            {children}
        </main>
        </SidebarProvider>
    </div>
  )
}