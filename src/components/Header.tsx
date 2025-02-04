import Image from "next/image"
import logoIcon from '@/assets/LogoSmall.svg'
import profileImage from '@/assets/Image.png'

export function Header() {
  return (
    <div className="flex flex-row justify-between p-5 h-20 bg-background border-b border-[#F5EAEA]">
      <div>
        <Image src={logoIcon} alt="" width={56} height={40}/>
      </div>
      <div className="flex gap-2">
        <button className="bg-[#F5EAEA] text-[#F24D0D] w-[139px] h-[40px] rounded-[10px]">Dashboard</button>
        <button>BUTAO</button>
      </div>
      <div className="flex gap-2">
        <button>BUTAO</button>
        <Image src={profileImage} alt="Profile Image" width={48} height={48}/>
      </div>
    </div>
  )
}