import { Link } from "react-router-dom"
import Videogallerycard from "../cardcomponent/Videogallerycard"

 

const Videogallery = () => {
  return (
    <div className="w-full flex items-center justify-center gap-2 flex-col py-4 "> 
        <div className="w-full flex items-start justify-start bg-secondary py-2 ">
       <h3 className="text-green-500 font-semibold text-lg ">ভিডিও গ্যালারি </h3>
        </div>

<div className="w-full lg:flex-row flex-col flex items-center justify-center ">
<Link to={"/"} className=" w-full lg:w-[50%] flex items-center justify-center "> 
    <img className="w-full h-full object-cover" src="https://i.ibb.co.com/v1zXq3B/asif.jpg" alt="" />
  </Link>
<div className=" w-full lg:w-[50%]  flex  flex-wrap gap-3 items-center justify-center "> 
<Videogallerycard/>
<Videogallerycard/>
<Videogallerycard/>
<Videogallerycard/>
<Videogallerycard/>
<Videogallerycard/>
</div>

</div>

    </div>
  )
}

export default Videogallery