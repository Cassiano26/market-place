import { Header } from "@/components/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className='size-full flex justify-center pb-6'>
      <div className="w-[1366px]">
        <Header />
        {children}
      </div>
    </div>
  )
    
}
