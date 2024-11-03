import { Link } from "react-router-dom"

 

const Lastnewscard = () => {
  return (
    <Link to={"/"} className=" flex p-2 items-center justify-center border-b-[1px] border-slate-300  "> 

        <div className="w-full flex items-start justify-center flex-col gap-3 ">
            <h3 className="text-[18px] font-bold text-primary"> <span className="text-active"> মতামত : </span> হাসিনার শাসনের  উন্নয়নের বানোয়াট গল্প </h3>
        <p> ৭ ঘণ্টা আগে </p>
        </div>
        <div className="w-[120px] h-[96px] ">
            <img className="w-full h-full object-cover" src=" https://i.ibb.co.com/zHdkTVd/hasina.jpg" alt="" />
         </div>
    </Link>
  )
}

export default Lastnewscard