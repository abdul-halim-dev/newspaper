import Videogallerycard from "../cardcomponent/Videogallerycard"

 

const Videogallery = () => {
  return (
    <div className="w-full flex items-center justify-center gap-2 flex-col  "> 
        <div className="w-full flex items-start justify-start bg-slate-100 py-2 ">
       <h3 className="text-green-500 font-semibold text-lg ">ভিডিও গ্যালারি </h3>
        </div>

<div className="w-full lg:flex-row flex-col flex items-center justify-center ">
<div className=" w-full lg:w-[50%] flex items-center justify-center "> 
    <img className="w-full h-full object-cover" src="https://i.ibb.co.com/v1zXq3B/asif.jpg" alt="" />
  </div>
<div className=" w-full lg:w-[50%]  flex  flex-wrap gap-2 items-center justify-center "> 
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