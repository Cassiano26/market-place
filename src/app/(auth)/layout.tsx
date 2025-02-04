import Image from 'next/image';
import Logo from '@/assets/Logo.svg'
import BoxImage from '@/assets/Background.png'

export default function AuthLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className='bg-background max-w-screen flex justify-center'>
      <div className="grid grid-cols-[1.23fr,1fr] h-screen max-x-[500px]">
        <div className="bg-background">
          <div className='pt-10 pl-10'>
            <Image src={Logo} alt='' width={267.36} height={68.65}/>
          </div>
          <div className=''>
           <Image src={BoxImage} alt='' />
          </div>
        </div>
        <div className="bg-background p-6">
          {children}
        </div>
      </div>
    </div>
    
  );
}
