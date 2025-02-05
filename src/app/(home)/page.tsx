'use client'
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts'

import saleTagIcon from '@/assets/icon/sale-tag-02.svg'
import storeIcon from '@/assets/icon/store-04.svg'
import multipleUserIcon from '@/assets/icon/user-multiple.svg'
import calendarIcon from '@/assets/icon/calendar-04.svg'
import CustomTooltip from "@/components/CustomTooltip"

const data = [
  {
    name: '26',
    uv: 40,
  },
  {
    name: '27',
    uv: 30,
  },
  {
    name: '28',
    uv: 20,
  },
  {
    name: '29',
    uv: 150,
  },
  {
    name: '30',
    uv: 119,
  },
  {
    name: '31',
    uv: 23,
  },
  {
    name: '01',
    uv: 150,
  },
]

export default function DashboardPage() {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="font-sans font-bold text-2xl text-[#1D1D1D]">Últimos 30 dias</h1>
          <p className="font-poppins font-normal text-[14px] text-[#666666] mt-2">Confira as estatísticas da sua loja no último mês</p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-[15px]">
            <div className="flex gap-4 py-3 pl-3 items-center bg-white w-[239px] h-[110px] rounded-[20px]">
              <div className="flex justify-center items-center bg-[#D7EFF9] w-[80px] h-[86px] rounded-[12px]">
                <Image src={saleTagIcon} alt="sale tag icon" width={40} height={40}/>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-sans font-bold text-[28px] text-[#3D3D3D]">24</h1>
                <p className="font-poppins font-normal text-xs text-[#666666]">
                  Produtos
                  <br />
                  Vendidos</p>
              </div>
            </div>
            <div className="flex gap-4 py-3 pl-3 items-center bg-white w-[239px] h-[110px] rounded-[20px]">
              <div className="flex justify-center items-center bg-[#D7EFF9] w-[80px] h-[86px] rounded-[12px]">
                <Image src={storeIcon} alt="sale tag icon" width={40} height={40}/>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-sans font-bold text-[28px] text-[#3D3D3D]">24</h1>
                <p className="font-poppins font-normal text-xs text-[#666666]">
                  Produtos
                  <br />
                  Vendidos</p>
              </div>
            </div>
            <div className="flex gap-4 py-3 pl-3 items-center bg-white w-[239px] h-[110px] rounded-[20px]">
              <div className="flex justify-center items-center bg-[#D7EFF9] w-[80px] h-[86px] rounded-[12px]">
                <Image src={multipleUserIcon} alt="sale tag icon" width={40} height={40}/>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-sans font-bold text-[28px] text-[#3D3D3D]">24</h1>
                <p className="font-poppins font-normal text-xs text-[#666666]">
                  Produtos
                  <br />
                  Vendidos</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[28px] bg-white w-[767px] h-[360px] rounded-[20px] px-6 py-5">
            <div className="flex justify-between">
              <h4 className="font-sans font-bold text-[18px] text-[#1D1D1D]">Visitantes</h4>
              <h4 className="flex gap-2 items-center font-poppins font-normal text-[12px] text-[#666666] uppercase">
                <Image src={calendarIcon} alt="calendar icon" width={16} height={16}/>
                26 de junho - 25 de julho
              </h4>
            </div>
            <div className="w-[719px] h-[266px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -10,
                    bottom: 0,
                  }}
                >
                  <Tooltip cursor={{ stroke: "none" }} content={<CustomTooltip />}/>
                  <CartesianGrid strokeDasharray="8" vertical={false} horizontalValues={[0, 50, 100, 150]}/>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} padding={{left: 36}}/>
                  <YAxis axisLine={false} tickLine={false} padding={{bottom: 40}} allowDecimals={false} ticks={[0, 50, 100, 150]} />
                  <Line type="monotone" dataKey="uv" stroke="#009CF0" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}