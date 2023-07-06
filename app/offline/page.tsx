import { FcCancel } from "react-icons/fc";

export default async function Offline() {
    


  return (
    <div className="container grid h-screen place-items-center">
      <div className='flex items-center gap-3 bg-gray-900 rounded-sm p-9'><FcCancel className='text-[2rem]'/><h1 className="align-middle"> لا يوجد إتصال بالشبكة ، يرجا المحاولة مرة أخرى.</h1></div>
    </div>
    
  )
}