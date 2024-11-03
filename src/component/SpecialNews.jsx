import { Link } from "react-router-dom"
import Lastnewscard from "../cardcomponent/Lastnewscard"
import SpecialNewsCard from "../cardcomponent/SpecialNewsCard"

 
 
 const specialNews = () => {
   return (
     <section className=" w-full flex-col lg:flex-row flex items-center justify-center gap-4 py-4 ">
        
       <div className="w-full lg:w-[70%] flex items-center justify-center flex-col gap-2 ">
        <div className="w-full flex items-center justify-between bg-slate-100 p-[2px]  ">
            <Link to={"/"} className="text-sm bg-active text-secondary p-[5px] "> বিশেষ সংবাদ  </Link>
            <Link to={"/"} className=" text-sm text-active border-l-2 border-active pl-2 font-bold "> More News.... </Link>
        </div>

        <div className="w-full flex items-center justify-center gap-3 flex-wrap ">
 
            <SpecialNewsCard/>
            <SpecialNewsCard/>
            <SpecialNewsCard/>
            <SpecialNewsCard/>
            <SpecialNewsCard/>
            <SpecialNewsCard/>
            <SpecialNewsCard/>
            <SpecialNewsCard/>
            <SpecialNewsCard/>
        </div>
      
      
        </div> 
        
        <div className=" w-full lg:w-[30%] flex items-center justify-center flex-col gap-2 ">

        <div className="w-full flex items-start justify-start bg-slate-100 p-[2px]  ">
            <Link to={"/"} className="text-sm bg-active text-secondary p-[5px] "> সর্বশেষ খবর   </Link>
             
        </div>
        <div className=" w-full items-center flex-wrap justify-center gap-2 ">
    <Lastnewscard/>
    <Lastnewscard/>
    <Lastnewscard/>
    <Lastnewscard/>
    <Lastnewscard/>
        </div>


        </div>
        </section>
   )
 }
 
 export default specialNews