 import { Link } from "react-router-dom"

const Tourcard = () => {
  return (
    <div className=" w-full sm:w-[48%] md:w-[32%] lg:w-[32%] flex items-center justify-center flex-col gap-2 "> 
<div className="w-full flex items-center justify-between bg-slate-200">
    <Link to={"/"} className=" bg-active text-secondary text-lg p-1 ">ভ্রমণ  </Link>
    <Link className=" text-sm  font-bold text-active "> More News... </Link>
</div>

<div className="w-full flex flex-col gap-2 items-center justify-center">
    <div className=" w-full h-[130px] ">
        <img className="w-full h-full object-cover" src="https://i.ibb.co.com/W3g87mx/lake.jpg" alt="" />
    </div>
    <div className="w-full flex items-start justify-center flex-col gap-2">
        <h5 className="text-lg font-bold text-primary">একশর বেশি হ্রদ যে উদ্যানে </h5>
    
     <Link to={"/"}> গ্যারেথ বেলের দেশ ওয়েলেসের উত্তর-পশ্চিমে অবস্থিত সবচেয়ে বড় জাতীয় উদ্যান স্নোডোনিয়া। ওয়েলসের সর্বোচ্চ পাহাড় স্নোডোনিয়াও এখানেই অবস্থিত। আর এই পাহাড়ের নামেই এর নাম। এখানে প্রায় একশরও বেশি হ্রদ রয়েছে। এছাড়া 
     <Link className=" text-indigo-400 text-sm font-medium"> Read More</Link>
     </Link>
    </div> 
         </div>



        <div className="w-full flex items-center justify-center gap-2 flex-col">
        <Link to="/" className="w-full flex items-start justify-start gap-2 border-b-[1px] border-borderColor py-2">
            <div className="w-[35%] h-full">
                <img className="w-full h-full object-cover" src="https://i.ibb.co.com/wcKr5Tx/children.jpg" alt="" />
             </div>
            <div className="w-[65%]">
            <h4 className="text-primary text-lg ">
             গরমে শিশুর আরাম 
             </h4>
            </div>
         </Link>
       
        <Link to="/" className="w-full flex items-start justify-start gap-2 border-b-[1px] border-borderColor py-2">
            <div className="w-[35%] h-full">
                <img className=" w-full h-full object-cover" src="https://i.ibb.co.com/NZ406k3/cigarette.jpg" alt="" />
              </div>
           <div className="w-[65%]">
           <h4 className="text-primary text-lg ">
             সিগারেট তৈরির একটি মূল উপাদান ইঁদুরের বিষ্ঠা
             </h4>
           </div>
         </Link>
       
        <Link to="/" className="w-full flex items-start justify-start gap-2 border-b-[1px] border-borderColor py-2">
            <div className="w-[35%] h-full">
                <img className="w-full h-full object-cover" src="https://i.ibb.co.com/wcKr5Tx/children.jpg" alt="" />
             </div>
            <div className="w-[65%]">
            <h4 className="text-primary text-lg ">
             গরমে শিশুর আরাম 
             </h4>
            </div>
         </Link>

         
       
        <Link to="/" className="w-full flex items-start justify-start gap-2 border-b-[1px] border-borderColor py-2">
            <div className="w-[35%] h-full">
                <img className="w-full h-full object-cover" src="https://i.ibb.co.com/7tWyzYK/fariha.jpg" alt="" />
              </div>
            <div className="w-[65%]">
            <h4 className="text-primary text-lg ">
             বিবাহিত পুরুষদের উপর চটলেন ফারিহা 
             </h4>
            </div>
         </Link>

         <Link to="/" className="w-full flex items-start justify-start gap-2 border-b-[1px] border-borderColor py-2">
            <div className="w-[35%] h-full">
                <img className="w-full h-full object-cover" src="https://i.ibb.co.com/wcKr5Tx/children.jpg" alt="" />
             </div>
            <div className="w-[65%]">
            <h4 className="text-primary text-lg ">
             গরমে শিশুর আরাম 
             </h4>
            </div>
         </Link>
        </div>
    </div>
  )
}

export default Tourcard