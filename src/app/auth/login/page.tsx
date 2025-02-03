import Image from "next/image"
import mailIcon from '@/assets/icon/mail-02.svg'
import acessIcon from '@/assets/icon/access.svg'
import arrowRight from '@/assets/icon/arrow-right-02.svg'
import arrowRightRed from '@/assets/icon/arrow-right-02-red.svg'
import viewIcon from '@/assets/icon/view.svg'

export default function LoginPage() {
  return (
    <div className="px-20 py-16 bg-white rounded-[32px] flex flex-col gap-12">
      <div>
        <h1 className="font-sans font-bold text-2xl/[120%] text-[#1D1D1D] ">Acesse sua conta</h1>
        <p className="font-poppins font-normal text-sm/[120%] text-[#666666]">
          informe seu e-mail  e senha  para entrar
        </p>
      </div>
      <form className="flex flex-col">
        <label className="font-poppins font-medium text-xs/[120%] text-[#666666]" htmlFor="email">E-MAIL</label>
        <div className="flex flex-row gap-1 border-b-[1px] px-[2px] py-[14px] border-inherit text-[#949494] font-poppins font-normal text-base/[120%]">
          <Image className="" alt='' src={mailIcon} width={22} height={19} />
          <input className="placeholder-[#949494] focus:outline-none" type="email" name="" id="" placeholder="Seu e-mail cadastrado" />
        </div>
        <label className="font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="password">SENHA</label>
        <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#949494] font-poppins font-normal text-base/[120%]">
          <div className="flex flex-row gap-1">
            <Image className="" alt='' src={acessIcon} width={22} height={19} />
            <input className="placeholder-[#949494] focus:outline-none" type="password" name="" id="" placeholder="Sua senha de acesso" />
          </div>
          <Image alt='' src={viewIcon} width={22} height={19} />
        </div>
        <button className="flex justify-between px-5 items-center mt-12 mb-12 bg-[#F24D0D] rounded-xl h-14 text-white font-poppins font-medium text-base" type="submit">
          Acessar
          <Image className="" alt='' src={arrowRight} width={24} height={24} />
        </button>
      </form>
      <div className="flex flex-col gap-5 mt-12">
        <p className="text-[#666666] font-poppins text-base font-normal">Ainda não tem uma conta?</p>
        <button className="flex justify-between px-5 items-center border border-[#F24D0D] rounded-xl h-14 text-[#F24D0D] font-poppins font-medium text-base" type="submit">
          Cadastrar
          <Image className="" alt='' src={arrowRightRed} width={24} height={24} />
        </button>
      </div>

    </div>
  )
}