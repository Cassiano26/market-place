import { Header } from "@/components/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className='bg-background h-screen'>
      <Header />
      {children}
    </div>
  )
}
