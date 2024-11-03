import { Link } from "react-router-dom"
import Internationalcard from "../cardcomponent/Internationalcard"
import Wholecountrycard from "../cardcomponent/Wholecountrycard"
import Wholecountryfourcard from "../cardcomponent/Wholecountryfourcard"
 

 
 
 const Wholecountry = () => {
   return (
     <section className=" w-full flex-col lg:flex-row flex items-center justify-center gap-4 py- ">
        
       <div className="w-full lg:w-[70%] flex items-center justify-center flex-col gap-2 ">
        <div className="w-full flex items-center justify-between bg-slate-100 p-[2px]  ">
            <Link to={"/"} className="text-sm bg-active text-secondary p-[5px] "> সারাদেশ 
            </Link>
            <Link to={"/"} className=" text-sm text-active border-l-2 border-active pl-2 font-bold "> More News.... </Link>
        </div>

        <div className="w-full flex items-center justify-center   ">
            <Wholecountrycard/> 
        </div>
        
        <div className="w-full flex items-center justify-center gap-2 flex-wrap ">
            <Wholecountryfourcard/>
            <Wholecountryfourcard/>
            <Wholecountryfourcard/>
            <Wholecountryfourcard/>
        </div>

      
      
        </div> 
        
        <div className=" w-full lg:w-[30%] flex items-center justify-center flex-col gap-2 ">
 
        <div className="w-full flex items-center justify-between bg-slate-100 p-[2px]  ">
            <Link to={"/"} className="text-sm bg-active text-secondary p-[5px] "> আন্তর্জাতিক 
            </Link>
            <Link to={"/"} className=" text-sm text-active border-l-2 border-active pl-2 font-bold "> More News.... </Link>
        </div>



        <div className=" w-full items-start  sm:items-center flex flex-wrap justify-center gap-2 ">
 
 <Internationalcard title={"তিস্তা নদীর বিপদসীমার পরিমান পরিবর্তন "} img={"https://i.ibb.co.com/C06Bkrz/tista.jpg"} />
 <Internationalcard title={"তিস্তা নদীর বিপদসীমার পরিমান পরিবর্তন "} img={"https://i.ibb.co.com/C06Bkrz/tista.jpg"} />
 <Internationalcard title={"তিস্তা নদীর বিপদসীমার পরিমান পরিবর্তন "} img={"https://i.ibb.co.com/C06Bkrz/tista.jpg"} />
 <Internationalcard title={"তিস্তা নদীর বিপদসীমার পরিমান পরিবর্তন "} img={"https://i.ibb.co.com/C06Bkrz/tista.jpg"} />
 <Internationalcard title={"তিস্তা নদীর বিপদসীমার পরিমান পরিবর্তন "} img={"https://i.ibb.co.com/C06Bkrz/tista.jpg"} />
  
        </div>
 

        </div>
        </section>
   )
 }
 
 export default Wholecountry