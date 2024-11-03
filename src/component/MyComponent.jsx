import { Link } from "react-router-dom"

 

const MyComponent = () => {
  return (
    <ul className="  flex items-center justify-center gap-8 text-white py-2">
     <li type="circle"  className=" sm:text-lg  text-sm "> <Link to="/">ভালোবাসা কখনো নিখোঁজ হয় না।</Link> </li>   
     <li type="circle"  className=" sm:text-lg  text-sm "> <Link to={"/"}> টি রূপান্তরিত হয়, কিন্তু তার শক্তি অটুট থাকে। </Link></li>   
     <li type="circle"  className=" sm:text-lg  text-sm "> <Link to={"/"}> চ্যালেঞ্জ? ব্রিং ইট অন!</Link> </li>   
     <li type="circle"  className=" sm:text-lg  text-sm "> <Link to={"/"}> পকেটে টাকা না থাকতে পারে, নিজেকে বিক্রি করে চলি না ।  </Link> </li>   
     <li type="circle"  className=" sm:text-lg  text-sm ">  <Link to={"/"}>কফি, বই, আর নিজের সাথে আড্ডা, আমার সেরা অবসর।  </Link> </li>   
     <li type="circle"  className="sm:text-lg  text-sm "> <Link to={"/"}>গেম আমার, রুল আমার, জেতাই আমি! </Link> </li>   
   
    </ul>
  )
}

export default MyComponent