import Navbar from "./components/navbar/Navbar"
import GlobalRouter from "./router/router"

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <GlobalRouter />
    </div>
  )
}

export default App