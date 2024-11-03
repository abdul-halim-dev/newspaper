import { Link } from "react-router-dom"

 

const Internationalcard = ({title, img}) => {
  return (
    <Link className=" sm:w-[48%] lg:w-full pb-[12px] pt-2 border-b-[1px] border-borderColor  h-[78px] flex items-start justify-center gap-2" to="/">
        <div className="w-[100px]  h-full ]  ">
            <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="w-full h-full ">
        <h4 className="text-lg text-primary "> {title} </h4>
        </div>
        
     </Link>
  )
}

export default Internationalcard