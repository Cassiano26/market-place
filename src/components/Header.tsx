'use client'

import Image from "next/image"
import logoIcon from '@/assets/LogoSmall.svg'
import profileImage from '@/assets/ImageProfile.png'
import plusIcon from '@/assets/icon/plus-sign.svg'
import ChartIcon from "./icons/chartIcon"
import PackageIcon from "./icons/packageIcon"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const [dashSelected, setDashSelected] = useState(true)
  const router = useRouter()
  const pathName = usePathname()

  useEffect(() => {
    if (pathName === "/") {
      setDashSelected(true)
    } else {
      setDashSelected(false)
    }

  }, [pathName])

  function handleDashboardButton() {
    setDashSelected(true)
    router.push("/")
  }

  function handleProductsButton() {
    setDashSelected(false)
    router.push("/products")
  }

  return (
    <div className="flex flex-row justify-between p-5 bg-background border-b border-[#F5EAEA]">
      <div>
        <Image src={logoIcon} alt="" width={56} height={40}/>
      </div>
      <div className="flex gap-2">

        <button onClick={handleDashboardButton} 
          className={dashSelected ? 
            "group hover:text-[#F24D0D] bg-[#F5EAEA] text-[#F24D0D] h-[40px] rounded-[10px] flex items-center gap-2 p-3 font-poppins font-medium text-sm" : 
            "group hover:text-[#F24D0D] h-[40px] rounded-[10px] flex items-center gap-2 p-3  text-[#666666] font-poppins font-normal text-sm"
          }
        >
          <ChartIcon width={20} height={20} color={dashSelected ? "#F24D0D" : "#666666"} />
          Dashboard
        </button>

        <button onClick={handleProductsButton} 
          className={
            !dashSelected ? 
              "group hover:text-[#F24D0D] bg-[#F5EAEA] text-[#F24D0D] h-[40px] rounded-[10px] flex items-center gap-2 p-3 font-poppins font-medium text-sm" : 
              "group hover:text-[#F24D0D] h-[40px] rounded-[10px] flex items-center gap-2 p-3  text-[#666666] font-poppins font-normal text-sm"
          }>
          <PackageIcon width={20} height={20} color={!dashSelected ? "#F24D0D" : "#666666"} />
          Produtos
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => router.push("/products/new_product")} className="bg-[#F24D0D] text-white h-[40px] rounded-[10px] flex items-center gap-4 p-3 font-poppins font-medium text-sm hover:bg-[#C43C08]">
          <Image src={plusIcon} alt=""width={20} />
          Novo produto
        </button>
        <Image src={profileImage} alt="Profile Image" width={48} height={48}/>
      </div>
    </div>
  )
}