import Image from "next/image"

import arrowDownIcon from '@/assets/icon/arrow-down-01.svg'
import imageUploadIcon from '@/assets/icon/image-upload.svg'

export default function NewProductPage() {
  
  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div>
            <h1 className="font-sans font-bold text-2xl text-[#1D1D1D]">Seus produtos</h1>

            <p className="font-poppins font-normal text-[14px] text-[#666666] mt-2">
              Acesse e gerencie a sua lista de produtos à venda
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="relative flex justify-center items-center h-[340px] w-[415px] bg-[#F5EAEA] rounded-[20px]">
            <div className="flex flex-col items-center gap-4 text">
              <Image src={imageUploadIcon} alt="" width={40} height={40} />
              <span className="font-poppins font-normal text-[14px] text-[#666666] text-center">Selione a imagem <br /> do produto</span>
            </div>
            <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file" />
          </div>
          
          <div className="flex flex-col gap-6 p-6 w-[591px] h-[466px] bg-white rounded-[20px]">
            <div className="flex justify-between items-center">
              <span className="font-sans font-bold text-[18px] text-[#666666]">Dados do produto</span>
            </div>
            <form className="">
              <div className="flex flex-col gap-5">
                <div className="flex justify-between gap-5">
                  <div className="flex flex-col w-[323px] h-[62px]">
                    <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="title">título</label>
                    <input className="font-poppins font-normal text-[16px] text-[#3D3D3D] py-3 focus:outline-none border-b border-[#ADADAD] placeholder-[#949494]" type="text" id="title" placeholder="Nome do produto" />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">valor</label>
                    <div className="flex gap-1 font-poppins font-normal py-3 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                      <span className="text-[#3D3D3D]">R$</span>
                      <input className="w-full focus:outline-none  placeholder-[#949494]" placeholder="0,00" type="text" id="price" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">descrição</label>
                  <div className="flex gap-1 font-poppins font-normal pt-3 pb-10 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                    <textarea className="resize-none w-full focus:outline-none  placeholder-[#949494]" placeholder="Escreva detalhes sobre o produto, tamanho, características" id="price" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-poppins font-medium text-[12px] text-[#666666] uppercase" htmlFor="price">categoria</label>
                  <div className="relative flex gap-1 font-poppins font-normal py-3 text-[16px] text-[#3D3D3D] border-b border-[#ADADAD]">
                    <select className="w-full focus:outline-none bg-white appearance-none text-[#949494]" id="price">
                      <option className="" value="furniture">Selecione</option>
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
                    Salvar e publicar
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