import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Brain, Calendar, Home, Inbox, Layers, Search, Settings, UserCircle, Wallet } from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { TrendingUp } from 'lucide-react'

const items = [
    {
        title: "Workspace",
        url: "#",
        icon: Layers,
    },
    {
        title: "AI Tools",
        url: "#",
        icon: Inbox,
    },
    {
        title: "My History",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Billing",
        url: "#",
        icon: Wallet,
    },
    {
        title: "Profile",
        url: "#",
        icon: UserCircle,
    },
]

export function AppSidebar() {
    const path = usePathname();
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-4 mt-4 border border-blue-500 rounded-xl py-3 pl-6 shadow-sm cursor-pointer">
                    <div className="w-16 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl text-gray-900 font-serif text-darkblue">AI Career Guide</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu className='mt-5'>
                            {items.map((item, index) => (
                                // <SidebarMenuItem key={item.title} className='p-2'>
                                //     <SidebarMenuButton asChild className=''>
                                <a href={item.url} key={index} className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg ${path.includes(item.url) && 'bg-gray-200ß'}`}>
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </a>
                                //     </SidebarMenuButton>
                                // </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <h2 className='p-2 text-gray-400 text-sm'>Copyright @Tubeguruji</h2>
            </SidebarFooter>
        </Sidebar>
    )
}