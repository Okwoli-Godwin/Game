import myVideo from "../assets/millionaire.mp4"

const Videobackground = () => {
  return (
      <div>
          <div className='w-full h-screen'>
          <video className='w-full h-screen object-cover absolute inset-0'
              src={myVideo}
              autoPlay={true}
              // muted
              playsInline
              loop={true}>
            </video>
    </div>
    </div>
  )
}

export default Videobackground