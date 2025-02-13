'use client'
import Image from "next/image"

import arrowLeftIcon from '@/assets/icon/arrow-left-02.svg'
import tickIcon from '@/assets/icon/tick-02.svg'
import unavailableIcon from '@/assets/icon/unavailable.svg'

import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

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

export default function ProductPage() {
  const [product, setProduct] = useState<productType | null>(null)
  const [categories, setCategories] = useState<[{id: string, title: string, slug: string}] | null>(null)

  const routerParams = useParams()
  const id = routerParams.product as string

  const router = useRouter()
  useEffect(() => {
    async function productsData() {
      const responseOne = await fetch(`http://localhost:3333/categories`, {
        credentials: "include",
        headers: {"Content-Type": "application/json",
        },
      })

      const dataOne = await responseOne.json()
      console.log(dataOne)
      setCategories(dataOne.categories)

      const response = await fetch(`http://localhost:3333/products/${id}`, {
        credentials: "include",
        headers: {"Content-Type": "application/json",
        },
      })

      const data = await response.json()
      console.log(data)
      setProduct(data.product)
    }

    productsData()
  }, [id])

  async function handleChangesSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const titleParam = e.currentTarget.title.value
    const priceParam = e.currentTarget.priceInCents.value
    const descriptionParam = e.currentTarget.description.value
    const categoryParam = e.currentTarget.category.value


    if (titleParam || priceParam || descriptionParam || categoryParam) {
      const newFormData = {title: '', priceInCents: 0, description: '', categoryId: '', attachmentsIds: [product?.attachments[0].id]}

      if (titleParam) {
        newFormData.title = titleParam
      } else {
        newFormData.title = product!.title
      }

      if (priceParam) {
        newFormData.priceInCents = priceParam
      } else {
        newFormData.priceInCents = product!.priceInCents
      }

      if (descriptionParam) {
        newFormData.description = descriptionParam
      } else {
        newFormData.description = product!.description
      }
      if (categoryParam) {
        newFormData.categoryId = categoryParam
      } else {
        newFormData.categoryId = product!.category.id
      }

      console.log(newFormData)
      console.log(JSON.stringify(newFormData))
    
      const response = await fetch(`http://localhost:3333/products/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newFormData),
      })

      const data = await response.json()
      console.log(data)
    }

  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { id, value } = event.target

    if (id === 'priceInCents') {
      setProduct((prev) => {
        if (!prev) return prev
        return {...prev, priceInCents: Number(value)}
      })
    } else {
      setProduct((prev) => {
        if (!prev) return prev
        return {...prev, [id]: value}
      })
    }
  }

  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <Image src={arrowLeftIcon} alt="arrow left icon" width={20} height={20} />
              <span className="font-poppins font-medium text-[14px] text-[#F24D0D]">Voltar</span>
            </div>
            <h1 className="font-sans font-bold text-2xl text-[#1D1D1D]">Seus produtos</h1>
            <p className="font-poppins font-normal text-[14px] text-[#666666] mt-2">
              Acesse e gerencie a sua lista de produtos à venda
            </p>
          </div>
          <div className="flex items-end justify-end">
            <div className="flex gap-4">
              <button className="flex gap-2 items-center font-poppins font-medium text-[14px] text-[#F24D0D]">
                <Image src={tickIcon} alt="" width={20} height={20} />
                Marcar como vendido
              </button>
              <button className="flex gap-2 mr-3 items-center font-poppins font-medium text-[14px] text-[#F24D0D]">
                <Image src={unavailableIcon} alt="" width={20} height={20} />
                Desativar anúncio
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          {product?.attachments[0].url && (
            <Image className="h-[340px] w-[415px] rounded-3xl" width={415} height={340} src={product.attachments[0].url} alt="product image" />
          )}
          <div className="flex flex-col gap-6 p-6 w-[591px] h-[466px] bg-white rounded-[20px]">
            <div className="flex justify-between items-center">
              <span className="font-sans font-bold text-[18px] text-[#666666]">Dados do produto</span>
              <span className="bg-[#009CF0] w-[77px] h-[20px] rounded-full px-2 py-1 font-poppins font-medium text-[10px] text-white uppercase">{product?.status}</span>
            </div>
            <form onSubmit={handleChangesSubmit} className="">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between gap-5">
                  <div className="flex flex-col w-[323px] h-[62px]">
                    <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="title">título</label>
                    <input className="font-poppins font-normal text-[16px] text-[#3D3D3D] py-3 focus:outline-none border-b border-[#ADADAD] placeholder-[#3D3D3D]" type="text" id="title" value={product?.title} onChange={handleChange} />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">valor</label>
                    <div className="flex gap-1 font-poppins font-normal py-3 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                      <span className="text-[#F24D0D]">R$</span>
                      <input onChange={handleChange} className="w-full focus:outline-none  placeholder-[#3D3D3D]" value={(product?.priceInCents && String(product.priceInCents))} type="text" id="priceInCents" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">descrição</label>
                  <div className="flex gap-1 font-poppins font-normal pt-3 pb-10 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                    <textarea onChange={handleChange} className="w-full focus:outline-none  placeholder-[#3D3D3D]" 
                    value={product?.description}
                    id="description" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">categoria</label>
                  <div className="relative flex gap-1 font-poppins font-normal py-3 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                    <select onChange={handleChange} value={product?.category.title} className="w-full focus:outline-none bg-white appearance-none" id="category">
                      {categories?.map(item => {

                        return(
                          <option key={item.id} value={item.id}>{item.title}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <button type="button" onClick={() => router.push("/products")} className="flex justify-center px-5 items-center border border-[#F24D0D] rounded-xl h-12 w-[265px] text-[#F24D0D] font-poppins font-medium text-base" >
                    Cancelar
                  </button>
                  <button type="submit" className="flex justify-center px-5 items-center w-[265px] bg-[#F24D0D] rounded-xl h-12 text-white font-poppins font-medium text-base">
                    Salvar e atualizar
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}