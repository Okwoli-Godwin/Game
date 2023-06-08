import { NavLink } from "react-router-dom"
import sound from "../assets/sound.mp3"

const Hero = () => {
  return (
      <div>
          <div className='w-full h-screen bg-hero flex justify-center items-center'>
          <audio autoPlay={true} loop>
              <source src={ sound} type=""/>
          </audio>
          <div className='w-[390px] h-[490px] bg-[rgba(0,0,0,0.5)] rounded p-5 flex-col'>
              <h1 className='text-white text-2xl'>Setup Game</h1>

              <div className="flex flex-col mt-8">
                  <h2 className="text-white text-sm">Number of Questions</h2>
                  <input type="number" className="w-[100%] h-[40px] bg-[#fff] mt-1 rounded outline-none pl-2"/>
              </div>

              <div className="flex flex-col mt-8">
                  <h2 className="text-white text-sm">Select Category</h2>
                  <select name="" id="" className="w-[100%] h-[40px] bg-[#fff] mt-1 rounded outline-none pl-2">
                      <option selected>Choose a category</option>
                      <option value="US">React</option>
                      <option value="CA">Node.js</option>
                      <option value="FR">Tailwind</option>
                      <option value="DE">Redux</option>
                  </select>
              </div>

              <div className="flex flex-col mt-8">
                  <h2 className="text-white text-sm">Select Difficulty</h2>
                  <select name="" id="" className="w-[100%] h-[40px] bg-[#fff] mt-1 rounded outline-none pl-2">
                      <option value="US">easy</option>
                      <option value="CA">medium</option>
                      <option value="FR">hard</option>
                  </select>
              </div>

                  <NavLink to="/gamezone">
                      <button className="w-[100%] h-[40px] bg-[#5572B9] text-white cursor-pointer rounded mt-8">Start Game</button>
                    </NavLink>
          </div>
                 
    </div>
    </div>
  )
}

export default Hero