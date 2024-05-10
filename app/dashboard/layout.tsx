"use client";

import Header from '@/components/Header'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();
    return (
        <div>
            <Header user={user} />
            {children}
        </div>
    )
}

export default DashboardLayout