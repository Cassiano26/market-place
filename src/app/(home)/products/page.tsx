'use client'
import Image from 'next/image'

import SaleTagIcon from '@/components/icons/saleTagIcon'
import SearchIcon from '@/components/icons/searchIcon'
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type productType = {
  id: string,
  title: string,
  description: string,
  priceInCents: number,
  status: string,
  owner: {
    id: string,
    name: string,
    phone: string,
    email: string,
    avatar: {
      id: string,
      url: string
    }
  },
  category: {
    id: string,
    title: string,
    slug: string
  },
  attachments: [
    {
      id: string,
      url: string
    }
  ]
}

export default function ProductsPage() {
  const [products, setProducts] = useState<[productType] | null>(null)

  const router = useRouter()

  useEffect(() => {
    async function productsData() {
      const response = await fetch("http://localhost:3333/products/me", {
        credentials: "include",
        headers: {"Content-Type": "application/json",
        },
      })

      const data = await response.json()

      setProducts(data.products)
    }

    productsData()
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const searchParam = e.currentTarget.search.value
    const statusParam = e.currentTarget.status.value

    const queryParams = new URLSearchParams()
    if (searchParam) queryParams.append("search", searchParam)
    if (statusParam) queryParams.append("status", statusParam)

    const response = await fetch(`http://localhost:3333/products/me?${queryParams.toString()}`, {
      credentials: "include",
      headers: {"Content-Type": "application/json",
      },
    })

    const data = await response.json()

    setProducts(data.products)
  }

  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="font-sans font-bold text-2xl text-[#1D1D1D]">Seus produtos</h1>
          <p className="font-poppins font-normal text-[14px] text-[#666666] mt-2">
            Acesse e gerencie a sua lista de produtos à venda
          </p>
        </div>
        <div className="flex gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-white w-[327px] h-[306px] rounded-[20px]">
            <p className="font-sans font-bold text-[18px] text-[#666666]">Filtrar</p>
            <div className='flex flex-col gap-[40px]'>
              <div>
                <div className="group flex gap-2 py-4 pl-[2px] items-center border-b border-[#949494] text-[#3D3D3D]">
                  <SearchIcon width={22} height={22} color='#949494'/>
                  <input className='caret-[#F24D0D] placeholder-[#949494] focus:outline-none font-poppins w-full font-normal text-[16px]' type="text" id="search" placeholder='Pesquisar' />
                </div>

                <div className="group flex gap-2 py-4 pl-[2px] items-center border-b border-[#949494]">
                  <SaleTagIcon color='#949494'width={22} height={22} />
                  <div className='w-full relative flex items-center'>
                    <select className='bg-white focus:outline-none text-[#3D3D3D] font-poppins w-full font-normal text-[16px] appearance-none' id="status" >
                      <option disabled selected hidden value="">Status</option>
                      <option className='text-[#666666]' value="available">Anunciado</option>
                      <option className='text-[#666666]' value="sold">Vendido</option>
                      <option className='text-[#666666]' value="cancelled">Cancelado</option>
                      <option className='text-[#666666]' value="">Nenhum</option>

                    </select>
                  </div>
                </div>

              </div>
              <button className="bg-[#F24D0D] text-white h-[56px] w-full rounded-[10px] flex items-center justify-center gap-4 p-3 font-poppins font-medium text-[16px]">Aplicar filtro</button>
            </div>
          </form>
          <div className="grid grid-cols-2 gap-4">
            {products && products.map(item => {
              return (
                <div 
                  onClick={() => {
                    router.push(`/products/${item.id}`)
                  }}
                  key={item.id} 
                  className="cursor-pointer flex flex-col gap-1 p-1 bg-white w-[331px] h-[250px] rounded-[20px]">
                  <div className='relative w-[323px] h-[144px] overflow-hidden rounded-[16px]'>
                    <Image fill src={item.attachments[0].url} alt='' />
                  </div>
                  <div className='px-[12px] pt-[12px] pb-[16px]'>
                    <div className='flex justify-between'>
                      <p className='font-poppins font-semibold text-[16px] text-[#3D3D3D]'>{item.title}</p>
                      <p className='font-sans font-bold text-[18px] text-[#1D1D1D]'>
                        <span className='text-[10px] pr-1'>R$</span>
                        {item.priceInCents / 100}  
                      </p>
                    </div>
                    <div>
                      <p className='font-poppins font-normal text-[14px] text-[#666666]'>
                        {item.description.length > 70 ? (`${(item.description).slice(0, 70)} ...`) : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </div>
  )
}