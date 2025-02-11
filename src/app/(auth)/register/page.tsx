'use client'

import Image from "next/image"
import uploadIcon from '@/assets/icon/image-upload.svg'

import viewIcon from '@/assets/icon/view.svg'
import viewOffIcon from '@/assets/icon/view-off.svg'

import ArrowRightIcon from "@/components/icons/arrowRightIcon"
import UserIcon from "@/components/icons/userIcon"
import CallIcon from "@/components/icons/callIcon"
import MailIcon from "@/components/icons/MailIcon"
import AccessIcon from "@/components/icons/accessIcon"
import { ChangeEvent, FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState<{ name: string; phone: string; email: string; password: string; passwordConfirmation: string;  avatarId?: string }>({name: "", phone: "", email: "", password: "", passwordConfirmation: ""})
  const [imageData, setImageData] = useState<File>()
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; password?: string; passwordConfirmation?: string;  avatarId?: string }>({})
  const [apiError, setApiError] = useState<string | null>("")
  const [apiImageError, setApiImageError] = useState<string | null>(null)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/
  const atLeastSix = /^.{6,}$/
  const brasilPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/

  function handleVisiblePasswordButtonClick() {
    setVisible((prev) => !prev)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.id !== 'avatarId') {
      console.log(e.target.id, e.target.value)
      setFormData({ ...formData, [e.target.id]: e.target.value })       
    }
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.id === 'avatarId') {
      if(e.target.files) {
        setImageData(e.target.files[0])
      }
    }
  }

  function validate() {
    const newErrors: typeof errors = {}

    if(!atLeastSix.test(formData.name))
        newErrors.name = "O nome deve ter ao menos 6 caracteres"
    
    if(!brasilPhoneRegex.test(formData.phone)) 
      newErrors.phone = "Formato inválido de telefone"
    
    if (!emailRegex.test(formData.email)) 
      newErrors.email = "Formato inválido de email"
    
    if (!atLeastSix.test(formData.password))
        newErrors.password = "A senha deve ter ao menos 6 caracteres"
    
    if (formData.password !== formData.passwordConfirmation)
        newErrors.passwordConfirmation = "Senhas diferentes"

    return newErrors
  }

  async function handleSubmit(e: FormEvent) {
    let idImage = null
    e.preventDefault()

    setApiError(null)
    setApiImageError(null)

    if(imageData) {
      console.log("entrou pq tem imagem")
      try {
        const newFormData = new FormData()
        newFormData.append("files", imageData)

        const response = await fetch("http://localhost:3333/attachments", {
          method: "POST",
          body: newFormData,
        })

        if (!response.ok) {
          throw new Error("Registro de imagem negada, revise as informações")
        }

        const data = await response.json()
        console.log("sucessoooo")
        console.log(data.attachments[0].id)
        idImage = data.attachments[0].id

      } catch (error: unknown) {
        console.log(error)
        setApiImageError(error instanceof Error ? error.message : "Erro no servidor")
      }
    }

    const response = validate()
    
    if (Object.keys(response).length > 0) {
      setErrors(response)
      return
    } 
      
    setErrors({})

    try {
      const newFormData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
        avatarId: idImage
      }

      const response = await fetch("http://localhost:3333/sellers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newFormData),
      })

      if (!response.ok) {
        throw new Error("Registro negado, revise as informações")
      }

      const data = await response.json()
      console.log(data)

      document.cookie = `market-place@avatarURL=${data.seller.avatar.url}; path=/; max-age=86400`
      document.cookie = `market-place@email=${data.seller.email}; path=/; max-age=86400`

      router.push("/login")

    } catch (error: unknown) {
      console.log(error)
      setApiError(error instanceof Error ? error.message : "Erro de servidor")
    }
  }

  function handleBackToLoginClick() {
    router.push("/login")
  }

  return (
    <div className="px-20 py-16 bg-white rounded-[32px] flex flex-col gap-12">
      <div>
        <h1 className="font-sans font-bold text-2xl/[120%] text-[#1D1D1D] ">Crie sua conta</h1>
        <p className="font-poppins font-normal text-sm/[120%] text-[#666666] mt-2">
          Informe os seus dados pessoais e de acesso
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <span className="font-sans font-bold text-lg text-[#1D1D1D]">Perfil</span>
        <div className="relative flex items-center justify-center bg-background h-[7.5rem] w-[7.5rem] rounded-xl my-5">
          <input onChange={handleFileChange} id="avatarId" type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          <Image src={uploadIcon} alt=""/>
        </div>
        
        <div className="group">
          <label className="group-focus-within:text-[#F24D0D] font-poppins font-medium text-xs/[120%] text-[#666666]" htmlFor="name">NOME</label>
          <div className="flex flex-row gap-1 border-b-[1px] px-[2px] py-[14px] border-inherit text-[#3D3D3D] font-poppins font-normal text-base/[120%]">
            <UserIcon color="#949494" width={22} height={22} />
            <input onChange={handleChange} className="caret-[#F24D0D] placeholder-[#949494] focus:outline-none" type="text" id="name" placeholder="Seu nome completo" />
          </div>
          <span className="font-poppins font-normal text-[12px] text-[#DC3545]">{errors.name}</span>
        </div>

        <div className="group">
          <label className="group-focus-within:text-[#F24D0D] font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="phone">TELEFONE</label>
          <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#3D3D3D] font-poppins font-normal text-base/[120%]">
            <div className="flex flex-row gap-1">
              <CallIcon color="#949494" width={22} height={22} />
              <input onChange={handleChange} className="caret-[#F24D0D] placeholder-[#949494] focus:outline-none" type="tel" id="phone" placeholder="(00) 00000-0000" />
            </div>
          </div>
          <span className="font-poppins font-normal text-[12px] text-[#DC3545]">{errors.phone}</span>
        </div>

        <span className="font-sans font-bold text-lg text-[#1D1D1D] mt-12">Acesso</span>

        <div className="group">
          <label className="group-focus-within:text-[#F24D0D] font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="email">E-MAIL</label>
          <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#3D3D3D] font-poppins font-normal text-base/[120%]">
            <div className="flex flex-row gap-1">
              <MailIcon color="#949494" width={22} height={22} />
              <input onChange={handleChange} className="caret-[#F24D0D] placeholder-[#949494] focus:outline-none" type="text" id="email" placeholder="Seu e-mail de acesso" />
            </div>
          </div>
          <span className="font-poppins font-normal text-[12px] text-[#DC3545]">{errors.email}</span>
        </div>

        <div className="group">
          <label className="group-focus-within:text-[#F24D0D] font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="password">SENHA</label>
          <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#3D3D3D] font-poppins font-normal text-base/[120%]">
            <div className="flex flex-row gap-1">
              <AccessIcon color="#949494" width={22} height={22} />
              <input onChange={handleChange} className="placeholder-[#949494] focus:outline-none" type={visible ? "text" : "password"} id="password" placeholder="Senha de acesso" />
            </div>
            <button type="button" onClick={handleVisiblePasswordButtonClick}>
              {visible ? <Image alt='' src={viewIcon} width={22} height={19} /> : <Image alt='' src={viewOffIcon} width={22} height={19} /> }
            </button>
          </div>
          <span className="font-poppins font-normal text-[12px] text-[#DC3545]">{errors.password}</span>
        </div>

        <div className="group">
          <label className="group-focus-within:text-[#F24D0D] font-poppins font-medium text-xs/[120%] text-[#666666] pt-5" htmlFor="passwordConfirmation">SENHA</label>
          <div className="flex flex-row justify-between border-b-[1px] px-[2px] py-[14px] border-inherit text-[#3D3D3D] font-poppins font-normal text-base/[120%]">
            <div className="flex flex-row gap-1">
            <AccessIcon color="#949494" width={22} height={22} />
            <input onChange={handleChange} className="placeholder-[#949494] focus:outline-none" type={visible ? "text" : "password"} id="passwordConfirmation" placeholder="Confirme a senha" />
            </div>
            <button type="button" onClick={handleVisiblePasswordButtonClick}>
              {visible ? <Image alt='' src={viewIcon} width={22} height={19} /> : <Image alt='' src={viewOffIcon} width={22} height={19} /> }
            </button>
          </div>
          <span className="font-poppins font-normal text-[12px] text-[#DC3545]">{errors.passwordConfirmation}</span>
        </div>

        <button className="hover:bg-[#C43C08] flex justify-between px-5 items-center mt-12 mb-12 bg-[#F24D0D] rounded-xl h-14 text-white font-poppins font-medium text-base" type="submit">
          Cadastrar
          <ArrowRightIcon color="white" />
        </button>
        <span className="font-poppins font-normal text-[12px] text-[#DC3545]">{apiError}</span>
        <span className="font-poppins font-normal text-[12px] text-[#DC3545]">{apiImageError}</span>
      </form>

      <div className="flex flex-col gap-5 mt-12">
        <p className="text-[#666666] font-poppins text-base font-normal">Já tem uma conta?</p>
        <button onClick={handleBackToLoginClick} className="group hover:text-[#C43C08] hover:border-[#C43C08] flex justify-between px-5 items-center border border-[#F24D0D] rounded-xl h-14 text-[#F24D0D] font-poppins font-medium text-base" >
          Acessar
          <ArrowRightIcon color='#F24D0D' />
        </button>
      </div>
    </div>
  )
}