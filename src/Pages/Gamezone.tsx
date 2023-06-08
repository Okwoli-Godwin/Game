import Videobackground from "./Videobackground"
import {useState, useEffect} from "react"

const Gamezone = () => {

     const [isLoading, setIsLoading] = useState(false)

     useEffect(() => {
   setTimeout(() => {
      setIsLoading(true)
    }, 19800)

  }, [])
  return (
      <>
          {isLoading ? (
              
              <div className="w-full h-screen bg-hero flex justify-center items-center"></div>
          ) : 
                  <Videobackground />
          
    
          }
      </>
  )
}

export default Gamezone