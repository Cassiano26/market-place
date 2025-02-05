import Image from 'next/image'

import searchIcon from '@/assets/icon/search-01.svg'
import SaleTagIcon from '@/components/icons/saleTagIcon'
import arrowDownIcon from '@/assets/icon/arrow-down-01.svg'
import productPhoto from '@/assets/productPhoto.png'

export default function ProductsPage() {
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
          <form className="flex flex-col gap-6 p-6 bg-white w-[327px] h-[306px] rounded-[20px]">
            <p className="font-sans font-bold text-[18px] text-[#666666]">Filtrar</p>
            <div className='flex flex-col gap-[40px]'>
              <div>
                <div className="flex gap-2 py-4 pl-[2px] items-center border-b border-[#949494] text-[#949494]">
                  <Image src={searchIcon} alt='search icon' width={24} height={24} />
                  <input className='placeholder-[#949494] focus:outline-none font-poppins w-full font-normal text-[16px]' type="text" name="" id="search" placeholder='Pesquisar' />
                </div>
                <div className="flex gap-2 py-4 pl-[2px] items-center border-b border-[#949494] text-[#949494]">
                  <SaleTagIcon color='#949494'width={24} height={24} />
                  <div className='w-full relative flex items-center'>
                    <select className='bg-white focus:outline-none font-poppins w-full font-normal text-[16px] appearance-none' id="status" >
                      <option value="">Status</option>
                      <option value="cat">Cat</option>
                      <option value="hamster">Hamster</option>
                      <option value="parrot">Parrot</option>
                      <option value="spider">Spider</option>
                    </select>
                    <Image className='absolute right-2 pointer-events-none' src={arrowDownIcon} alt='' width={24} height={24} />
                  </div>
                </div>
              </div>
              <button className="bg-[#F24D0D] text-white h-[56px] w-full rounded-[10px] flex items-center justify-center gap-4 p-3 font-poppins font-medium text-[16px]">Aplicar filtro</button>
            </div>
          </form>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 p-1 bg-white w-[331px] h-[250px] rounded-[20px]">
              <div className='flex justify-center'>
                <Image src={productPhoto} alt='' width={323} height={144}/>
              </div>
              <div className='px-[12px] pt-[12px] pb-[16px]'>
                <div className='flex justify-between'>
                  <p className='font-poppins font-semibold text-[16px] text-[#3D3D3D]'>Sofá</p>
                  <p className='font-sans font-bold text-[18px] text-[#1D1D1D]'>
                    <span className='text-[10px] pr-1'>R$</span>
                    1.200,90</p>
                </div>
                <div>
                  <p className='font-poppins font-normal text-[14px] text-[#666666]'>
                    Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1 bg-white w-[331px] h-[250px] rounded-[20px]">
              <div className='flex justify-center'>
                <Image src={productPhoto} alt='' width={323} height={144}/>
              </div>
              <div className='px-[12px] pt-[12px] pb-[16px]'>
                <div className='flex justify-between'>
                  <p className='font-poppins font-semibold text-[16px] text-[#3D3D3D]'>Sofá</p>
                  <p className='font-sans font-bold text-[18px] text-[#1D1D1D]'>
                    <span className='text-[10px] pr-1'>R$</span>
                    1.200,90</p>
                </div>
                <div>
                  <p className='font-poppins font-normal text-[14px] text-[#666666]'>
                    Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1 bg-white w-[331px] h-[250px] rounded-[20px]">
              <div className='flex justify-center'>
                <Image src={productPhoto} alt='' width={323} height={144}/>
              </div>
              <div className='px-[12px] pt-[12px] pb-[16px]'>
                <div className='flex justify-between'>
                  <p className='font-poppins font-semibold text-[16px] text-[#3D3D3D]'>Sofá</p>
                  <p className='font-sans font-bold text-[18px] text-[#1D1D1D]'>
                    <span className='text-[10px] pr-1'>R$</span>
                    1.200,90</p>
                </div>
                <div>
                  <p className='font-poppins font-normal text-[14px] text-[#666666]'>
                    Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1 bg-white w-[331px] h-[250px] rounded-[20px]">
              <div className='flex justify-center'>
                <Image src={productPhoto} alt='' width={323} height={144}/>
              </div>
              <div className='px-[12px] pt-[12px] pb-[16px]'>
                <div className='flex justify-between'>
                  <p className='font-poppins font-semibold text-[16px] text-[#3D3D3D]'>Sofá</p>
                  <p className='font-sans font-bold text-[18px] text-[#1D1D1D]'>
                    <span className='text-[10px] pr-1'>R$</span>
                    1.200,90</p>
                </div>
                <div>
                  <p className='font-poppins font-normal text-[14px] text-[#666666]'>
                    Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1 bg-white w-[331px] h-[250px] rounded-[20px]">
              <div className='flex justify-center'>
                <Image src={productPhoto} alt='' width={323} height={144}/>
              </div>
              <div className='px-[12px] pt-[12px] pb-[16px]'>
                <div className='flex justify-between'>
                  <p className='font-poppins font-semibold text-[16px] text-[#3D3D3D]'>Sofá</p>
                  <p className='font-sans font-bold text-[18px] text-[#1D1D1D]'>
                    <span className='text-[10px] pr-1'>R$</span>
                    1.200,90</p>
                </div>
                <div>
                  <p className='font-poppins font-normal text-[14px] text-[#666666]'>
                    Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em...
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1 bg-white w-[331px] h-[250px] rounded-[20px]">
              <div className='flex justify-center'>
                <Image src={productPhoto} alt='' width={323} height={144}/>
              </div>
              <div className='px-[12px] pt-[12px] pb-[16px]'>
                <div className='flex justify-between'>
                  <p className='font-poppins font-semibold text-[16px] text-[#3D3D3D]'>Sofá</p>
                  <p className='font-sans font-bold text-[18px] text-[#1D1D1D]'>
                    <span className='text-[10px] pr-1'>R$</span>
                    1.200,90</p>
                </div>
                <div>
                  <p className='font-poppins font-normal text-[14px] text-[#666666]'>
                    Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}