import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className='py-10 px-[10%] bg-[#1c1d1c] h-screen w-screen font-thin text-white'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App