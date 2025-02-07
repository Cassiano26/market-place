'use client'

import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"

import viewIcon from '@/assets/icon/view.svg'
import viewOffIcon from '@/assets/icon/view-off.svg'

import MailIcon from "@/components/icons/MailIcon"
import AccessIcon from "@/components/icons/accessIcon"
import ArrowRightIcon from "@/components/icons/arrowRightIcon"


export default function LoginPage() {
  const [visible, setVisible] = useState(false)

  const [formData, setFormData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/
  const passwordRegex = /^.{6,}$/

  function handleVisiblePasswordButtonClick() {
    setVisible((prev) => !prev)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  function validate() {
    const newErrors: typeof errors = {}

    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format"
    
    if (!passwordRegex.test(formData.password))
        newErrors.password = "Password must be at least 8 characters"

    return newErrors
};

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const response = validate()
    if (Object.keys(response).length > 0) {
      setErrors(response)
      return
    } 
      
    setErrors({})
    setApiError("")
    setSubmitted(false)

    try {
      const response = await fetch("http://localhost:3333/sellers/sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("As credenciais não são validas")
      }

      const data = await response.json()
      console.log("Login Success:", data)
      setSubmitted(true)
    } catch (error: unknown) {
        setApiError(error instanceof Error ? error.message : "An error occurred during login.")
    } finally {
        setLoading(false)
    }
  }

  return (
    <div className="px-20 py-16 bg-white rounded-[32px] flex flex-col gap-12">
      <div>
        <h1 className="font-sans font-bold text-2xl/[120%] text-[#1D1D1D] ">Acesse sua conta</h1>
        <p className="font-poppins font-normal text-sm/[120%] text-[#666666] mt-2">
          informe seu e-mail  e senha  para entrar
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="group">
          <label className="group-focus-within:text-[#F24D0D] font-poppins font-medium text-xs/[120%] text-[#666666]" htmlFor="email">E-MAIL</label>
          <div className="flex flex-row gap-1 border-b-[1px] px-[2px] py-[14px] border-inherit text-[#3D3D3D] font-poppins font-normal text-base/[120%]">
            <MailIcon color="949494" width={22} height={22}/>
            {/* <Image className="color-" alt='' src={mailIcon} width={22} height={19} /> */}
            <input onChange={handleChange} className="caret-[#F24D0D] placeholder-[#949494] focus:outline-none" type="email" name="email" id="email" placeholder="Seu e-mail cadastrado" />
          </div>
        </div>

        <div className="group">
          <label className="group-focus-within:text-[#F24D0D] font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="password">SENHA</label>
          <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#3D3D3D] font-poppins font-normal text-base/[120%]">
            <div className="flex flex-row gap-1">
              <AccessIcon color="949494" width={22} height={22} />
              <input onChange={handleChange} className="caret-[#F24D0D] placeholder-[#949494] focus:outline-none" type={visible ? "text" : "password"} name="email" id="password" placeholder="Sua senha de acesso" />
            </div>
            <button type="button" onClick={handleVisiblePasswordButtonClick}>
              {visible ? <Image alt='' src={viewIcon} width={22} height={19} /> : <Image alt='' src={viewOffIcon} width={22} height={19} /> }
            </button>
          </div>
        </div>

        <button className="hover:bg-[#C43C08] flex justify-between px-5 items-center mt-12 mb-12 bg-[#F24D0D] rounded-xl h-14 text-white font-poppins font-medium text-base" type="submit">
          Acessar
          <ArrowRightIcon color="white" />
        </button>
      </form>
      <div className="flex flex-col gap-5 mt-12">
        <p className="text-[#666666] font-poppins text-base font-normal">Ainda não tem uma conta?</p>
        <button className="group hover:text-[#C43C08] hover:border-[#C43C08] flex justify-between px-5 items-center border border-[#F24D0D] rounded-xl h-14 text-[#F24D0D] font-poppins font-medium text-base">
          Cadastrar
          <ArrowRightIcon color='#F24D0D' />
        </button>
      </div>
    </div>
  )
}