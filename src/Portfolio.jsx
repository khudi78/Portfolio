import React from 'react'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Home from './Components/Home';
import Mywork from './Components/Mywork';
function Portfolio() {
 
  // const [percentage, setPercentage] = useState(75); // Example percentage
  return (
    <div>
        {/* navbar */}
        <Navbar/>
         <div className='w-[1400px] mx-[150px] border-3'>
               {/* Home  */}
         <Home/>
        

        {/* skills' */}

        {/* <Skills percentage={percentage}/> */}
        <Skills/>

        {/* my work */}
        <Mywork/>
        {/* contact */} 

        
        <Contact/>
         </div>
       

    </div>
  )
}

export default Portfolio