'use client'
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts'

import saleTagIcon from '@/assets/icon/sale-tag-02.svg'
import storeIcon from '@/assets/icon/store-04.svg'
import multipleUserIcon from '@/assets/icon/user-multiple.svg'
import calendarIcon from '@/assets/icon/calendar-04.svg'
import CustomTooltip from "@/components/CustomTooltip"
import { useEffect, useRef, useState } from "react"

type metricsType = {
  sold: number,
  available: number,
  views: number,
  viewsPerDay: [{
    date: string,
    amount: number
  }]
}

type ViewEntry = {
  date: string,
  amount: number,
}

type ViewsData = {
  viewsPerDay: ViewEntry[],
}

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<metricsType>({
    sold: 0,
    available: 0,
    views: 0,
    viewsPerDay:[{date: '00', amount: 0}]
  })

  const range = useRef<number[]>([])

  useEffect(() => {
    async function metricsData() {
      const response = await fetch("http://localhost:3333/sellers/metrics/products/sold", {
        credentials: "include",
        headers: {"Content-Type": "application/json",
        },
      })

      const data = await response.json()
      setMetrics(m => {
        return {...m, sold: data.amount}
      })

      const responseOne = await fetch("http://localhost:3333/sellers/metrics/products/available", {
        credentials: "include",
        headers: {"Content-Type": "application/json",
        },
      })

      const dataOne = await responseOne.json()
      setMetrics(m => {
        return {...m, available: dataOne.amount}
      })

      const responseTwo = await fetch("http://localhost:3333/sellers/metrics/views", {
        credentials: "include",
        headers: {"Content-Type": "application/json",
        },
      })

      const dataTwo = await responseTwo.json()
      setMetrics(m => {
        return {...m, views: dataTwo.amount}
      })

      const responseThree = await fetch("http://localhost:3333/sellers/metrics/views/days", {
        credentials: "include",
        headers: {"Content-Type": "application/json",
        },
      })

      const dataThree = await responseThree.json()
      const transformData = dataThree.viewsPerDay.map((entry: {date: string, amount: number}) => ({
        ...entry,
        date: (String(new Date(entry.date).getUTCDate()).padStart(2, "0")) 
      }))

      console.log(transformData)

      const amountRange = getAmountRange(dataThree)

      console.log(amountRange)

      range.current = amountRange

      setMetrics(m => {
        return {...m, viewsPerDay: transformData}
      })
    }

    metricsData()
  }, [])

  function getAmountRange(input: ViewsData): number[] {
    const amounts = input.viewsPerDay.map(entry => entry.amount)
    const minAmount = Math.min(...amounts)
    const maxAmount = Math.max(...amounts)

    const step = (maxAmount - minAmount) / 3
    const mid1 = parseFloat((minAmount + step).toFixed(1))
    const mid2 = parseFloat((minAmount + 2 * step).toFixed(1))

    return [minAmount, mid1, mid2, maxAmount]
  }

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
                <h1 className="font-sans font-bold text-[28px] text-[#3D3D3D]">{metrics.sold}</h1>
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
                <h1 className="font-sans font-bold text-[28px] text-[#3D3D3D]">{metrics.available}</h1>
                <p className="font-poppins font-normal text-xs text-[#666666]">
                  Produtos
                  <br />
                  Anunciados</p>
              </div>
            </div>
            <div className="flex gap-4 py-3 pl-3 items-center bg-white w-[239px] h-[110px] rounded-[20px]">
              <div className="flex justify-center items-center bg-[#D7EFF9] w-[80px] h-[86px] rounded-[12px]">
                <Image src={multipleUserIcon} alt="sale tag icon" width={40} height={40}/>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-sans font-bold text-[28px] text-[#3D3D3D]">{metrics.views}</h1>
                <p className="font-poppins font-normal text-xs text-[#666666]">
                  Pessoas
                  <br />
                  Visitantes</p>
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
                  data={metrics.viewsPerDay}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -10,
                    bottom: 0,
                  }}
                >
                  <Tooltip cursor={{ stroke: "none" }} content={<CustomTooltip />}/>
                  <CartesianGrid strokeDasharray="8" vertical={false} horizontalValues={range.current}/>
                  <XAxis dataKey="date" axisLine={false} tickLine={false} padding={{left: 36}} interval={0}/>
                  <YAxis axisLine={false} tickLine={false} padding={{bottom: 40}} allowDecimals={false} ticks={range.current} />
                  <Line type="monotone" dataKey="amount" stroke="#009CF0" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}