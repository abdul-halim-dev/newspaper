import { Link } from "react-router-dom"




const Footerleft = () => {
  return (
    <div className=" w-full sm:w-[50%] flex items-start justify-center flex-col border-l-[3px] pl-6 sm:pl-6 md:pl-8 border-green-500  ">

      <div className="w-full flex ">
        <div className=" flex flex-col gap-4 w-[31%] ">
          <Link className="text-lg font-normal text-primary" to={"/"}>  জাতীয়  </Link>
          <Link className="text-lg font-normal text-primary" to={"/"}>  পূর্ব-পশ্চিম   </Link>
          <Link className="text-lg font-normal text-primary" to={"/"}>  প্রথম পাতা   </Link>
        </div>
        <div className=" flex flex-col gap-4 w-[31%]">
          <Link className="text-lg font-normal text-primary" to={"/"}>   নগর জীবন   </Link>
          <Link className="text-lg font-normal text-primary" to={"/"}>  শোবিজ   </Link>
          <Link className="text-lg font-normal text-primary" to={"/"}>  মাঠে ময়দানে   </Link>
        </div>
        <div className=" flex flex-col gap-4 w-[31%] ">
          <Link className="text-lg font-normal text-primary" to={"/"}>  দেশ গ্রাম   </Link>
          <Link className="text-lg font-normal text-primary" to={"/"}>  চায়ের দেশ   </Link>
          <Link className="text-lg font-normal text-primary" to={"/"}>   পেছনের পৃষ্ঠা   </Link>
        </div>
      </div>
      <span> <Link className="text-lg font-normal text-active " to={"/"}>   ই-পেপার   </Link> </span>


    </div>
  )
}

export default Footerleft