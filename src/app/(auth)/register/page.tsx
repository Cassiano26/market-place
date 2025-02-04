import Image from "next/image"
import uploadIcon from '@/assets/icon/image-upload.svg'
import userIcon from '@/assets/icon/user.svg'
import callIcon from '@/assets/icon/call.svg'
import mailIcon from '@/assets/icon/mail-02.svg'

import acessIcon from '@/assets/icon/access.svg'
import arrowRight from '@/assets/icon/arrow-right-02.svg'
import arrowRightRed from '@/assets/icon/arrow-right-02-red.svg'
import viewIcon from '@/assets/icon/view.svg'

export default function registerPage() {
  return (
    <div className="px-20 py-16 bg-white rounded-[32px] flex flex-col gap-12">
      <div>
        <h1 className="font-sans font-bold text-2xl/[120%] text-[#1D1D1D] ">Crie sua conta</h1>
        <p className="font-poppins font-normal text-sm/[120%] text-[#666666] mt-2">
          Informe os seus dados pessoais e de acesso
        </p>
      </div>
      <form className="flex flex-col">
        <h2 className="font-sans font-bold text-lg text-[#1D1D1D]">Perfil</h2>
        
        <input id="profile-image" type="file" accept="image/*" className="hidden" />
        <label htmlFor="profile-image" className="flex items-center justify-center bg-background h-[7.5rem] w-[7.5rem] rounded-xl my-5">
          <Image src={uploadIcon} alt=""/>
        </label>
        
        <label className="font-poppins font-medium text-xs/[120%] text-[#666666]" htmlFor="name-profile">NOME</label>
        <div className="flex flex-row gap-1 border-b-[1px] px-[2px] py-[14px] border-inherit text-[#949494] font-poppins font-normal text-base/[120%]">
          <Image className="" alt='' src={userIcon} width={22} height={19} />
          <input className="placeholder-[#949494] focus:outline-none" type="email" id="name-profile" placeholder="Seu nome completo" />
        </div>

        <label className="font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="tel-profile">TELEFONE</label>
        <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#949494] font-poppins font-normal text-base/[120%]">
          <div className="flex flex-row gap-1">
            <Image className="" alt='' src={callIcon} width={22} height={19} />
            <input className="placeholder-[#949494] focus:outline-none" type="tel" name="" id="tel-profile" placeholder="(00) 00000-0000" />
          </div>
        </div>

        <h2 className="font-sans font-bold text-lg text-[#1D1D1D] mt-12">Acesso</h2>

        <label className="font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="email-profile">E-MAIL</label>
        <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#949494] font-poppins font-normal text-base/[120%]">
          <div className="flex flex-row gap-1">
            <Image className="" alt='' src={mailIcon} width={22} height={19} />
            <input className="placeholder-[#949494] focus:outline-none" type="email" id="email-profile" placeholder="Seu e-mail de acesso" />
          </div>
        </div>

        <label className="font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="password-profile">SENHA</label>
        <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#949494] font-poppins font-normal text-base/[120%]">
          <div className="flex flex-row gap-1">
            <Image className="" alt='' src={acessIcon} width={22} height={19} />
            <input className="placeholder-[#949494] focus:outline-none" type="password" id="password-profile" placeholder="Senha de acesso" />
          </div>
          <Image alt='' src={viewIcon} width={22} height={19} />
        </div>

        <label className="font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="confirm-password-profile">SENHA</label>
        <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#949494] font-poppins font-normal text-base/[120%]">
          <div className="flex flex-row gap-1">
            <Image className="" alt='' src={acessIcon} width={22} height={19} />
            <input className="placeholder-[#949494] focus:outline-none" type="password" id="confirm-password-profile" placeholder="Confirme a senha" />
          </div>
          <Image alt='' src={viewIcon} width={22} height={19} />
        </div>

        <button className="flex justify-between px-5 items-center mt-12 mb-12 bg-[#F24D0D] rounded-xl h-14 text-white font-poppins font-medium text-base" type="submit">
          Cadastrar
          <Image className="" alt='' src={arrowRight} width={24} height={24} />
        </button>
      </form>

      <div className="flex flex-col gap-5 mt-12">
        <p className="text-[#666666] font-poppins text-base font-normal">Já tem uma conta?</p>
        <button className="flex justify-between px-5 items-center border border-[#F24D0D] rounded-xl h-14 text-[#F24D0D] font-poppins font-medium text-base" >
          Acessar
          <Image className="" alt='' src={arrowRightRed} width={24} height={24} />
        </button>
      </div>
    </div>
  )
}