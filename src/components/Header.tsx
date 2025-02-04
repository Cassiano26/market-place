import Image from "next/image"
import logoIcon from '@/assets/LogoSmall.svg'
import profileImage from '@/assets/Image.png'
import chartIcon from '@/assets/icon/chart-histogram.svg'
import packageIcon from '@/assets/icon/package.svg'
import plusIcon from '@/assets/icon/plus-sign.svg'

export function Header() {
  return (
    <div className="flex flex-row justify-between p-5 bg-background border-b border-[#F5EAEA]">
      <div>
        <Image src={logoIcon} alt="" width={56} height={40}/>
      </div>
      <div className="flex gap-2">
        <button className="bg-[#F5EAEA] text-[#F24D0D] h-[40px] rounded-[10px] flex items-center gap-2 p-3 font-poppins font-medium text-sm">
          <Image src={chartIcon} alt="" width={20} height={20} />
          Dashboard
        </button>
        <button className="text-[#666666] h-[40px] rounded-[10px] flex items-center gap-2 p-3 font-poppins font-normal text-sm">
          <Image src={packageIcon} alt="" width={20} height={20} />
          Produtos
        </button>
      </div>
      <div className="flex gap-2 items-center gap-4">
        <button className="bg-[#F24D0D] text-white h-[40px] rounded-[10px] flex items-center gap-4 p-3 font-poppins font-medium text-sm">
          <Image src={plusIcon} alt=""width={20} />
          Novo produto
        </button>
        <Image src={profileImage} alt="Profile Image" width={48} height={48}/>
      </div>
    </div>
  )
}