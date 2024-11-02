import Footerleft from "../cardcomponent/Footerleft"
import FooterRight from "../cardcomponent/FooterRight"

 

const Footer = () => {
  return (
    <footer className=" p-2  w-full flex items-center justify-center flex-col gap-2 bg-slate-300">
         <div className="w-full flex items-center justify-between py-2">
            <div className="flex flex-col items-start justify-start">
                <p className="text-[12px] text-black"> আমরা জনগণের পক্ষে</p>
                <h2 className="text-green-500 text-2xl font-bold"> <span className="text-red-500"> বাংলাদেশ  </span> প্রতিদিন </h2>
            </div>
            <p className="text-lg text-black">ভারপ্রাপ্ত সম্পাদক : আবু তাহের </p>
        </div>
        
         <div className=" w-full flex items-center justify-between">
         <Footerleft/>  
         <FooterRight/>  
         </div>
    </footer>
  )
}

export default Footer