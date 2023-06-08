import Videobackground from "./Videobackground"
import {useState, useEffect} from "react"

const Gamezone = () => {

     const [isLoading, setIsLoading] = useState(false)

     useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    }, 19840)

  }, [])
  return (
      <>
          {isLoading ? (
              
              <div className="w-full h-screen bg-hero flex justify-center items-center">
                  <div className="w-full flex mt-[70px] items-center">
                      <div className="w-[300px] h-[2px] bg-gray-100"></div>
                      <div className="w-[600px] h-[110px] bg-[#002F81]"></div>
                      <div className="w-[300] h-[2px] bg-gray-100"></div>
                  </div>
                      
                  
              </div>
          ) : 
                  <Videobackground />
          
    
          }
      </>
  )
}

export default Gamezone