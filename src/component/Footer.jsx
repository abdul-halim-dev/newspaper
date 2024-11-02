import { Link } from "react-router-dom"
import Footerleft from "../cardcomponent/Footerleft"
import FooterRight from "../cardcomponent/FooterRight"

 

const Footer = () => {
  return (
    <footer className="   w-full flex items-center justify-center flex-col  ">
         <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 p-2 bg-slate-400 ">
            <div className="flex flex-col items-start justify-start">
                <p className="text-[12px] text-black"> আমরা জনগণের পক্ষে</p>
                <h2 className="text-green-500 text-2xl font-bold"> <span className="text-red-500"> বাংলাদেশ  </span> প্রতিদিন </h2>
            </div>
            <p className="text-lg text-black">ভারপ্রাপ্ত সম্পাদক : আবু তাহের </p>
        </div>
        
         <div className="p-2 w-full flex-col sm:flex-row gap-2 flex items-center justify-between bg-slate-300 " >
         <Footerleft/>  
         <FooterRight/>  
         </div>
         <div className="w-full flex-col sm:flex-row gap-2 flex items-center justify-between p-2 bg-slate-200">
            <ul className="flex items-center justify-center gap-4">
                <li type="disc" className="px-2 text-black text-sm font-medium hover:underline"> <Link> যোগাযোগ  </Link></li>
                <li type="disc"  className="px-2 text-black text-sm font-medium hover:underline"> <Link>  গোপনীয় নীতি   </Link></li>
                <li type="disc"  className="px-2 text-black text-sm font-medium hover:underline"> <Link>  বিজ্ঞাপনের মূল্য তালিকা  </Link></li>
            </ul>
            <p className="text-sm text-black">স্বত্ব © ২০২৪ বাংলাদেশ প্রতিদিন </p>
         </div>
    </footer>
  )
}

export default Footer