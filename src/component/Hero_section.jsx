import { Link } from "react-router-dom"
import HeroCard from "../cardcomponent/HeroCard"

 

const Hero_section = () => {
  return (
    <section className=" w-full h-full flex lg:flex-row flex-col items-center justify-center gap-2 py-4"> 
<Link to={"/"} className=" w-full lg:w-[50%] h-[300px]  "> 
    
    <div  className=" w-full h-full relative ">
        <img className="w-full h-full object-cover" src="https://i.ibb.co.com/K9P0j4S/Eggs.jpg" alt="" />
 

   <div className="absolute bottom-0 left-0 p-3 bg-primary/60 w-full ">
   <h4 className="text-secondary text-xl font-bold"> ডিমের ডজন ৬৫ টাকা  </h4>
   </div>
    </div>
    
     </Link>


<div className=" w-full lg:w-[50%] flex-col sm:flex-row h-full sm:h-[300px] flex items-center justify-center gap-2  "> 
<div className=" w-full sm:w-[50%] h-full  flex gap-2 items-center justify-center flex-col ">
    <div className="w-full flex items-center justify-center ">
        <button className=" w-full border-0 bg-active text-secondary py-[8px]  text-lg "> Last Update</button>
        <button className=" w-full border-0 bg-[#4f4543] text-secondary py-[8px]  text-lg ">  Popular Post </button>
    </div>

<div className="flex flex-col overflow-y-auto gap-2 items-start justify-center pb-[10px]  ">
    <HeroCard title={"একশর বেশি হ্রদ যে উদ্যানে"} img={"https://i.ibb.co.com/W3g87mx/lake.jpg"} />
    <HeroCard title={"কালিহাতীতে দর্শকদের ফাঁসির দাবিতে মানব বন্ধন"} img={"https://i.ibb.co.com/hKz5N0b/rally.jpg"} />
    <HeroCard title={"ডিমলায় গৃহবধুর রহস্যজনক মৃত্যু "} img={"https://i.ibb.co.com/2d786Kc/bride.jpg"} />
    <HeroCard title={"কালিহাতীতে দর্শকদের ফাঁসির দাবিতে মানব বন্ধন"} img={"https://i.ibb.co.com/hKz5N0b/rally.jpg"} />
    <HeroCard title={"সৌদি মন্ত্রিসভায় এবার রদবদল"} img={"https://i.ibb.co.com/YTHK6fb/saudi.jpg"} />
    <HeroCard title={"কালিহাতীতে দর্শকদের ফাঁসির দাবিতে মানব বন্ধন"} img={"https://i.ibb.co.com/hKz5N0b/rally.jpg"} />
    <HeroCard title={"সৌদি মন্ত্রিসভায় এবার রদবদল"} img={"https://i.ibb.co.com/YTHK6fb/saudi.jpg"} />
    <HeroCard title={"ডিমলায় গৃহবধুর রহস্যজনক মৃত্যু "} img={"https://i.ibb.co.com/2d786Kc/bride.jpg"} />
    <HeroCard title={"ডিমলায় গৃহবধুর রহস্যজনক মৃত্যু "} img={"https://i.ibb.co.com/2d786Kc/bride.jpg"} />
    <HeroCard title={"কালিহাতীতে দর্শকদের ফাঁসির দাবিতে মানব বন্ধন"} img={"https://i.ibb.co.com/hKz5N0b/rally.jpg"} />
    <HeroCard title={"সৌদি মন্ত্রিসভায় এবার রদবদল"} img={"https://i.ibb.co.com/YTHK6fb/saudi.jpg"} />
    <HeroCard title={"ডিমলায় গৃহবধুর রহস্যজনক মৃত্যু "} img={"https://i.ibb.co.com/2d786Kc/bride.jpg"} />
    <HeroCard title={"কালিহাতীতে দর্শকদের ফাঁসির দাবিতে মানব বন্ধন"} img={"https://i.ibb.co.com/hKz5N0b/rally.jpg"} />

   
 
</div>
 
</div>




<Link to={"/"} className="w-full sm:w-[50%] flex items-start justify-center flex-col gap-2 ">
    

<div className="w-full flex items-center justify-center   ">
        <button className=" w-full border-0 bg-active text-white py-[8px]  text-lg "> রাজনীতি  </button>      
</div>

<div className="w-full flex flex-col items-start justify-center gap-2">

    
        <img className="w-full h-[160px] object-cover" src="https://i.ibb.co.com/RNVd6Vd/brother.jpg" alt="" />
   
   <h3 className="text-lg font-semibold text-primary ">ছোট ভাইয়ের হাতে বড়ো ভাই খুন </h3>
   <p className="text-sm font-medium">নিহতের স্বজনদের বরাতে পুলিশ জানায়, জমি সংক্রান্ত বিরোধের জেরে মঙ্গলবার রাতে</p>
</div>

</Link>

</div>
 


    </section>
  )
}

export default Hero_section