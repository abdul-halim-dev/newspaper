import { Link } from "react-router-dom"
import Footerleft from "../cardcomponent/Footerleft"
import FooterRight from "../cardcomponent/FooterRight"

 

const Footer = () => {
  return (
    <footer className="   w-full flex items-center justify-center flex-col bg-[url('https://i.ibb.co.com/5WyzZ06/footer-bg.webp')] ackground-size: cover  ">
         <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 p-2  ">
            <div className="flex flex-col items-start justify-start">
                <p className="text-[12px] text-primary"> আমরা জনগণের পক্ষে</p>
                <Link to={"/"} className="text-green-500 text-2xl font-bold"> <span className="text-active"> বাংলাদেশ  </span> প্রতিদিন </Link>
            </div>
            <p className="text-lg text-primary ">ভারপ্রাপ্ত সম্পাদক : আবু তাহের </p>
        </div>
        
         <div className="px-3 py-6 w-full flex-col sm:flex-row gap-2 flex items-center justify-between bg-[#d9d9d9] " >
         <Footerleft/>  
         <FooterRight/>  
         </div>
         <div className="w-full flex-col sm:flex-row gap-2 flex items-center justify-between p-2 ">
            <ul className="flex items-center justify-center gap-2 sm:gap-4">
                <li type="disc" className="px-2 text-primary text-sm font-medium hover:underline"> <Link> যোগাযোগ  </Link></li>
                <li type="disc"  className="px-2 text-primary text-sm font-medium hover:underline"> <Link>  গোপনীয় নীতি   </Link></li>
                <li type="disc"  className="px-2 text-primary text-sm font-medium hover:underline"> <Link>  বিজ্ঞাপনের মূল্য তালিকা  </Link></li>
            </ul>
            <p className="text-sm text-primary">স্বত্ব © ২০২৪ বাংলাদেশ প্রতিদিন </p>
         </div>
    </footer>
  )
}

export default Footer