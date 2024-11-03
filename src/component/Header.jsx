import { useState } from "react";
import { FaBars, FaFacebook, FaGooglePlus, FaLinkedin, FaNewspaper, FaSearch, FaTwitter, FaUser, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import MyComponent from "./MyComponent";
 
 
 
const Header = () => {
  const [searchShow, setsearchshow] = useState(false)
  const [secondSearchBar, setsecondSearchBar] = useState(false)
  const [navShow , setnavShow] = useState(false)

  const searchHandle = ()=>{
    setsearchshow((prev)=>!prev)
  }
  const secondHandler = ()=>{
    setsecondSearchBar((prev)=>!prev)
  }

  const navHandler = ()=>{
    setnavShow((prev)=>!prev)
  }



  return (
    
    <header className=" w-full flex flex-col items-start justify-between  sticky top-0 z-50  " >
        
    <div className=" flex items-center w-full justify-between bg-[#c5161d] md:py-0 py-2 gap-2 md:h-[50px] px-4 md:px-16 flex-col md:flex-row ">
<p className="text-secondary  text-lg   ">
রবিবার ২৯ সেপ্টেম্বর ২০২৪ , ১২.৪০ পূর্বাহ্ন 
</p>
<div  className="  flex item-center justify-center gap-2">
    <div className=" hidden w-full sm:flex items-center justify-center gap-2">
      {
        searchShow ? <input className=" w-[150px] sm:w-[180px] md:w-[220px] shadow-md outline-0  focus:border-slate-600 h-[40px] px-3 border-2 border-slate-900 rounded-md text-sm  focus:border-2 " type="search" name="search" id="search" placeholder="search here" /> : ""
      }
       
        <i onClick={searchHandle} className="border-r-2 px-2 text-secondary text-lg cursor-pointer " ><FaSearch/> </i>
    </div>
  <div  className=" w-full flex items-center justify-center gap-1   text-secondary ">
  <a href="#" className="border-r-2 px-2 text-lg"> <FaFacebook/> </a>
    <a href="#" className="border-r-2 px-2 text-lg "><FaTwitter/> </a>
    <a href="#" className="border-r-2 px-2 text-lg "> <FaLinkedin/> </a>
    <a href="#" className="border-r-2 px-2 text-lg "> <FaYoutube/> </a>
    <a href="#" className=" pl-2 text-lg "> <FaGooglePlus/> </a>
  </div>
</div>

<div className=" w-full flex sm:hidden items-center justify-center gap-2 pt-2">
     
  <input className=" w-full sm:w-[180px] md:w-[220px] shadow-md outline-0  focus:border-borderColor h-[40px] px-3 border-2 border-primary rounded-md text-sm  focus:border-2 " type="search" name="search" id="search" placeholder="search here" /> 
  <label htmlFor="search"> <FaSearch/></label>
       
        
    </div>
    </div>


    <div className=" relative px-2 sm:px-5 flex items-center justify-between  py-2  bg-white w-full ">

      
<nav className=" flex  ">
  <button className="lg:hidden flex p-3 bg-active text-secondary rounded-md text-lg" onClick={navHandler}> <FaBars/> </button>
  {
    navShow ?
    <nav className=" bg-active w-[220px] pl-[30px] py-5 z-50 rounded-md  absolute  top-[55px] left-0"> 
    <ul className="  text-secondary  flex-col md:flex lg:hidden items-center justify-center lg:gap-2  flex-wrap">
    <li><Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> সর্বশেষ </Link> </li>
    <li>  <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> রাজনীতি   </Link> </li>
    <li>     <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> বাংলাদেশ </Link>  </li>
    <li>   <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> অপরাধ   </Link> </li>
    <li>  <Link className="text-sm font-bold hover:underline underline-offset-2" to="#">  বিশ্ব  </Link> </li>
    <li><Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> বাণিজ্য </Link>  </li>
    <li>  <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> মতামত </Link> </li>
    <li>   <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> খেলা </Link> </li>
    <li>    <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> বিনোদন </Link> </li>
    <li>   <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> চাকরি </Link> </li>
    <li> <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> জীবনযাপন  </Link> </li>
  </ul> 
  </nav>
  : " "
  }
  <ul className="w-full hidden lg:flex items-center justify-center lg:gap-2  flex-wrap">
    <li><Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> সর্বশেষ </Link> </li>
    <li>  <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> রাজনীতি   </Link> </li>
    <li>     <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> বাংলাদেশ </Link>  </li>
    <li>   <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> অপরাধ   </Link> </li>
    <li>  <Link className="text-sm font-bold hover:underline underline-offset-2" to="#">  বিশ্ব  </Link> </li>
    <li><Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> বাণিজ্য </Link>  </li>
    <li>  <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> মতামত </Link> </li>
    <li>   <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> খেলা </Link> </li>
    <li>    <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> বিনোদন </Link> </li>
    <li>   <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> চাকরি </Link> </li>
    <li> <Link className="text-sm font-bold hover:underline underline-offset-2" to="#"> জীবনযাপন  </Link> </li>
  </ul>

</nav>

<div className=" flex items-center justify-center gap-2  ">
<div className=" hidden sm:flex w-full  items-center justify-center gap-2  ">
      {
        secondSearchBar ? <input className="  w-[220px] shadow-md outline-0  focus:border-borderColorh-[40px] px-3 border-2 border-slate-900 rounded-md text-sm  focus:border-2     z-50 " type="search" name="search" id="search" placeholder="search here" /> : ""
      }
        <i onClick={secondHandler} className=" flex items-center justify-center gap-1 border-r-[2px] border-borderColor px-3 text-black text-sm font-normal cursor-pointer " > {secondSearchBar ?<FaXmark className=" text-xl"/>    : <FaSearch className=" text-xl"/> } খুজুন  </i>
</div>
 
<a href="#" className="  px-2  flex  text-black  items-center justify-center gap-1 text-sm font-normal "> <FaNewspaper className="text-xl "/>  পেপার  </a>
 
<div className=" flex items-center justify-center gap-1 py-[5px] px-3 bg-red-200 border-r-[2px] border-borderColor border-l-[2px]  ">   
<label htmlFor="language">  <GrLanguage className="text-xl "/>    </label>
  <select className=" border-0  outline-0  bg-red-200 " name="" id="language">
     
    <option value="eng"> Eng</option>
    <option value="ban"> Ban</option>
    <option value="urd"> Urd</option>
  </select>
</div>

<div className=" flex items-center justify-center px-3  ">
    <a className="flex items-center justify-center text-sm  gap-1" href="#"> <FaUser/> Login </a>
  </div>

    
   
</div>
      </div>

    <div className=" flex items-center justify-center  w-full  ">
      <p className="bg-active text-secondary pl-[15px] py-[9px] w-[130px] sm:text-lg  text-sm   "> শিরোনাম  </p>

    <Marquee pauseOnHover={true} className="bg-marqueeBg  px-4 "  >
 <MyComponent  />
  </Marquee>
    </div>


    </header>
  )
}

export default Header