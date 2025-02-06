import Image from "next/image"

import arrowLeftIcon from '@/assets/icon/arrow-left-02.svg'
import tickIcon from '@/assets/icon/tick-02.svg'
import unavailableIcon from '@/assets/icon/unavailable.svg'
import arrowDownIcon from '@/assets/icon/arrow-down-01.svg'

import productImage from '@/assets/Image.png'

export default function ProductPage() {
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
          <Image className="h-[340px] w-[415px]" src={productImage} alt="product image" />
          <div className="flex flex-col gap-6 p-6 w-[591px] h-[466px] bg-white rounded-[20px]">
            <div className="flex justify-between items-center">
              <span className="font-sans font-bold text-[18px] text-[#666666]">Dados do produto</span>
              <span className="bg-[#009CF0] w-[77px] h-[20px] rounded-full px-2 py-1 font-poppins font-medium text-[10px] text-white uppercase">anunciado</span>
            </div>
            <form className="">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between gap-5">
                  <div className="flex flex-col w-[323px] h-[62px]">
                    <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="title">título</label>
                    <input className="font-poppins font-normal text-[16px] text-[#3D3D3D] py-3 focus:outline-none border-b border-[#ADADAD] placeholder-[#3D3D3D]" type="text" id="title" placeholder="Sofá" />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">valor</label>
                    <div className="flex gap-1 font-poppins font-normal py-3 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                      <span className="text-[#F24D0D]">R$</span>
                      <input className="w-full focus:outline-none  placeholder-[#3D3D3D]" placeholder="1200,90" type="text" id="price" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">descrição</label>
                  <div className="flex gap-1 font-poppins font-normal pt-3 pb-10 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                    <textarea className="w-full focus:outline-none  placeholder-[#3D3D3D]" placeholder="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado." id="price" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">categoria</label>
                  <div className="relative flex gap-1 font-poppins font-normal py-3 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                    <select className="w-full focus:outline-none bg-white appearance-none" id="price">
                      <option value="furniture">Móvel</option>
                      <option value="light">luzes</option>
                    </select>
                    <Image className='absolute right-2 pointer-events-none' src={arrowDownIcon} alt='' width={24} height={24} />
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <button className="flex justify-center px-5 items-center border border-[#F24D0D] rounded-xl h-12 w-[265px] text-[#F24D0D] font-poppins font-medium text-base" >
                    Cancelar
                  </button>
                  <button className="flex justify-center px-5 items-center w-[265px] bg-[#F24D0D] rounded-xl h-12 text-white font-poppins font-medium text-base">
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