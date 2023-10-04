import {AiOutlineHome} from 'react-icons/ai'
import {MdAirplaneTicket} from 'react-icons/md'
import { Link } from 'react-router-dom'

const menuItems = [
  {id: 1, label: "Home", route: "/", icon: <AiOutlineHome />},
  {id: 2, label: "Tickets", route: "/tickets", icon: <MdAirplaneTicket />},
]
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 md:p-4 lg:px-8 lg:py-4 text-2xl bg-slate-500 text-white">
      <div>
        <Link to="/">Tickets</Link>
      </div>
      <div className="flex items-center gap-x-4 font-light">
            {menuItems.map(({id, label, route, icon}) => (
              <Link key={id} to={route}>
                <span className="hidden md:block">{label}</span>
                <span className="block md:hidden text-3x1">{icon}</span>
              </Link>
            )
          )}
      </div>
    </div>
    
  )
}

export default Navbar