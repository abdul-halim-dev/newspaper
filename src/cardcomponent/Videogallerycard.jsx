import { Link } from "react-router-dom"

 

const Videogallerycard = () => {
  return (
    <Link to={"/"} className=" w-full sm:w-[48%] md:w-[32%] lg:w-[31%] flex flex-col gap-3 items-center justify-center bg-slate-200 rounded"> 
        <div className="w-full h-[124px] rounded-tr rounded-tl ">
            <img className="w-full h-full object-cover rounded-tr rounded-tl " src="https://i.ibb.co.com/1v3QGKk/news.jpg" alt="" />
         </div>
   
        <h4 className="text-sm font-semibold text-primary py-3 sm:py-0  px-2"> জাতিসংঘে ড ইউনূস এর ভাষণ। ন্যায় ভিত্তিক সমাজ </h4>
    

    </Link>
  )
}

export default Videogallerycard