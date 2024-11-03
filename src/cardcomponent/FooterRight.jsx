 
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"
const FooterRight = () => {
  return (
    <div className=" w-full sm:w-[50%] flex items-center justify-center flex-col gap-2 ">
      <div className="w-full  items-center justify-center sm:justify-end gap-2 flex">
      <p> মোবাইল এপ ডাউনলোড করুন </p>
      </div>
       
          <div className="w-full  items-center justify-center sm:justify-end gap-2 flex">
          <Link className=" w-[150px] h-full ">  <img className="w-full h-full object-contain" src="https://i.ibb.co.com/MGy9JdY/googleplay1.png " alt="" /></Link>

            <Link className=" w-[150px] h-full ">  <img className="w-full h-full object-contain" src="https://i.ibb.co.com/RBGh0Bb/googleapp.png " alt="" /></Link>
         
          </div>

          <div className="w-full flex items-center justify-center sm:justify-end gap-2 ">
            <p> আমাদের সঙ্গে থাকুন  </p>
            <div className="flex items-end justify-center gap-2">
                <a href="#"><FaFacebook/> </a>
                <a href="#"><FaYoutube/> </a>
                <a href="#"><FaTwitter/> </a>
                <a href="#"><FaInstagram/> </a>
                <a href="#"><FaPinterest/> </a>
            </div>
          </div>

 
      </div>
  )
}

export default FooterRight