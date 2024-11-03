import Featuresection from "./component/Featuresection";
import Footer from "./component/Footer";
import Header from "./component/Header"
import Hero_section from "./component/Hero_section"
import SpecialNews from './component/SpecialNews';
import Videogallery from "./component/Videogallery";
import Wholecountry from "./component/Wholecountry";
 
 
 
 const App = () => {
   return (
     <div className=" px-2 flex items-center justify-center flex-col gap-2">
<Header/>
<Hero_section/>
 <SpecialNews/>
<Wholecountry/>
<Featuresection/>
<Videogallery/>
<Footer/>

     </div>
   )
 }
 
 export default App