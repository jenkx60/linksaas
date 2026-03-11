import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '../ui/sidebar'
import { Link2 } from 'lucide-react'
import LogoutButton from '../LogoutButton'

const AppSidebar = () => {
  return (
    <Sidebar collapsible='icon'>
        <SidebarHeader>
            <div className='flex gap-2 items-center shrink-0'>
                <Link2 className='w-8 h-8 md:w-9 md:h-9 bg-[#143DB8] rounded-full p-2 text-white' />
                <h1 className='text-lg md:text-xl font-bold text-[#0F172A] leading-7 tracking-[-0.5px]'>LinkSaaS</h1>
            </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
            <SidebarGroup />
            <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            <LogoutButton />
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar