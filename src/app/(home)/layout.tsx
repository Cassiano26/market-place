'use client'

import { Header } from "@/components/Header"
import { useRouter } from "next/navigation"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const emailCookie = document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("auth"))
  ?.split("=")[1]

  if(!emailCookie) {
    router.push("/login")
  }

  return (
    <div className='size-full flex justify-center pb-6'>
      <div className="w-[1366px]">
        <Header />
        {children}
      </div>
    </div>
  )
    
}
