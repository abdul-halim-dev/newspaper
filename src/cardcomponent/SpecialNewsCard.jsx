import { Link } from "react-router-dom"

 

const SpecialNewsCard = () => {
  return (
    <Link to="/" className=" w-full sm:w-[48%] md:w-[31%] lg:w-[32%] flex items-center justify-center relative ">
        
            <img className="w-full h-[180px] object-cover" src="https://i.ibb.co.com/P9cFkcB/amir.jpg" alt="" />
    
         <div className="w-full bg-primary/60 left-0 bottom-0 absolute p-2 text-secondary text-lg font-semibold">
        <h3 className="  font-semibold text-lg"> কেন সঞ্জয় এর বায়োপিক প্রত্যাখ্যান করেছেন আমির খান </h3>
    </div>
  
    </Link>
  )
}

export default SpecialNewsCard