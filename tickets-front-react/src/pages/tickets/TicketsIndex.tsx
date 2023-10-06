import BackButton from "../../components/back-button/BackButton"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {AiOutlinePlusSquare} from 'react-icons/ai'
import type { Ticket } from "../../typings/Ticket"
import axios from "axios"
import Spinner from "../../components/spinner/Spinner"
import moment from "moment"

export const TicketsIndex = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getTickets = async () => {
    if(!loading) setLoading(true);
    const { data } = await axios.get("tickets");
    setLoading(false);
    setTickets(data);
  };

  useEffect(() => {
    getTickets();
  }, [])

  const noDataContent = (<div className="text-center text-3xl">No tickets found.</div>)
  const ticketContent = (
    <table className="w-full">
      <thead className="bg-gray-100 p-2">
        <th className="text-center">ID</th>
        <th className="text-center">Passenger name</th>
        <th className="text-center max-md:hidden">Passenger SSN</th>
        <th className="text-center max-lg:hidden">From</th>
        <th className="text-center max-lg:hidden">To</th>
        <th className="text-center max-md:hidden">Price</th>
        <th className="text-center">Time</th>
        <th className="text-center">Operation</th>
      </thead>
      <tbody className="bg-sky-100">
        {
          tickets.map(({id, passengerName, passengerSSN, from, to, price, time}) => (
          <tr className="border-2 border-gray-300 h-12 hover:bg-sky-300 transition-all duration-200" key={id}>
            <td className="text-center">{id}</td>
            <td className="text-center">{passengerName}</td>
            <td className="text-center max-md:hidden">{passengerSSN}</td>
            <td className="text-center max-lg:hidden">{from}</td>
            <td className="text-center max-lg:hidden">{to}</td>
            <td className="text-center max-md:hidden">{price}</td>
            <td className="text-center">{moment(time).format("YYYY-MM-DD, HH:MM")}</td>
            <td className="text-center">
              <Link className="bg-green-600 p-1 rounded-md mx-1" to={`/tickets//${id}`}>Details</Link>
              <Link className="bg-yellow-600 p-1 rounded-md mx-1 max-md:hidden" to={`/tickets/edit/${id}`}>Edit</Link>
              <Link className="bg-red-600 p-1 rounded-md mx-1" to={`/tickets/delete/${id}`}>Delete</Link>
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>
    );

  return (
    <div className="pageGeneralClass">
      <BackButton previousRoute="/"/>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-4x1 font-bold my-8">Tickets list</h1>
        <Link to="/tickets/create">
          <AiOutlinePlusSquare className="text-4xl text-blue-600"/>
        </Link>
      </div>
    { loading ? <Spinner/> : tickets.length > 0 ? ticketContent : noDataContent }
    </div>
  )
}
