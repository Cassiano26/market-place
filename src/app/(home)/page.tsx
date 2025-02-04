'use client'
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import saleTagIcon from '@/assets/icon/sale-tag-02.svg'
import storeIcon from '@/assets/icon/store-04.svg'
import multipleUserIcon from '@/assets/icon/user-multiple.svg'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default function DashboardPage() {
  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="font-sans font-bold text-2xl text-[#1D1D1D]">Últimos 30 dias</h1>
          <p className="font-poppins font-normal text-base text-[#666666] mt-2">Confira as estatísticas da sua loja no último mês</p>
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
          <div className="bg-white w-[767px] h-[360px] rounded-[20px]">
            <div>
              <h4></h4>
              <h4></h4>
            </div>
            <div className="w-[700px] h-[266px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={719}
                  height={266}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}