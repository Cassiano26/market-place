import UserMultipleIcon from "./icons/userMultipleIcon";

export default function CustomTooltip() {

  return (
    <div className="flex flex-col gap-2 p-3 h-[60px] w-[146px] bg-white rounded-[12px] shadow-[0px_0px_20px_10px_#FBF4F4]">
      <p className="font-poppins font-medium text-[10px] text-[#3D3D3D]">08 DE JULHO</p>
      <div className="flex gap-1">
        <UserMultipleIcon color="#666666" width={16} height={16}/>
        <p className="font-poppins font-normal text-[12px] text-[#666666]">138 Visitantes</p>
      </div>
    </div>
  )

}