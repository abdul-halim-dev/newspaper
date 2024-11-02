import Lastnewscard from "../cardcomponent/Lastnewscard"
import SpecialNewsCard from "./SpecialNewsCard"

 
 
 const specialNews = () => {
   return (
     <section className=" w-full flex-col lg:flex-row flex items-center justify-center gap-4 ">
        
       <div className="w-full lg:w-[70%] flex items-center justify-center flex-col gap-2 ">
        <div className="w-full flex items-center justify-between bg-slate-100 p-[2px]  ">
            <p className="text-sm bg-red-500 text-white p-[5px] "> বিশেষ সংবাদ  </p>
            <p className=" text-sm text-red-500 border-l-2 border-red-500 pl-2 font-bold "> More News.... </p>
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
            <p className="text-sm bg-red-500 text-white p-[5px] "> সর্বশেষ খবর   </p>
             
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