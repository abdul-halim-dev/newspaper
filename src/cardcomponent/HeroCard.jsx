import { Link } from "react-router-dom"

 

const HeroCard = ({title, img}) => {
  return (
    <Link className="w-full pb-[12px] border-b-[1px] border-borderColor  h-[70px] flex items-start justify-center gap-2" to="/">
        <div className="w-[70px]  h-full ]  ">
            <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="w-full h-full ">
        <h4 className="text-lg text-primary "> {title} </h4>
        </div>
        
     </Link>
  )
}

export default HeroCard