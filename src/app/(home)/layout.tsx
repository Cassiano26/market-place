import { Header } from "@/components/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className='bg-background h-screen w-screen flex justify-center'>
      <div className="w-[1366px]">
        <Header />
        {children}
      </div>
    </div>
  )
    
}
